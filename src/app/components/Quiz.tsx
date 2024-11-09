
import styles from "@/app/css/Quiz.module.css";
import Button, {ButtonType} from "@/app/components/Button";
import {useState} from "react";
import {useRouter} from "next/navigation";
import {caveat} from "@/app/layout";
import {nunitoSans} from "@/app/layout";

interface QuizProps {
    quiz: {
        id: number;
        name: string;
        numQuestions: number;
        desc: string;
    }
}

export default function QuizFunc(props: QuizProps) {

    /*
    const [quizName, setQuizName] = useState<string>('');
    const [quizNumQues, setQuizNumQues] = useState<number>('');
    const [quizDesc, setQuizDesc] = useState<string>('');

    const nameChangeHandler = (dbData) => {
        setQuizName(dbData);
    }
    const numQuesChangeHandler = (dbData) => {
        setQuizNumQues(dbData);
    }
    const quizDescChangeHandler = (dbData) => {
        setQuizDesc(dbData);
    }
    */

    return (
        <div className={styles.gridContainer}>
            <h2 className={`${caveat.variable}` + styles.quizName}>{props.quiz.name}</h2>
            <p className={`${nunitoSans.variable}` + styles.quizNumQuestions}>{props.quiz.numQuestions} Questions</p>
            <p className={`${nunitoSans.variable}` + styles.quizDesc}>{props.quiz.desc}</p>
            <Button buttonType={ButtonType.play} onClick={/*() => router.push('/quizPlay')*/} className={styles.quizPlay}/>
            <Button buttonType={ButtonType.gear} onClick={/*() => router.push('/quizSettings')*/} className={styles.quizSettings}/>
        </div>
    )
}

/* Notes:
    * Get rid of the comments around the router when we have those components set up.
    * Make sure there is a limit on length for desc to be less than 100 chars.
    * dbData in the handlers will have to add types and change names when we set up DB.
    * Commented out the handlers and states until we set up DB for now it's a pass.
    * will have to see how it turns out when I implement the Home Page, then change font size
      and other css.
 */