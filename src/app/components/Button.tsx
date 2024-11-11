"use client" // Need to prevent an issue with actions for button

import playLightIcon from '../icons/PlayLight.svg'
import addLightIcon from '../icons/AddLight.svg'
import gearLightIcon from '../icons/GearLight.svg'
import doorLightIcon from '../icons/DoorLight.svg'
import homeLightIcon from '../icons/HomeLight.svg'
import backArrowLightIcon from '../icons/BackArrowLight.svg'
import Image from "next/image";

export enum ButtonType {
    login, add, edit, play, gear, signup, door, done, submit, save, home, backArrow
}

interface ButtonProps {
    className?: string
    type?: 'button' | 'submit' | 'reset' // Type of button (e.g., submit, standard button with custom action)
    buttonType: ButtonType
    onClick?: () => void // Action to take when this button is clicked (or none if not needed)
}

export default function Button(props: ButtonProps) {
    let content;
    switch (props.buttonType) {
        case ButtonType.login:
            content = <p>Login</p>
            break
        case ButtonType.signup:
            content = <p>Sign Up</p>
            break
        case ButtonType.submit:
            content = <p>Submit</p>
            break
        case ButtonType.done:
            content = <p>Done</p>
            break
        case ButtonType.save:
            content = <p>Save</p>
            break
        case ButtonType.edit:
            content = <p>Edit Quiz</p>
            break
        case ButtonType.add:
            content = <Image src={addLightIcon} alt={'Add icon'}></Image>
            break
        case ButtonType.play:
            content = <Image src={playLightIcon} alt={'Play icon'}></Image>
            break
        case ButtonType.gear:
            content = <Image src={gearLightIcon} alt={'Gear icon'}></Image>
            break
        case ButtonType.door:
            content = <Image src={doorLightIcon} alt={'Door icon'}></Image>
            break
        case ButtonType.home:
            content = <Image src={homeLightIcon} alt={'Home icon'}></Image>
            break
        case ButtonType.backArrow:
            content = <Image src={backArrowLightIcon} alt={'Back arrow icon'}></Image>
            break
    }

    return (
        <button
            className={props.className}
            type={props.type || 'button'}
            onClick={props.onClick}
        >
            {content}
        </button>
    )
}