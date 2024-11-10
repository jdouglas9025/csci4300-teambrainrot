// Overall page for quiz editor -- contains quiz question edit component
"use client"

import styles from "../css/QuizEditPage.module.css";
import Button, {ButtonType} from "@/app/components/Button";
import Questions from "@/app/components/Questions";
import {Question} from "@/app/components/HomePage";
import {QUIZZES_INIT} from "@/app/components/HomePage";
import {useState} from "react";
import {useRouter} from "next/navigation";

const addQuestionHandler = (question: Question) => {
    setQuestion((prevQuestions: Question[]) => [question, ...prevQuestions]);
}

// Will need later when we are importing a quiz
interface QuizEditPageProps {
    quiz: Quiz;
}

/*
for time being got rid of passing quiz
passedQuiz: QuizEditPageProps
dont have the DB functionality for that rn
*/

export default function QuizEditPage() {

    const router = useRouter();

    const[questions, setQuestions] = useState(QUIZZES_INIT[2].questions);

    const addQuestionHandler = (question: Question) => {
        setQuestions((prevQuestions) => [question, ...prevQuestions]);
    }

    return (
        <div className={styles.totalContainer}>
            <div className={styles.topBar}>
                <Button buttonType={ButtonType.door} onClick={()=> router.push('/homepage')}/>
                {/* Need to add a button type for the back arrow */}
                <h1>{QUIZZES_INIT[2].name}</h1>
                {/* will need to change the pass value when we set up nav bar */}
                <Button buttonType={ButtonType.gear} onClick={()=>{}}/>
            </div>
            <div className={styles.mainContent}>
                {/* Will use this in future: passedQuiz.quiz.quizItems*/}
                <Questions questions={questions}/>
                <Button buttonType={ButtonType.add} onClick={()=>{}}/>
                <hr className={styles.hrSeparate}/>
                <Button className={styles.submitButton} buttonType={ButtonType.save} onClick={()=> router.push('/homepage')}/>
            </div>
        </div>
    );
}