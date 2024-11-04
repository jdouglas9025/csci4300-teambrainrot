"use client" // Need to prevent an issue with actions for button

import playLightIcon from '../icons/PlayLight.svg'
import addLightIcon from '../icons/AddLight.svg'
import gearLightIcon from '../icons/GearLight.svg'
import Image from "next/image";

export enum ButtonType {
    login, add, play, gear, signup, door, moon, done, submit
}

interface ButtonProps {
    type?: 'button' | 'submit' | 'reset' // Type of button (e.g., submit, standard button with custom action)
    buttonType: ButtonType
    onClick: () => void // Action to take when this button is clicked
}

export default function Button(props: ButtonProps) {
    let content;
    switch (props.buttonType) {
        case ButtonType.login:
            content = <p>Login</p>
            break
        case ButtonType.signup:
            content = <p>Signup</p>
            break
        case ButtonType.submit:
            content = <p>Submit</p>
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
    }

    return (
        <button
            type={props.type || 'button'}
            onClick={props.onClick}
        >
            {content}
        </button>
    )
}