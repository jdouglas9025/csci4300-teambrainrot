// Page for when user is signed in (quiz selection/home page
"use client"

import React, {useEffect} from "react";
import styles from "@/app/css/HomePage.module.css";
import Quizzes from "@/app/components/Quizzes";
import Button, {ButtonType} from "@/app/components/Button";
import Link from "next/link";
import {useState} from "react";
import Logo from "@/app/components/Logo";
import {doLogout} from "@/login";
import {IQuiz} from "../../../models/UserSchema";
import {useSession} from "next-auth/react";

// export type Answer = {
//     id: number;
//     content: string;
// }
//
// export type Question = {
//     id: number;
//     question: string;
//     answer: number;
//     options: Answer[];
// }
//
// export type Quiz = {
//     id: number;
//     name: string;
//     desc: string;
//     imageURL: string;
//     questions: Question[];
// }
//
// export const QUIZZES_INIT: Quiz[] = [
//     {
//         id: 1,
//         name: 'defaultQuiz1',
//         desc: 'This is the default quiz.',
//         imageURL: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg',
//         questions: [
//             {
//                 id: 1,
//                 question: "what is default question is this?",
//                 answer: 1,
//                 options: [
//                     {
//                         id: 1,
//                         content: "default1"
//                     }
//                 ]
//             }
//         ],
//     },
//     {
//         id: 2,
//         name: 'defaultQuiz2',
//         desc: 'This quiz has 2 questions.',
//         imageURL: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg',
//         questions: [
//             {
//                 id: 1,
//                 question: "what is default question is this?",
//                 answer: 2,
//                 options: [
//                     {
//                         id: 1,
//                         content: "default1"
//                     },
//                     {
//                         id: 2,
//                         content: "default2"
//                     },
//                     {
//                         id: 3,
//                         content: "default3"
//                     },
//                 ]
//             },
//             {
//                 id: 2,
//                 question: "what does this show?",
//                 answer: 3,
//                 options: [
//                     {
//                         id: 1,
//                         content: "default1"
//                     },
//                     {
//                         id: 2,
//                         content: "default2"
//                     },
//                     {
//                         id: 3,
//                         content: "The limit before adding goes away is 3 options."
//                     },
//                 ]
//             }
//         ],
//     },
//     {
//         id: 3,
//         name: 'defaultQuiz3',
//         desc: 'This quiz shows full functionality of the quiz edit component.',
//         imageURL: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg',
//         questions: [
//             {
//                 id: 1,
//                 question: "what is default question is this?",
//                 answer: 2,
//                 options: [
//                     {
//                         id: 1,
//                         content: "default1"
//                     },
//                     {
//                         id: 2,
//                         content: "default2"
//                     },
//                     {
//                         id: 3,
//                         content: "default3"
//                     },
//                 ]
//             },
//             {
//                 id: 2,
//                 question: "what does this show?",
//                 answer: 3,
//                 options: [
//                     {
//                         id: 1,
//                         content: "default1"
//                     },
//                     {
//                         id: 2,
//                         content: "default2"
//                     },
//                     {
//                         id: 3,
//                         content: "The limit before adding goes away is 3 options."
//                     },
//                 ]
//             },
//             {
//                 id: 3,
//                 question: "what does this show?",
//                 answer: 4,
//                 options: [
//                     {
//                         id: 1,
//                         content: "default1"
//                     },
//                     {
//                         id: 2,
//                         content: "default2"
//                     },
//                     {
//                         id: 3,
//                         content: "default3"
//                     },
//                     {
//                         id: 4,
//                         content: "Adding goes away at 4 options."
//                     },
//                 ]
//             }
//         ],
//     },
// ];

interface HomePageProps {
    userName: string;
}

export default function HomePage(props: HomePageProps) {
    const { data: session } = useSession()
    const [quizzes, setQuizzes] = useState<IQuiz[]>([])

    // Load quiz data for current user
    const getQuizzes = async () => {
        // Get current user id
        const userId = session?.user?.id

        if (userId) {
            // Load data for this user
            const response = await fetch('http://localhost:3000/api/quizzes/by-owner/' + userId)
            const result = await response.json()
            if (result.quizzes) {
                setQuizzes(() => result.quizzes)
            }
        }
    }

    // Prevent freezing app on initial load
    useEffect(() => {
        getQuizzes()
    }, [session])

    async function addEmptyQuiz() {
        // Get current user id
        const userId = session?.user?.id

        // Create template quiz in DB
        if (userId) {
            const data = {
                ownerId: userId,
                name: 'Default Quiz',
                quizItems: [
                    {
                        question: 'Default Question',
                        answers: [
                            { content: 'First answer'},
                            { content: 'Second answer'}
                        ],
                        correctAnswerContent: 'First answer'
                    }
                ],
                image: 'https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_square.jpg',
                description: 'Default Description'
            }

            await fetch('http://localhost:3000/api/quizzes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            // Retrieve updated quizzes
            await getQuizzes()
        }
    }

    return(
        <div className={styles.dottedOutline}>
            <div className={styles.navBar}>
                <Link href={'/login'}>
                    <Button className={styles.logOut} buttonType={ButtonType.door} onClick={() => doLogout()}/>
                </Link>
                <Logo className={styles.logo}/>
                <Link href={'/settingspage'}>
                    <Button className={styles.userPref} buttonType={ButtonType.gear} onClick={() => {}/* Day/Night Function */}/>
                </Link>
                {/* Need to change this button to a day/night */}
            </div>
            <h1 className={styles.fontCaveat + " " + styles.welcome}>Welcome, {props.userName}</h1>
            <h2 className={styles.fontCaveat + " " + styles.header}>Choose or Create a Quiz</h2>
            {/* Check if quizzes loaded */}
            {quizzes && quizzes.length > 0 ? (
                <Quizzes quizzes={quizzes}/>
            ) : (
                <p>No quizzes found.</p>
            )}

            {/** Add a empty quiz to DB **/}
            <Button className={styles.newQuiz} buttonType={ButtonType.add} onClick={addEmptyQuiz}/>
        </div>
    );
}