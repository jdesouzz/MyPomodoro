import "./App.css";
import TimerIcon from "./components/TimerIcon";
import { useState } from "react";

//APP HANDLES THE STATE OF THE TIMER

const img =
    "https://lkg.wiki.gg/images/thumb/c/c1/Forager%27s_juice.png/300px-Forager%27s_juice.png?a33504";

function App() {
    const [timerState, setTimerState] = useState(0); // -1 = trans off, 0 = off, 1 = trans on, 2 = on
    const changeTimerState = () => {
        setTimerState(((timerState + 2) % 4) - 1);
    };

    return (
        <TimerIcon
            onIcon={img}
            timerState={timerState}
            iconClicked={changeTimerState}
        />
    );
}

export default App;
