import Quiz from "@/app/components/Quiz";
import QuizFunc from "@/app/components/Quiz";

interface quizzesProps{
    quizzes: Quiz[];
}

export default function Quizzes({quizzes}: quizzesProps) {
    return (
        <ul>
            {quizzes.map((quizPassed: Quiz) =>
                <li key={quizPassed.id}>
                    <QuizFunc quiz={quizPassed}/>
                </li>
            )}
        </ul>
    );
}