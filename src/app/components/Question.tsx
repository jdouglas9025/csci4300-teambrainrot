import {Answer} from "@/app/components/QuizEditPage";
import Button, {ButtonType} from "@/app/components/Button";

interface QuestionProps {
    question: {
        id: number;
        question: string;
        answer: string;
        options: Answer[];
    }
}

export default function QuestionsFunc({question}: QuestionProps) {
    return(
        <div>
            <form>
                <label>Question {question.id}</label>
                <input />
                {question.options.map((answerPassed: Answer) =>
                    <Answer answer={answerPassed}/>
                )}
                <div>
                    <Button buttonType={ButtonType.add} onClick={}/>
                    <p>Add New Answer</p>
                </div>
                {/* will have to get rid of this part if |options| > 4 */}
            </form>
        </div>
    );
}