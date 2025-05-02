import { useState } from "react";

// USE LOTTIE ANIMATION FOR ICONS

interface Props {
    // Icon should support dynamic and static icons
    //turnOnTransitionIcon?: string;
    onIcon: string;

    //turnOffTransitionIcon?: string;
    //offIcon: string;

    timerState: boolean; // -1 = transition off, 0 = off, 1 = transition on, 2 = on
    iconClicked: () => void;
}

function TimerIcon({ onIcon, timerState, iconClicked }: Props) {
    return (
        <>
            <img src={onIcon} onClick={iconClicked} />
            <h1> Current Icon State: {timerState.toString()}</h1>
        </>
    );
}

export default TimerIcon;
