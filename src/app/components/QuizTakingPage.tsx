"use client"

import {FormEvent, useState} from "react";
import Button, {ButtonType} from "@/app/components/Button";
import {QuizItem} from "@/app/interfaces";
import styles from '../css/QuizTakingPage.module.css'

interface QuizTakingProps {
    quizItem: QuizItem // Current item within quiz
}

export default function QuizTakingPage(props: QuizTakingProps) {
    const [selectedOption, setSelectedOption] = useState('')

    function handleSubmit(event: FormEvent) {
        event.preventDefault()
        console.log('Answered...')
    }

    return (
        <div className={styles.container}>
            <p className={styles.question}>Q{props.quizItem.id}: {props.quizItem.question}</p>

            <form className={styles.formContainer} onSubmit={handleSubmit}>
                {props.quizItem.answers.map(answer => (
                    <div className={styles.answer} key={answer.id}>
                        <label htmlFor={answer.id}>
                            <input
                                type="radio"
                                value={answer.content}
                                checked={selectedOption === answer.content}
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
    )
}