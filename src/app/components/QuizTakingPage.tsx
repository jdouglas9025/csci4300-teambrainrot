"use client"

import {FormEvent, useState} from "react";
import Button, {ButtonType} from "@/app/components/Button";
import {QuizItem} from "@/app/interfaces";
import styles from '../css/QuizTakingPage.module.css'
import dottedLineLightIcon from "@/app/icons/DottedLineLight.svg";
import gearLightIcon from "@/app/icons/GearLight.svg";
import Image from "next/image";

interface QuizTakingProps {
    quizTitle: string // Title of overall quiz
    quizItem: QuizItem // Current item within quiz
    backHandler: () => void
    submitHandler: (selectedAnswerId: string) => void
}

export default function QuizTakingPage(props: QuizTakingProps) {
    // Init selection to either existing selection (if reviewing) or none
    const [selectedOption, setSelectedOption] = useState(props.quizItem.selectedAnswerId || '')

    function handleSubmit(event: FormEvent) {
        event.preventDefault()
        props.submitHandler(selectedOption) // Store the selected option

        // Clear selected option so none for next item
        setSelectedOption('')
    }

    return (
        <>
            <div className={styles.navBar}>
                <Button buttonType={ButtonType.backArrow} type={'button'} className={styles.backArrow} onClick={props.backHandler}></Button>

                <Image src={dottedLineLightIcon} alt={'Dotted line icon'} className={styles.dottedLine}></Image>

                <h1>{props.quizTitle}</h1>

                <Image src={dottedLineLightIcon} alt={'Dotted line icon'} className={styles.dottedLine}></Image>

                <Image src={gearLightIcon} alt={'Gear icon'} className={styles.gear}></Image>
            </div>


            <div className={styles.container}>
                <p className={styles.question}>Q{props.quizItem.id}: {props.quizItem.question}</p>

                <form className={styles.formContainer} onSubmit={handleSubmit}>
                    {props.quizItem.answers.map(answer => (
                        <div className={styles.answer} key={answer.id}>
                            <label htmlFor={answer.id}>
                                <input
                                    type="radio"
                                    value={answer.id}
                                    checked={selectedOption === answer.id}
                                    onChange={event => setSelectedOption(event.target.value)}
                                />

                                <p><span className={styles.answerId}>{answer.id})</span> {answer.content}</p>
                            </label>
                        </div>
                    ))}

                    {/** No action for button since form will call handler **/}
                    <Button className={styles.button} type='submit' buttonType={ButtonType.submit} onClick={() => {
                    }}/>
                </form>
            </div>
        </>
    )
}