import styles from "@/app/css/Questions.module.css"
import QuestionFunc from "@/app/components/Question";
import Questions from "@/app/components/QuizEditPage";

interface QuestionsProps {
    questions: Questions[];
}

export default function Questions({questions}: QuestionsProps) {
    return(
        <ul className={styles.questionList}>
            {questions.map(questionPassed =>
                <li className={styles.listItem} key={questionPassed.id}>
                    <QuestionFunc question={questionPassed}/>
                </li>
            )}
        </ul>
    );
}