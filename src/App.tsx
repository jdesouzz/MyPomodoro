import "./App.css";
import TimerIcon from "./components/TimerIcon";
import Timer from "./components/Timer";
import { useState } from "react";

//APP HANDLES THE STATE OF THE TIMER

const img =
    "https://lkg.wiki.gg/images/thumb/c/c1/Forager%27s_juice.png/300px-Forager%27s_juice.png?a33504";

function App() {
    const [timerState, setTimerState] = useState(false); // 0 = off, 1 = on
    const changeTimerState = () => {
        setTimerState(!timerState);
    };

    return (
        <>
            <Timer initialSeconds={120} timerState={timerState} />
            <TimerIcon
                onIcon={img}
                timerState={timerState}
                iconClicked={changeTimerState}
            />
        </>
    );
}

export default App;
