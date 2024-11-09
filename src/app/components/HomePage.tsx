// Page for when user is signed in (quiz selection/home page
"use client";
import styles from "@/app/css/HomePage.module.css";
import {Quiz} from "@/app/interfaces";
import Quizzes from "@/app/components/Quizzes";
import Button, {ButtonType} from "@/app/components/Button";
import {useState} from "react";
import {caveat} from "@/app/layout";

type Quiz = {
    id: number;
    name: string;
    numQuestions: number;
    desc: string;
}

const QUIZZES_INIT: Quiz[] = [
    {
        id: 1,
        name: 'defaultQuiz',
        numQuestions: 0,
        desc: 'this is the default quiz',
    },
];

interface HomePageProps {
    userName: string;
}

export default function HomePage(props: HomePageProps) {
    const[quizzes, setQuizzes] = useState(QUIZZES_INIT);

    const addQuizHandler = (quiz: Quiz) => {
        setQuizzes((prevQuizzes) => [quiz, ...prevQuizzes]);
    }

    return (
        <div className={styles.dottedOutline}>
            <div className={styles.navBar}>
                <Button buttonType={ButtonType.door} onClick={/*() => router.push('/quizPlay')*/}/>
                <div>Icon</div>
                <Button buttonType={ButtonType.gear} onClick={/* Day/Night Function */}/>
                {/* Need to change this button to a day/night */}
            </div>
            <h1 className={`${caveat.variable}`}>Welcome, {props.userName}</h1>
            <h2 className={`${caveat.variable}`}>Choose or Create a Quiz</h2>
            <Quizzes quizzes={quizzes}/>
            <Button buttonType={ButtonType.add} onClick={}/>
        </div>
    );
}