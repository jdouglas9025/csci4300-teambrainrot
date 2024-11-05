"use client"

import {Quiz, QuizItem} from "@/app/interfaces";
import checkMark from '../icons/CheckMarkLight.svg'
import xMark from '../icons/XMarkLight.svg'
import Image from "next/image";
import styles from '../css/QuizResultsPage.module.css'

interface QuizResultsProps {
    quiz: Quiz
}

export default function QuizResultsPage(props: QuizResultsProps) {
    const correctQuestions = props.quiz.quizItems.filter(quizItem => quizItem.selectedAnswerId === quizItem.correctAnswerId)
    const incorrectQuestions = props.quiz.quizItems.filter(quizItem => quizItem.selectedAnswerId !== quizItem.correctAnswerId)

    return (
        <div className={styles.container}>
            <div className={styles.results}>
                <p className={styles.score}>{correctQuestions.length / (correctQuestions.length + incorrectQuestions.length) * 100}%</p>
                <p>{correctQuestions.length}/{correctQuestions.length + incorrectQuestions.length} Correct</p>

                <p className={styles.incorrectQuestions}>Incorrect Questions</p>
            </div>

            {/** First filter to only incorrect questions, then display them **/}
            {incorrectQuestions.map(quizItem => (
                <div key={quizItem.id} className={styles.quizItem}>
                    <p className={styles.question}>Q{quizItem.id}: {quizItem.question}</p>

                    <ul className={styles.answerContainer}>{quizItem.answers.map(answer => (
                        <li key={answer.id} className={styles.answer}>
                            <Image src={quizItem.correctAnswerId === answer.id ? checkMark : xMark} alt={quizItem.correctAnswerId === answer.id ? 'A checkmark.' : 'An x mark.'} className={styles.answerImage}/>

                            <p><span className={styles.answerId}>{answer.id})</span> {answer.content}</p>
                        </li>
                    ))}</ul>
                </div>
            ))}
        </div>
    )
}