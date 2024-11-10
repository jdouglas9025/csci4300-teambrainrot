"use client" // Need to prevent an issue with actions for button

import LoginPage from "@/app/components/LoginPage";
import QuizTakingPage, {sample} from "@/app/components/QuizTakingPage";
import QuizResultsPage from "@/app/components/QuizResultsPage";
import {sampleQuiz} from "@/app/interfaces";
import LandingPage from "@/app/components/LandingPage";

// Initial landing for all users
export default function Home() {
    return (
        <LandingPage/>
  );
}
