
import styles from "@/app/css/Quiz.module.css";
import Button, {ButtonType} from "@/app/components/Button";
import {useState} from "react";
import {useRouter} from "next/navigation";
import {Question} from "@/app/components/HomePage";
import Link from "next/link";

interface QuizProps {
    quiz: {
        id: number;
        name: string;
        desc: string;
        questions: Question[];
    }
}

export default function QuizFunc(props: QuizProps) {
    const router = useRouter();

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
            <h2 className={styles.fontCaveat + " " + styles.quizName}>{props.quiz.name}</h2>
            <p className={styles.fontNunito + " " + styles.quizNumQuestions}>{props.quiz.questions.length} Questions</p>
            <p className={styles.fontNunito + " " + styles.quizDesc}>{props.quiz.desc}</p>
            {/** Should we use link over router.push? I changed code and pasted the old version below **/}
            <Link href={'/quiz/' + props.quiz.id}> {/** Use quiz id as slug **/}
                <Button buttonType={ButtonType.play} className={styles.quizPlay}/>
            </Link>

            <Button buttonType={ButtonType.gear} onClick={() => router.push('/settingspage')} className={styles.quizSettings}/>
        </div>
    )
}

/*
    * <Button buttonType={ButtonType.play} onClick={() => router.push('/quizPlay')} className={styles.quizPlay}/>
*/

/* Notes:
    * Get rid of the comments around the router when we have those components set up.
    * Make sure there is a limit on length for desc to be less than 100 chars.
    * dbData in the handlers will have to add types and change names when we set up DB.
    * Commented out the handlers and states until we set up DB for now it's a pass.
    * will have to see how it turns out when I implement the Home Page, then change font size
      and other css.
 */