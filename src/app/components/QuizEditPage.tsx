// Overall page for quiz editor -- contains quiz question edit component
"use client"

import styles from "../css/QuizEditPage.module.css";
import Button, {ButtonType} from "@/app/components/Button";
import Link from "next/link";
import Questions from "@/app/components/Questions";
import {FormEvent, useEffect, useState} from "react";
import {useParams, useRouter} from "next/navigation";
import connectMongoDB from "../../../lib/mongodb";
import {IQuizEdit, IQuizItemEdit} from "@/app/interfaces";

export default function QuizEditPage() {
    const { id } = useParams() // Get id of current quiz based on URL
    const [currQuiz, setCurrQuiz] = useState<IQuizEdit>() // Editable temporary item
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
                    setCurrQuiz(result.quiz)
                }
            }
        }

        getQuiz()
    }, [id])

    async function submitHandler(event: FormEvent) {
        event.preventDefault()

        // Update quiz
        await connectMongoDB()
        await fetch('http://localhost:3000/api/quizzes/' + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(currQuiz)
        })

        // Redirect to homepage
        router.push('/homepage')
    }

    function addDefaultQuestion() {
        if (!currQuiz) {
            return
        }

        const updatedQuestions: IQuizItemEdit[] = [
            ...currQuiz.quizItems, // Existing questions
            {
                question: 'Default question',
                answers: [
                    { content: 'First answer'},
                    { content: 'Second answer'}
                ],
                correctAnswerContent: 'First answer'
            }
        ]

        const updatedQuiz: IQuizEdit = {
            ...currQuiz,
            quizItems: updatedQuestions
        }

        setCurrQuiz(updatedQuiz)
    }

    // Handler for edit question component
    function editQuestionHandler(targetIdx: number, updatedQuizItem: IQuizItemEdit) {
        if (!currQuiz) {
            return
        }

        const updatedQuestions: IQuizItemEdit[] = currQuiz.quizItems.map((quizItem, idx) =>
            idx === targetIdx ? updatedQuizItem : quizItem
        )

        const updatedQuiz: IQuizEdit = {
            ...currQuiz,
            quizItems: updatedQuestions
        }

        setCurrQuiz(updatedQuiz)
    }

    // Generic function to update specific quiz fields
    const handleChange = (key: string, value: string) => {
        if (!currQuiz) {
            return
        }

        const updatedQuiz: IQuizEdit = {
            ...currQuiz,
            [key]: value
        }

        setCurrQuiz(updatedQuiz)
    }

    // Check if quiz is available
    if (!currQuiz) {
        return <p>Loading quiz...</p>
    }

    return (
        <div className={styles.totalContainer}>
            <div className={styles.topBar}>
                <Link href={"/homepage"}><Button buttonType={ButtonType.backArrow}/></Link>
                {/* Need to add a button type for the back arrow */}
                <h1>{currQuiz.name}</h1>
                {/* will need to change the pass value when we set up nav bar */}
                <Link href={""}><Button buttonType={ButtonType.gear}/></Link>
            </div>

            {/* Will use this in future: passedQuiz.quiz.quizItems*/}
            <form className={styles.formContainer} onSubmit={submitHandler}>
                <div className={styles.quizProps}>
                    <div className={styles.quizProp}>
                        <label className={styles.quizPropLabel}>Quiz Name:</label>
                        <input className={styles.quizPropInput} value={currQuiz.name}
                               placeholder={"Enter Quiz Name"} onChange={event => handleChange("name", event.target.value)}
                        />
                    </div>
                    <div className={styles.quizProp}>
                        <label className={styles.quizPropLabel}>Quiz Description: </label>
                        <textarea className={styles.quizPropInput + " " + styles.textArea}
                                  value={currQuiz.description}
                                  placeholder={"Enter Quiz Description"} onChange={event => handleChange("description", event.target.value)}/>
                    </div>
                    <div className={styles.quizProp}>
                        <label className={styles.quizPropLabel}>Quiz Photo: </label>
                        <input className={styles.quizPropInput} value={currQuiz.image}
                               placeholder={"Enter Photo URL"} onChange={event => handleChange("image", event.target.value)}/>
                    </div>
                </div>

                {/** Edit question **/}
                <Questions questions={currQuiz.quizItems} onEdit={editQuestionHandler}/>
                {/** Add new question **/}
                <Button buttonType={ButtonType.add} onClick={addDefaultQuestion}/>
                <hr className={styles.hrSeparate}/>

                <Button className={styles.submitButton} buttonType={ButtonType.save} type={"submit"}/>
            </form>
        </div>
    );
}

// const addQuestionHandler = (question: Question) => {
//     setQuestion((prevQuestions: Question[]) => [question, ...prevQuestions]);
// }
//
// // Will need later when we are importing a quiz
// interface QuizEditPageProps {
//     quiz: IQuiz;
// }
//
// /*
// for time being got rid of passing quiz
// passedQuiz: QuizEditPageProps
// dont have the DB functionality for that rn
// */