import styles from "../css/Answer.module.css";

interface AnswerProps {
    id: number;
    content: string;
    questionID: number;
}

export default function Answer(answer: AnswerProps) {

    let questionLetter: string = "";

    switch (answer.id) {
        case 1:
            questionLetter = "a";
            break;
        case 2:
            questionLetter = "b";
            break;
        case 3:
            questionLetter = "c";
            break;
        case 4:
            questionLetter = "d";
            break;
        default:
            questionLetter = "";
    }

    return (
        <div className={styles.flexContainer}>
            <label className={styles.letter}>{questionLetter})</label>
            <input className={styles.content} name={answer.id.toString()} value={answer.content} placeholder={"Enter Answer"}/>
            <input type={"radio"} value={answer.id.toString()} name={answer.questionID.toString()}/>
        </div>
    );
}