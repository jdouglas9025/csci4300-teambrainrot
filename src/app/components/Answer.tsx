import styles from "../css/Answer.module.css";
import {IAnswerEdit} from "@/app/interfaces";
import {useEffect, useState} from "react";
import { useDarkMode } from "./DarkModeContext";

interface AnswerProps {
    index: number;
    content: string;
    questionNum: number;
    onEdit: (targetIdx: number, currAnswer: IAnswerEdit) => void
    onCorrectAnswerChange: (correctAnswerContent: string) => void
}

export default function Answer(props: AnswerProps) {
    const { isDarkMode, setDarkMode } = useDarkMode();

    const [currContent, setCurrContent] = useState(props.content)

    useEffect(() => {
        setCurrContent(props.content)
    }, [props.content])

    function onEditAnswer(content: string) {
        setCurrContent(content)

        const updatedAnswer: IAnswerEdit = {
            content: content
        }

        props.onEdit(props.index, updatedAnswer)
    }

    let questionLetter: string = "";

    switch (props.index + 1) {
        case 1:
            questionLetter = "A";
            break;
        case 2:
            questionLetter = "B";
            break;
        case 3:
            questionLetter = "C";
            break;
        case 4:
            questionLetter = "D";
            break;
        default:
            questionLetter = "";
    }

    return (
        <div className={styles.flexContainer}>
            <label className={styles.letter}>{questionLetter})</label>
            <input className={styles.content} style={{
                filter: isDarkMode ? "invert(1)" : "invert(0)",
                transition: "filter 0.3s ease",
            }} value={currContent} placeholder={"Enter Answer"} onChange={event => onEditAnswer(event.target.value)}/>
            <input
                type="radio"
                value={currContent}
                name={props.questionNum.toString()}
                onChange={() =>
                    {
                        props.onCorrectAnswerChange(currContent)
                    }
                }
            />
        </div>
    );
}