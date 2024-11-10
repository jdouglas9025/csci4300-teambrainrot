// Page for when user is signed in (quiz selection/home page
"use client"

import React from "react";
import styles from "@/app/css/HomePage.module.css";
import Quizzes from "@/app/components/Quizzes";
import Button, {ButtonType} from "@/app/components/Button";
import {useRouter} from "next/navigation";
import {useState} from "react";

export type Answer = {
    id: number;
    content: string;
}

export type Question = {
    id: number;
    question: string;
    answer: number;
    options: Answer[];
}

export type Quiz = {
    id: number;
    name: string;
    desc: string;
    questions: Question[];
}

export const QUIZZES_INIT: Quiz[] = [
    {
        id: 1,
        name: 'defaultQuiz1',
        desc: 'This is the default quiz.',
        questions: [
            {
                id: 1,
                question: "what is default question is this?",
                answer: 1,
                options: [
                    {
                        id: 1,
                        content: "default1"
                    }
                ]
            }
        ],
    },
    {
        id: 2,
        name: 'defaultQuiz2',
        desc: 'This quiz has 2 questions.',
        questions: [
            {
                id: 1,
                question: "what is default question is this?",
                answer: 2,
                options: [
                    {
                        id: 1,
                        content: "default1"
                    },
                    {
                        id: 2,
                        content: "default2"
                    },
                    {
                        id: 3,
                        content: "default3"
                    },
                ]
            },
            {
                id: 2,
                question: "what does this show?",
                answer: 3,
                options: [
                    {
                        id: 1,
                        content: "default1"
                    },
                    {
                        id: 2,
                        content: "default2"
                    },
                    {
                        id: 3,
                        content: "The limit before adding goes away is 3 options."
                    },
                ]
            }
        ],
    },
    {
        id: 3,
        name: 'defaultQuiz3',
        desc: 'This quiz shows full functionality of the quiz edit component.',
        questions: [
            {
                id: 1,
                question: "what is default question is this?",
                answer: 2,
                options: [
                    {
                        id: 1,
                        content: "default1"
                    },
                    {
                        id: 2,
                        content: "default2"
                    },
                    {
                        id: 3,
                        content: "default3"
                    },
                ]
            },
            {
                id: 2,
                question: "what does this show?",
                answer: 3,
                options: [
                    {
                        id: 1,
                        content: "default1"
                    },
                    {
                        id: 2,
                        content: "default2"
                    },
                    {
                        id: 3,
                        content: "The limit before adding goes away is 3 options."
                    },
                ]
            },
            {
                id: 3,
                question: "what does this show?",
                answer: 4,
                options: [
                    {
                        id: 1,
                        content: "default1"
                    },
                    {
                        id: 2,
                        content: "default2"
                    },
                    {
                        id: 3,
                        content: "default3"
                    },
                    {
                        id: 4,
                        content: "Adding goes away at 4 options."
                    },
                ]
            }
        ],
    },
];

interface HomePageProps {
    userName: string;
}

export default function HomePage(props: HomePageProps) {
    const router = useRouter();

    const[quizzes, setQuizzes] = useState(QUIZZES_INIT);

    const addQuizHandler = (quiz: Quiz) => {
        setQuizzes((prevQuizzes) => [quiz, ...prevQuizzes]);
    }

    return(
        <div className={styles.dottedOutline}>
            <div className={styles.navBar}>
                <Button className={styles.logOut} buttonType={ButtonType.door} onClick={() => router.push('/login')}/>
                <h1>Icon</h1>
                <Button className={styles.userPref} buttonType={ButtonType.gear} onClick={() => {}/* Day/Night Function */}/>
                {/* Need to change this button to a day/night */}
            </div>
            <h1 className={styles.fontCaveat + " " + styles.welcome}>Welcome, {props.userName}</h1>
            <h2 className={styles.fontCaveat + " " + styles.header}>Choose or Create a Quiz</h2>
            <Quizzes quizzes={quizzes}/>
            <Button className={styles.newQuiz} buttonType={ButtonType.add} onClick={() => {}}/>
        </div>
    );
}