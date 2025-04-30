

interface Props {
    PlayIcon: string;
    PauseIcon: string;
    timerState: number; // -1 = transition off, 0 = off, 1 = transition on, 2 = on
    playButtonClicked: () => void;
}

// Hold the Play or Main Icon to start a new timer
// Play a animation below the play and pause icon when they are held
function StartTimerButton({
    PlayIcon,
    PauseIcon,
    timerState,
    playButtonClicked,
}: Props) {
    return (
        <img
            src={timerState > 0 ? PlayIcon : PauseIcon}
            onClick={playButtonClicked}
        />
    );
}

export default StartTimerButton;
