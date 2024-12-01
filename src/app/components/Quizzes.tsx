import QuizFunc from "@/app/components/Quiz";
import styles from "@/app/css/Quizzes.module.css"
import {IQuiz} from "../../../models/UserSchema";
import Button, {ButtonType} from "@/app/components/Button";
import {useSession} from "next-auth/react";
import connectMongoDB from "../../../lib/mongodb";
import {useRouter} from "next/navigation";
import {useState} from "react";


interface quizzesProps{
    quizzes: IQuiz[]
    onDelete: (quizId: string) => void
}

export default function Quizzes(props: quizzesProps) {
    return (
        <ul className={styles.quizList}>
            {props.quizzes.map((quizPassed: IQuiz) =>
                <li key={quizPassed._id} className={styles.quizItem}>
                    <QuizFunc quiz={quizPassed}/>
                    <Button buttonType={ButtonType.trash} onClick={() => props.onDelete(quizPassed._id)}/>
                </li>
            )}
        </ul>
    );
}