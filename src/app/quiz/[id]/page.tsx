"use client"

import LoginPage from "@/app/components/LoginPage";
import QuizTakingPage from "@/app/components/QuizTakingPage";
import {Quiz, sampleQuiz} from "@/app/interfaces";
import {FormEvent, useState} from "react";
import {QUIZZES_INIT} from "@/app/components/HomePage";
import QuizResultsPage from "@/app/components/QuizResultsPage";

export interface InProgressQuizProps {
    params: {id: string} // Dynamic ID passed by NextJS
}

// Wrapper for in-progress quiz -- loads each item in a quiz taking page
export default function InProgressQuizWrapper(props: InProgressQuizProps) {
    // Load data from database using id
    // Hardcode for now
    const tempProps = {
        quiz: sampleQuiz
    }

    const [index, setIndex] = useState(0)
    const [quizCompleted, setQuizCompleted] = useState(false)
    const [quizItems, setQuizItems] = useState(tempProps.quiz.quizItems)

    function submitHandler(selectedAnswerId: string) {
        // Update selected answer
        setQuizItems(prevItems => {
            // Create new array
            const updatedItems = [...prevItems]
            updatedItems[index].selectedAnswerId = selectedAnswerId

            return updatedItems
        })

        if (index < tempProps.quiz.quizItems.length - 1) {
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
                <QuizResultsPage quizItems={quizItems}></QuizResultsPage>
            ) : (
                /** Load the current quiz item **/
                <QuizTakingPage quizItem={quizItems[index]} submitHandler={submitHandler}></QuizTakingPage>
            )}
        </div>
    );
}