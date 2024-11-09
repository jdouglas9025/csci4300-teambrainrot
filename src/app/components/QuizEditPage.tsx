// Overall page for quiz editor -- contains quiz question edit component

import styles from "../css/QuizEditPage.module.css";
import Button, {ButtonType} from "@/app/components/Button";
import QuestionsFunc from "@/app/components/Questions";

export type Answer = {
    id: number;
    content: string;
}

type Question = {
    id: number;
    question: string;
    answer: string;
    options: Answer[];
}

const QUESTIONS_INIT: Question[] = [];

const addQuestionHandler = (question: Question) => {
    setQuestion((prevQuestions: Question[]) => [question, ...prevQuestions]);
}

export default function QuizEditPage() {
    return (
        <div>
            <div className={styles.topBar}>
                <Button buttonType={ButtonType.door} onClick={}/>
                {/* Need to add a button type for the back arrow */}
                <NavBar heading={"New Quiz"}/>
                {/* will need to change the pass value when we set up nav bar */}
                <Button buttonType={ButtonType.gear} onClick={}/>
            </div>
            <div>
                <QuestionsFunc />
                <Button buttonType={ButtonType.add} onClick={}/>
                <hr className={styles.hrSeparate}/>
                <Button buttonType={ButtonType.submit} onClick={}/>
                {/* add button for the save quiz */}
            </div>
        </div>
    );
}