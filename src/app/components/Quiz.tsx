import styles from "@/app/css/Quiz.module.css";
import Button, {ButtonType} from "@/app/components/Button";
import {useRouter} from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {IQuiz} from "../../../models/UserSchema";

interface QuizProps {
    quiz: IQuiz
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
                <div className={styles.imageContainer}>
                    <Image className={styles.quizImage} src={props.quiz.image} alt={props.quiz.name} width={175} height={175}/>
                </div>
                <div className={styles.quizProps}>
                    <div className={styles.quizPropsUpper}>
                        <p className={styles.fontCaveat + " " + styles.quizName}>{props.quiz.name}</p>
                        <p className={styles.fontCaveat + " " + styles.quizNumQuestions}>{props.quiz.quizItems.length} Questions</p>
                    </div>
                    <p className={styles.fontNunito + " " + styles.quizDesc}>{props.quiz.description}</p>
                </div>
                <div className={styles.quizButtons}>
                    <Link className={styles.link} href={'/quiz/' + props.quiz._id}> {/** Use quiz id as slug **/}
                        <Button buttonType={ButtonType.play} className={styles.quizPlay}/>
                    </Link>
                    <Link className={styles.link} href={'/quizeditpage/' + props.quiz._id}>
                        <Button buttonType={ButtonType.gear} className={styles.quizSettings}/>
                    </Link>
                </div>
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