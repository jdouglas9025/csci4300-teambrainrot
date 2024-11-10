"use client"

import {QuizItem} from "@/app/interfaces";
import checkMark from '../icons/CheckMarkLight.svg'
import xMark from '../icons/XMarkLight.svg'
import home from '../icons/HomeLight.svg'
import Image from "next/image";
import styles from '../css/QuizResultsPage.module.css'
import Link from "next/link";

interface QuizResultsProps {
    quizItems: QuizItem[]
}

export default function QuizResultsPage(props: QuizResultsProps) {
    const correctQuestions = props.quizItems.filter(quizItem => quizItem.selectedAnswerId === quizItem.correctAnswerId)
    const incorrectQuestions = props.quizItems.filter(quizItem => quizItem.selectedAnswerId !== quizItem.correctAnswerId)

    return (
        <>
            <Link href={'/homepage'}>
                <Image src={home} alt={'A home icon.'} className={styles.homeImage}/>
            </Link>

            <div className={styles.container}>
                <div className={styles.results}>
                    <p className={styles.score}>{Math.round(correctQuestions.length / (correctQuestions.length + incorrectQuestions.length) * 100)}%</p>
                    <p>{correctQuestions.length}/{correctQuestions.length + incorrectQuestions.length} Correct</p>

                    <p className={styles.incorrectQuestions}>{incorrectQuestions.length == 0 ? 'Great job!' : 'Incorrect Questions'}</p>
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
        </>
    )
}