"use client"

import {QuizItem} from "@/app/interfaces";
import checkMark from '../icons/CheckMarkLight.svg'
import xMark from '../icons/XMarkLight.svg'
import home from '../icons/HomeLight.svg'
import Image from "next/image";
import styles from '../css/QuizResultsPage.module.css'
import Link from "next/link";
import dottedLineLightIcon from "@/app/icons/DottedLineLight.svg";
import gearLightIcon from "@/app/icons/GearLight.svg";
import {IQuizItem} from "../../../models/UserSchema";

interface QuizResultsProps {
    quizTitle: string
    quizItems: IQuizItem[]
    quizAnswers: string[]
}

export default function QuizResultsPage(props: QuizResultsProps) {
    const incorrectQuestionNums: number[] = []
    const incorrectQuestions = props.quizItems.filter((quizItem, index) => {
        if (quizItem.correctAnswerContent !== props.quizAnswers[index]) {
            incorrectQuestionNums.push(index + 1)
            return true
        }

        return false
    })
    const correctQuestionsCount = props.quizItems.length - incorrectQuestions.length

    function convertAnswerIndexToLetter(index: number) {
        switch (index) {
            case 0: return 'A'
            case 1: return 'B'
            case 2: return 'C'
            case 3: return 'D'
            // Any additional conversions
        }
    }

    return (
        <>
            <div className={styles.navBar}>
                <Link href={'/homepage'}>
                    <Image src={home} alt={'A home icon.'} className={styles.home}/>
                </Link>

                <Image src={dottedLineLightIcon} alt={'Dotted line icon'} className={styles.dottedLine}></Image>

                <h1>{props.quizTitle}</h1>

                <Image src={dottedLineLightIcon} alt={'Dotted line icon'} className={styles.dottedLine}></Image>

                <Image src={gearLightIcon} alt={'Gear icon'} className={styles.gear}></Image>
            </div>

            <div className={styles.container}>
                <div className={styles.results}>
                    <p className={styles.score}>{Math.round(correctQuestionsCount / (props.quizItems.length) * 100)}%</p>
                    <p>{correctQuestionsCount}/{props.quizItems.length} Correct</p>

                    <p className={styles.incorrectQuestions}>{incorrectQuestions.length == 0 ? 'Great job!' : 'Incorrect Questions'}</p>
                </div>

                {/** First filter to only incorrect questions, then display them **/}
                {incorrectQuestions.map((quizItem, index) => (
                    <div key={quizItem._id} className={styles.quizItem}>
                        <p className={styles.question}>Q{incorrectQuestionNums[index]}: {quizItem.question}</p>

                        <ul className={styles.answerContainer}>{quizItem.answers.map((answer, index) => (
                            <li key={answer._id} className={styles.answer}>
                                <Image src={answer.content === quizItem.correctAnswerContent ? checkMark : xMark} alt={answer.content === quizItem.correctAnswerContent ? 'A checkmark.' : 'An x mark.'} className={styles.answerImage}/>

                                <p><span className={styles.answerId}>{convertAnswerIndexToLetter(index)})</span> {answer.content}</p>
                            </li>
                        ))}</ul>
                    </div>
                ))}
            </div>
        </>
    )
}