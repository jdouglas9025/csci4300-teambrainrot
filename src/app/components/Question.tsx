import styles from "@/app/css/Question.module.css";
import Answer from "@/app/components/Answer";
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
        <div className={styles.questionContainer}>
            <form className={styles.formContainer}>
                <label className={styles.questionHeader} for={question.id.toString()}>Question {question.id}:</label>
                <textarea className={styles.questionInput} id={question.id.toString()} name={question.id.toString()} type={"text"} value={question.question} placeholder={"Enter a Question"}/>
                {question.options.map((answerPassed: Answer) =>
                    <Answer answer={answerPassed}/>
                )}
                <div className={styles.addNewContainer}>
                    <Button className={styles.addAnswerButton} buttonType={ButtonType.add} onClick={() => {}}/>
                    <p>Add New Answer</p>
                </div>
                {/* will have to get rid of this part if |options| > 4 */}
            </form>
        </div>
    );
}