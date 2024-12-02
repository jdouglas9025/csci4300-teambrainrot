import styles from "@/app/css/Questions.module.css"
import QuestionFunc from "@/app/components/Question";
import {IQuizItem} from "../../../models/schemas";
import {IQuizItemEdit} from "@/app/interfaces";

interface QuestionsProps {
    questions: IQuizItemEdit[];
    onEdit: (targetIdx: number, currQuestion: IQuizItemEdit) => void
}

export default function Questions(props: QuestionsProps) {
    return(
        <ul className={styles.questionList}>
            {props.questions.map((questionPassed, index)=>
                <li className={styles.listItem} key={index}>
                    <QuestionFunc index={index} question={questionPassed} questionNum={index + 1} onEdit={props.onEdit}/>
                </li>
            )}
        </ul>
    );
}