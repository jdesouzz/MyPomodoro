import { useState, useEffect } from "react";

interface TimerProps {
    initialSeconds: number; // Initial time in seconds
    timerState: boolean; // Whether the timer is running
}

function Timer({ initialSeconds, timerState }: TimerProps) {
    const [seconds, setSeconds] = useState(initialSeconds);

    

}

export default Timer;
