import Quiz from "@/app/components/Quiz";
import QuizFunc from "@/app/components/Quiz";
import styles from "@/app/css/Quizzes.module.css"

interface quizzesProps{
    quizzes: Quiz[];
}

export default function Quizzes({quizzes}: quizzesProps) {
    return (
        <ul className={styles.quizList}>
            {quizzes.map((quizPassed: Quiz) =>
                <li key={quizPassed.id} className={styles.quizItem}>
                    <QuizFunc quiz={quizPassed}/>
                </li>
            )}
        </ul>
    );
}