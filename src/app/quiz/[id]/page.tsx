"use client"

import LoginPage from "@/app/components/LoginPage";
import QuizTakingPage from "@/app/components/QuizTakingPage";
import {Quiz, sampleQuiz} from "@/app/interfaces";
import {FormEvent, useEffect, useState} from "react";
import {QUIZZES_INIT} from "@/app/components/HomePage";
import QuizResultsPage from "@/app/components/QuizResultsPage";
import {useParams, useRouter} from "next/navigation";
import {IQuiz, IQuizItem} from "../../../../models/UserSchema";
import {Document} from "mongoose";
import connectMongoDB from "../../../../lib/mongodb";

// Wrapper for in-progress quiz -- loads each item in a quiz taking page
export default function InProgressQuizWrapper() {
    const { id } = useParams() // Get id of current quiz based on URL
    const [quiz, setQuiz] = useState<IQuiz>()
    const [index, setIndex] = useState(0)
    const [quizCompleted, setQuizCompleted] = useState(false)
    const [quizAnswers, setQuizAnswers] = useState<string[]>([])

    const router = useRouter()

    // Load quiz data
    useEffect(() => {
        const getQuiz = async () => {
            if (id) {
                // Load data
                await connectMongoDB()
                const response = await fetch('http://localhost:3000/api/quizzes/' + id)
                const result = await response.json()
                if (result.quiz) {
                    setQuiz(() => result.quiz)
                    setQuizAnswers(() => new Array(result.quiz.quizItems.length))
                }
            }
        }

        getQuiz()
    }, [id])

    // Check if quiz is available
    if (!quiz) {
        return <p>Loading quiz...</p>
    }

    function backHandler() {
        if (index == 0) {
            // Send user home if on first item
            router.push('/homepage')
        } else {
            // Send user back one question
            setIndex(prevIndex => prevIndex - 1)
        }
    }

    function submitHandler(selectedAnswerContent: string) {
        // Update selected answer
        setQuizAnswers(prevAnswers => {
            // Create new array
            const updatedAnswers = [...prevAnswers]
            updatedAnswers[index] = selectedAnswerContent

            return updatedAnswers
        })

        if (quiz && index < quiz.quizItems.length - 1) {
            // Move to next question
            setIndex(prevIndex => prevIndex + 1)
        } else {
            // Quiz complete
            setQuizCompleted(true)
        }
    }

    return (
        <div>
            {quizCompleted ? (
                /** Load results page **/
                <QuizResultsPage quizTitle={quiz.name} quizItems={quiz.quizItems} quizAnswers={quizAnswers}></QuizResultsPage>
            ) : (
                /** Load the current quiz item **/
                <QuizTakingPage quizTitle={quiz.name} quizItem={quiz.quizItems[index]} questionNumber={index + 1} selectedAnswer={quizAnswers[index]} submitHandler={submitHandler} backHandler={backHandler}></QuizTakingPage>
            )}
        </div>
    );
}