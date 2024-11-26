'use client'

import React, {useState} from "react";
import Button, {ButtonType} from "@/app/components/Button";
import styles from '../css/NavBar.module.css'
import Link from "next/link";
import { useDarkMode } from "./DarkModeContext";

interface NavBarProps {
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    title?: string;
    //leftHref?: string;
    //rightHref?: string;
    editable?: boolean;
    onTitleChange?: (newTitle: string) => void;
  }
  
export default function NavBar({
    leftIcon,
    rightIcon,
    title = "New Quiz",
    //leftHref = "/",
    //rightHref = "/",
    editable = false,
    onTitleChange
    }: NavBarProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [titleText, setTitleText] = useState(title);

    //editing title, if applicable 
    const handleTitleClick = () => {
        if (editable) {
        setIsEditing(true);
        }
    };

    //setting new title 
    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitleText(e.target.value);
    };

    //exiting out of edit mode when new title is entered
    const handleTitleFinal = () => {
        setIsEditing(false);
        if (onTitleChange) {
        onTitleChange(titleText);
        }
    };

    //making enter key the finalization point
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
        handleTitleFinal();
        }
    };

    const { isDarkMode, setDarkMode } = useDarkMode();

    return (
        <nav className={styles.navbar}>
            
            <div className={styles.iconContainer}>
                {leftIcon}
            </div>

            <hr className={styles.divider} style={{
            filter: isDarkMode ? "invert(1)" : "invert(0)",
            transition: "filter 0.3s ease",
            }}/>

            <div className={styles.titleContainer}
            style={{
                filter: isDarkMode ? "invert(1)" : "invert(0)",
                transition: "filter 0.3s ease",
            }}>
                {editable ? (
                isEditing ? (
                    <input
                    type="text"
                    value={titleText}
                    onChange={handleTitleChange}
                    onBlur={handleTitleFinal}
                    onKeyPress={handleKeyPress}
                    className={styles.titleInput}
                    />
                ) : (
                    <h1 
                    onClick={handleTitleClick}
                    className={styles.title}
                    >
                    {titleText}
                    </h1>
                )
                ) : (
                <h1 className={styles.title}>
                    {titleText}
                </h1>
                )}
            </div>

            <hr className={styles.divider} style={{
            filter: isDarkMode ? "invert(1)" : "invert(0)",
            transition: "filter 0.3s ease",
            }}/>

            <div className={styles.iconContainer}>    
                {rightIcon}
            </div>
        </nav>
    )
}