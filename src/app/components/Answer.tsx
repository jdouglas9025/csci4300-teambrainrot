import styles from "../css/Answer.module.css";

interface AnswerProps {
    answer: {
        id: number;
        content: string;
    }
}

export default function Answer({answer}: AnswerProps) {

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
            <label className={styles.letter} for={answer.id.toString()} >{questionLetter}</label>
            <input className={styles.content} id={answer.id.toString()} name={answer.id.toString()} value={answer.content} placeholder={"Enter Answer"}/>
        </div>
    );
}