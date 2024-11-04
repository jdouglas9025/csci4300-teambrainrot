"use client" // Need to prevent an issue with actions for button

import playLightIcon from '../icons/PlayLight.svg'
import addLightIcon from '../icons/AddLight.svg'
import gearLightIcon from '../icons/GearLight.svg'

export enum ButtonType {
    login, add, play, gear, signup, door, moon, done
}

interface ButtonProps {
    buttonType: ButtonType
    onClick: () => void // Action to take when this button is clicked
}

export default function Button(props: ButtonProps) {
    let content;
    switch (props.buttonType) {
        case ButtonType.login:
            content = <p>Login</p>
            break
        case ButtonType.add:
            content = <img src={addLightIcon} alt={'Add icon'}></img>
            break
        case ButtonType.play:
            content = <img src={playLightIcon} alt={'Play icon'}></img>
            break
        case ButtonType.gear:
            content = <img src={gearLightIcon} alt={'Gear icon'}></img>
            break
    }

    return (
        <>
            <button onClick={props.onClick}>{content}</button>
        </>
    )
}