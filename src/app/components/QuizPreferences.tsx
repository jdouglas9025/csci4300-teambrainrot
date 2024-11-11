"use client"

import { useState } from "react";
import styles from "../css/QuizPreferences.module.css"


export default function QuizPreferences() {
    const [randomizeQuestions, setRandomizeQuestions] = useState(false);
    const [randomizeAnswers, setRandomizeAnswers] = useState(false);

    const handleQuestionToggle = () => setRandomizeQuestions(!randomizeQuestions);
    const handleAnswerToggle = () => setRandomizeAnswers(!randomizeAnswers);
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Quiz Preferences:</h2>
            <hr className={styles.separator} />
            
            <div className={styles.preference}>
                <input
                type="checkbox"
                checked={randomizeQuestions}
                onChange={handleQuestionToggle}
                className={styles.toggle}
                />
                <label className={styles.label}>Randomize Questions</label>
            </div>

            <div className={styles.preference}>
                <input
                type="checkbox"
                checked={randomizeAnswers}
                onChange={handleAnswerToggle}
                className={styles.toggle}
                />
                <label className={styles.label}>Randomize Answers</label>
            </div>
        </div>
    );
}