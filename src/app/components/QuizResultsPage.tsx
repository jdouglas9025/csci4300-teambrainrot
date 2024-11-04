"use client"

import {QuizItem} from "@/app/interfaces";
import checkMark from '../icons/CheckMarkLight.svg'
import xMark from '../icons/XMarkLight.svg'
import Image from "next/image";
import styles from '../css/QuizResults.module.css'

interface QuizResultsProps {
    quizItems: QuizItem[]
}

export default function QuizResultsPage(props: QuizResultsProps) {
    const correctQuestions = props.quizItems.filter(quizItem => quizItem.selectedAnswerId === quizItem.correctAnswerId)
    const incorrectQuestions = props.quizItems.filter(quizItem => quizItem.selectedAnswerId !== quizItem.correctAnswerId)

    return (
        <div>
            <p>Incorrect Questions</p>
            <p>{correctQuestions.length}/{correctQuestions.length + incorrectQuestions.length} Correct</p>

            {/** First filter to only incorrect questions, then display them **/}
            {incorrectQuestions.map(quizItem => (
                <div key={quizItem.id} className={styles.quizItem}>
                    <p>{quizItem.question}</p>
                    <ul>{quizItem.answers.map(answer => (
                        <li key={answer.id} className={styles.answerItem}>
                            <Image src={quizItem.correctAnswerId === answer.id ? checkMark : xMark} alt={quizItem.correctAnswerId === answer.id ? 'A checkmark.' : 'An x mark.'} className={styles.answerImage}/>

                            <p className={styles.answerContent}>{answer.id}). {answer.content}</p>
                        </li>
                    ))}</ul>
                </div>
            ))}
        </div>
    )
}