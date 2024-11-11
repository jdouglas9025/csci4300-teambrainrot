import Image from 'next/image';
import simpliQuizLogo from '../icons/SimpliQuizLogo.svg'

export default function Logo() {
    return (
        <div>
            <Image src={simpliQuizLogo} alt={'Simpli Quiz Logo'}/>
        </div>
    )
}