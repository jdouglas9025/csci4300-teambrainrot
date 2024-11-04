"use client"

import {FormEvent, useState} from "react";
import Button, {ButtonType} from "@/app/components/Button";
import {QuizItem} from "@/app/interfaces";

interface QuizTakingProps {
    quizItem: QuizItem
}

export default function QuizTakingPage(props: QuizTakingProps) {
    const [selectedOption, setSelectedOption] = useState('')

    function handleSubmit(event: FormEvent) {
        event.preventDefault()
        console.log('Answered...')
    }

    return (
        <div>
            <p>{props.quizItem.question}</p>

            <form onSubmit={handleSubmit}>
                {props.quizItem.answers.map(answer => (
                    <>
                        <label htmlFor={answer.id}>
                            <input
                                type="radio"
                                value={answer.content}
                                checked={selectedOption === answer.content}
                                onChange={event => setSelectedOption(event.target.value)}
                            />

                            {answer.id}). {answer.content}
                        </label>
                    </>
                ))}

                {/** No action for button since form will call handler **/}
                <Button type='submit' buttonType={ButtonType.submit} onClick={() => {
                }}/>
            </form>
        </div>
    )
}