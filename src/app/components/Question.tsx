import styles from "@/app/css/Question.module.css";
import Answer from "@/app/components/Answer";
import Button, {ButtonType} from "@/app/components/Button";
import {ChangeEvent, useState} from "react";

interface QuestionProps {
    question: {
        id: number;
        question: string;
        answer: string;
        options: Answer[];
    }
}

export default function QuestionsFunc({question}: QuestionProps) {
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

    return(
        <div className={styles.questionContainer}>
            <label className={styles.questionHeader}>Question {question.id}:</label>
            <textarea className={styles.questionInput} value={question.question}
                      placeholder={"Enter a Question"}/>
            {question.options.map((answer: Answer) =>
                <Answer id={answer.id} content={answer.content} questionID={question.id}/>
            )}
            <div className={styles.addNewContainer}>
                <Button className={styles.addAnswerButton} buttonType={ButtonType.add} onClick={() => {
                }}/>
                <p>Add New Answer</p>
            </div>
            {/* will have to get rid of this part if |options| > 4 */}
        </div>
    );
}