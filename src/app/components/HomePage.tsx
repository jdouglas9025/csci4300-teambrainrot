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
import {getSession, useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import { useDarkMode } from "./DarkModeContext";
import connectMongoDB from "../../../lib/mongodb";
import {signIn} from "@/auth";

export default function HomePage() {
    const { data: session } = useSession()
    const [quizzes, setQuizzes] = useState<IQuiz[]>([])
    const router = useRouter()

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

    // Get updated session -- necessary for handling issue with new users
    useEffect(() => {
        const ensureSession = async () => {
            if (!session) {
                await getSession()
            }
        }

        ensureSession()
    }, [session]);

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
                name: 'New Quiz',
                quizItems: [
                    {
                        question: 'Default Question',
                        answers: [
                            { content: 'First answer'},
                            { content: 'Second answer'},
                            { content: 'Third answer'},
                            { content: 'Fourth answer'}

                        ],
                        correctAnswerContent: 'First answer'
                    }
                ],
                image: 'https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_square.jpg',
                description: 'Default Description'
            }

            const response = await fetch('http://localhost:3000/api/quizzes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            // Get id from newly created quiz
            const jsonData = await response.json()
            const quizId = jsonData.result._id

            // Push new quiz edit screen
            router.push('/quizeditpage/' + quizId)
        }
    }

    // Handler for deleting quiz in quizzes component
    async function deleteQuiz(quizId: string) {
        await fetch('http://localhost:3000/api/quizzes/' +  quizId, {
            method: 'DELETE',
        })

        // Now get new list
        await getQuizzes()
    }

    const { isDarkMode, setDarkMode } = useDarkMode()

    return(
        <div className={`${styles.dottedOutline} ${isDarkMode ? styles.darkMode : ''}`}>
            <div className={styles.navBar}>
                <Link href={'/login'}>
                    <Button className={styles.logOut} buttonType={ButtonType.door} onClick={() => doLogout()}/>
                </Link>
                <Logo className={styles.logo} />
                <Link href={'/settingspage'}>
                    <Button className={styles.userPref} buttonType={ButtonType.gear}/>
                </Link>
            </div>

            {/** Must wait for session to load -- for new users, might take a few seconds **/}
            {!session ? (
                <p>Loading...</p>
            ) : (
                <>
                    {/** Displaying email -- could use username, but need to refactor API calls and models **/}
                    <h1 className={styles.fontCaveat + " " + styles.welcome}>Welcome, {session?.user?.email.split("@")[0]}</h1>
                    <h2 className={styles.fontCaveat + " " + styles.header}>Choose or Create a Quiz</h2>
                    {/* Check if quizzes loaded */}
                    {quizzes && quizzes.length > 0 ? (
                        <Quizzes quizzes={quizzes} onDelete={deleteQuiz}/>
                    ) : (
                        <p>No quizzes found.</p>
                    )}

                    {/** Add a empty quiz to DB **/}
                    <Button className={styles.newQuiz} buttonType={ButtonType.add} onClick={addEmptyQuiz}/>
                </>
            )}
        </div>
    );
}