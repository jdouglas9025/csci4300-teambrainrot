import Image from 'next/image';
import simpliQuizLogo from '../icons/SimpliQuizLogo.svg'

interface LogoProps {
    className?: string
}

export default function Logo(props: LogoProps) {
    return (
        <div>
            <Image src={simpliQuizLogo} alt={'Simpli Quiz Logo'} className={props.className}/>
        </div>
    )
}