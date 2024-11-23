import QuizFunc from "@/app/components/Quiz";
import styles from "@/app/css/Quizzes.module.css"
import {IQuiz} from "../../../models/UserSchema";
import Button, {ButtonType} from "@/app/components/Button";

interface quizzesProps{
    quizzes: IQuiz[];
}

export default function Quizzes({quizzes}: quizzesProps) {
    return (
        <ul className={styles.quizList}>
            {quizzes.map((quizPassed: IQuiz) =>
                <li key={quizPassed._id} className={styles.quizItem}>
                    <QuizFunc quiz={quizPassed}/>
                    <Button buttonType={ButtonType.add}/>
                </li>
            )}
        </ul>
    );
}