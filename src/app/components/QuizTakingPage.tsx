"use client"

import {FormEvent, useState} from "react";
import Button, {ButtonType} from "@/app/components/Button";
import styles from '../css/QuizTakingPage.module.css'
import dottedLineLightIcon from "@/app/icons/DottedLineLight.svg";
import gearLightIcon from "@/app/icons/GearLight.svg";
import Image from "next/image";
import {IQuizItem} from "../../../models/UserSchema";
import NavBar from "@/app/components/NavBar";
import { useDarkMode } from "./DarkModeContext";

interface QuizTakingProps {
    quizTitle: string // Title of overall quiz
    quizItem: IQuizItem // Current item within quiz
    questionNumber: number
    selectedAnswer: string // Existing selection
    backHandler: () => void
    submitHandler: (selectedAnswer: string) => void
}

export default function QuizTakingPage(props: QuizTakingProps) {
    // Init selection to either existing selection (if reviewing) or none
    const [selectedOption, setSelectedOption] = useState(props.selectedAnswer || '')

    function handleSubmit(event: FormEvent) {
        event.preventDefault()
        props.submitHandler(selectedOption) // Store the selected option

        // Clear selected option so none for next item
        setSelectedOption('')
    }

    function convertAnswerIndexToLetter(index: number) {
        switch (index) {
            case 0: return 'A'
            case 1: return 'B'
            case 2: return 'C'
            case 3: return 'D'
            // Any additional conversions
        }
    }

    const { isDarkMode, setDarkMode } = useDarkMode();


    return (
        <>
            <NavBar leftIcon={
                <Button buttonType={ButtonType.backArrow} type={'button'} className={styles.backArrow} onClick={props.backHandler}></Button>}
                title={props.quizTitle}
                rightIcon={<div></div>}
            />

            <div className={styles.container}>
                <p className={`${styles.question} ${isDarkMode ? styles.darkMode : ''}`}>Q{props.questionNumber}: {props.quizItem.question}</p>

                <form className={styles.formContainer} onSubmit={handleSubmit}>
                    {props.quizItem.answers.map((answer, index) => (
                        <div className={`${styles.answer} ${isDarkMode ? styles.darkMode : ''}`} key={answer._id}>
                            <label htmlFor={answer.content}>
                                <input
                                    type="radio"
                                    value={answer.content}
                                    checked={selectedOption === answer.content}
                                    onChange={() => setSelectedOption(answer.content)}
                                />

                                {/** Use index of current answer in array as letter to allow randomization **/}
                                <p><span className={styles.answerId}>{convertAnswerIndexToLetter(index)})</span> {answer.content}</p>
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