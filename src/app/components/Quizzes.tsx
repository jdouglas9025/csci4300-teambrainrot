import QuizFunc from "@/app/components/Quiz";
import styles from "@/app/css/Quizzes.module.css"
import {IQuiz} from "../../../models/UserSchema";
import Button, {ButtonType} from "@/app/components/Button";
import {useSession} from "next-auth/react";
import connectMongoDB from "../../../lib/mongodb";
import {useRouter} from "next/navigation";


interface quizzesProps{
    quizzes: IQuiz[];
}

export default function Quizzes({quizzes}: quizzesProps) {
    async function removeQuiz(quizId) {
        await connectMongoDB();
        await fetch('http://localhost:3000/api/quizzes/' +  quizId, {
            method: 'DELETE',
        })
        window.location.reload(); // temporary measure need to find state way
    }

    return (
        <ul className={styles.quizList}>
            {quizzes.map((quizPassed: IQuiz) =>
                <li key={quizPassed._id} className={styles.quizItem}>
                    <QuizFunc quiz={quizPassed}/>
                    <Button buttonType={ButtonType.trash} onClick={() => {removeQuiz(quizPassed._id)}}/>
                </li>
            )}
        </ul>
    );
}