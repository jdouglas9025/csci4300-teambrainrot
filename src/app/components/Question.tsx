import styles from "@/app/css/Question.module.css";
import Answer from "@/app/components/Answer";
import Button, {ButtonType} from "@/app/components/Button";
import {ChangeEvent, useState} from "react";
import {IQuizItem} from "../../../models/UserSchema";
import {IAnswerEdit, IQuizEdit, IQuizItemEdit} from "@/app/interfaces";

interface QuestionProps {
    index: number
    question: IQuizItemEdit
    questionNum: number
    onEdit: (targetIdx: number, currQuestion: IQuizItemEdit) => void
}

export default function QuestionsFunc(props: QuestionProps) {
    const [currQuestion, setCurrQuestion] = useState<IQuizItemEdit>(props.question)

    function addDefaultAnswer() {
        if (!currQuestion) {
            return
        }

        const updatedAnswers: IAnswerEdit[] = [
            ...currQuestion.answers, // Existing answers
            {
                content: 'Next answer'
            }
        ]

        const updatedQuestion: IQuizItemEdit = {
            ...currQuestion,
            answers: updatedAnswers
        }

        setCurrQuestion(updatedQuestion)
    }

    function onEditQuestion(question: string) {
        if (!currQuestion) {
            return
        }

        const updatedQuestion: IQuizItemEdit = {
            ...currQuestion,
            question: question
        }

        setCurrQuestion(updatedQuestion)
        props.onEdit(props.index, updatedQuestion) // Pass back to parent
    }

    function onEditAnswer(targetIdx: number, currAnswer: IAnswerEdit) {
        if (!currQuestion) {
            return
        }

        const updatedAnswers = currQuestion.answers.map((answer, idx) =>
            // Update only target answer
            idx === targetIdx ? currAnswer : answer
        )

        const updatedQuestion: IQuizItemEdit = {
            ...currQuestion,
            answers: updatedAnswers
        }

        setCurrQuestion(updatedQuestion)
        props.onEdit(props.index, updatedQuestion) // Pass back to parent
    }

    function onCorrectAnswerChange(content: string) {
        if (!currQuestion) {
            return
        }

        const updatedQuestion: IQuizItemEdit = {
            ...currQuestion,
            correctAnswerContent: content
        }

        setCurrQuestion(updatedQuestion)
        props.onEdit(props.index, updatedQuestion) // Pass back to parent
    }

    return(
        <div className={styles.questionContainer}>
            <label className={styles.questionHeader}>Question {props.questionNum}:</label>
            <textarea className={styles.questionInput} value={currQuestion.question} placeholder={"Enter a Question"} onChange={event => onEditQuestion(event.target.value)}/>
            {/** Iterate over answers **/}
            {currQuestion.answers.map((answer, index) =>
                <Answer key={index} index={index} content={answer.content} questionNum={props.questionNum} onEdit={onEditAnswer} onCorrectAnswerChange={onCorrectAnswerChange}/>
            )}

            {currQuestion.answers.length < 4 ? (
                    <div className={styles.addNewContainer}>
                        <Button className={styles.addAnswerButton} buttonType={ButtonType.add} onClick={addDefaultAnswer}/>
                        <p>Add New Answer</p>
                    </div>
                ) : (
                    <></>
                )
            }
        </div>
    );
}


/*
    const [enteredQuestion, setEnteredQuestion] = useState<string>('');
    const [enteredAnswer, setEnteredAnswer] = useState<string>('');
    const [enteredOptions, setEnteredOptions = useState<Answer[]>([]);
    const [enteredOption, setEnteredOption] = useState<Answer>({});

    const quesitonChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setEnteredQuestion(event.target.value);
    }
    const answerNameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setEnteredAnswer(event.target.value);
    }
    const optionsChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setEnteredOptions(event.target.value);
    }
    const optionChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setEnteredOptions(event.target.value);
    }
*/