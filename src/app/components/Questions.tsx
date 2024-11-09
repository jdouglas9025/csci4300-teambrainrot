import QuestionFunc from "@/app/components/Question";
import Questions from "@/app/components/QuizEditPage";

interface QuestionsProps {
    questions: Questions[];
}

export default function Questions({questions}: QuestionsProps) {
    return(
        <ul>
            {questions.map(questionPassed =>
                <li key={questionPassed.id}>
                    <QuestionFunc question={questionPassed}/>
                </li>
            )}
        </ul>
    );
}