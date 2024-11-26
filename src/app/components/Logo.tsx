import Image from 'next/image';
import simpliQuizLogo from '../icons/SimpliQuizLogo.svg'
import { useDarkMode } from "./DarkModeContext";

interface LogoProps {
    className?: string
}

export default function Logo(props: LogoProps) {

    const { isDarkMode, setDarkMode } = useDarkMode();
    return (
        <div style={{
            filter: isDarkMode ? "invert(1)" : "invert(0)",
            }}>
            <Image src={simpliQuizLogo} alt={'Simpli Quiz Logo'} className={props.className}/>
        </div>
    )
}