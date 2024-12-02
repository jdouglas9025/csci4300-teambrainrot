"use client"

import { useState } from "react";
import styles from "../app/css/QuizPreferences.module.css"
import { useDarkMode } from "../app/components/DarkModeContext";



export default function QuizPreferences() {

    const { isDarkMode, setDarkMode } = useDarkMode();

    const [randomizeQuestions, setRandomizeQuestions] = useState(false);
    const [randomizeAnswers, setRandomizeAnswers] = useState(false);

    const handleQuestionToggle = () => setRandomizeQuestions(!randomizeQuestions);
    const handleAnswerToggle = () => setRandomizeAnswers(!randomizeAnswers);
    return (
        <div className={styles.container} style={{
            filter: isDarkMode ? "invert(1)" : "invert(0)",
            transition: "filter 0.3s ease",
        }}>
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