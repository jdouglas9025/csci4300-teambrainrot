"use client"

import {FormEvent, useState} from "react";
import Button, {ButtonType} from "@/app/components/Button";
import {QuizItem} from "@/app/interfaces";
import styles from '../css/QuizTakingPage.module.css'
import Image from "next/image";
import home from "@/app/icons/HomeLight.svg";
import Link from "next/link";

interface QuizTakingProps {
    quizItem: QuizItem // Current item within quiz
    submitHandler: (selectedAnswerId: string) => void
}

export default function QuizTakingPage(props: QuizTakingProps) {
    const [selectedOption, setSelectedOption] = useState('')

    function handleSubmit(event: FormEvent) {
        event.preventDefault()
        props.submitHandler(selectedOption) // Store the selected option
    }

    return (
        <>
            <Link href={'/homepage'}>
                <Image src={home} alt={'A home icon.'} className={styles.homeImage}/>
            </Link>

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