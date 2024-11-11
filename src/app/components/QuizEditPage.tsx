// Overall page for quiz editor -- contains quiz question edit component
"use client"

import styles from "../css/QuizEditPage.module.css";
import Button, {ButtonType} from "@/app/components/Button";
import Link from "next/link";
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

    const[questions, setQuestions] = useState(QUIZZES_INIT[2].questions);

    const addQuestionHandler = (question: Question) => {
        setQuestions((prevQuestions) => [...prevQuestions, question]);
    }

    return (
        <div className={styles.totalContainer}>
            <div className={styles.topBar}>
                <Link href={"/homepage"}><Button buttonType={ButtonType.door}/></Link>
                {/* Need to add a button type for the back arrow */}
                <h1>{QUIZZES_INIT[2].name}</h1>
                {/* will need to change the pass value when we set up nav bar */}
                <Link href={""}><Button buttonType={ButtonType.gear}/></Link>
            </div>
                {/* Will use this in future: passedQuiz.quiz.quizItems*/}
            <form className={styles.formContainer}>
                <div className={styles.quizProps}>
                    <div className={styles.quizProp}>
                        <label className={styles.quizPropLabel}>Quiz Name:</label>
                        <input className={styles.quizPropInput} value={QUIZZES_INIT[2].name}
                         placeholder={"Enter Quiz Name"}/>
                    </div>
                    <div className={styles.quizProp}>
                        <label className={styles.quizPropLabel}>Quiz Description: </label>
                        <textarea className={styles.quizPropInput + " " + styles.textArea} value={QUIZZES_INIT[2].desc}
                         placeholder={"Enter Quiz Description"}/>
                    </div>
                    <div className={styles.quizProp}>
                        <label className={styles.quizPropLabel}>Quiz Photo: </label>
                        <input className={styles.quizPropInput} value={QUIZZES_INIT[2].imageURL}
                           placeholder={"Enter Photo URL"}/>
                    </div>
                </div>
                <Questions questions={questions}/>
                <Button buttonType={ButtonType.add} onClick={() => {
                }}/>
                <hr className={styles.hrSeparate}/>
                <Link href={"/homepage"}>
                    <Button className={styles.submitButton} buttonType={ButtonType.save} type={"submit"}/>
                </Link>
            </form>
        </div>
    );
}