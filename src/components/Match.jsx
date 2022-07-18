import { useState, useRef } from "react"

export const Match = ({ match, onMatchEnd }) => {
    const [counter, setCounter] = useState(5);
    const [isActive, setIsActive] = useState(false);
    const stateRef = useRef();
    stateRef.current = counter;

    const StartMatch = () => {
        let score1 = 0;
        let score2 = 1;
        setIsActive(true);
        const timer = setInterval(() => {
            setCounter((counter) => counter - 1);
            // @todo: generate random score
            if (stateRef.current === 1) {
                EndGame(timer, score1, score2)
            }
        }, 300);
    }

    const EndGame = (timer, score1, score2) => {
        clearInterval(timer);
        match['endTime'] = Date.now();
        match['homeTeamScore'] = score1;
        match['awayTeamScore'] = score2;
        onMatchEnd(match);
    }

    return (
        <div className="row match-data">
            <div className="team home">{match.homeTeam}</div>
            <div className="score">{match.homeTeamScore} - {match.awayTeamScore}</div>
            <div className="team away">{match.awayTeam}</div>
            <div className="timer">
                <button onClick={StartMatch} className={isActive ? 'hide' : 'show'}>
                    Start
                </button>
                <div className={isActive ? 'show' : 'hide'}>
                    {counter}
                </div>
            </div>
        </div>
    )
}