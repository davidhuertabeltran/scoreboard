import { useState, useRef } from "react"

export const Match = ({ match, onMatchEnd }) => {
    const [counter, setCounter] = useState(90);
    const [homeScore, setHomeScore] = useState(0);
    const [awayScore, setAwayScore] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const counterStateRef = useRef();
    const homeScoreStateRef = useRef();
    const awayScoreStateRef = useRef();
    counterStateRef.current = counter;
    homeScoreStateRef.current = homeScore;
    awayScoreStateRef.current = awayScore;

    const startMatch = () => {
        setIsActive(true);
        const timer = setInterval(() => {
            setCounter((counter) => counter - 1);

            const homeGoal = generateGoal();
            const awayGoal = generateGoal();

            if (homeGoal) {
                setHomeScore((homeScore) => homeScore + 1);
            }
            if (awayGoal) {
                setAwayScore((awayScore) => awayScore + 1);
            }

            if (counterStateRef.current === 1) {
                endMatch(timer, homeScoreStateRef.current, awayScoreStateRef.current)
            }
        }, 30);
    }

    const endMatch = (timer, score1, score2) => {
        clearInterval(timer);
        match['endTime'] = new Date();
        match['homeTeamScore'] = score1;
        match['awayTeamScore'] = score2;
        onMatchEnd(match);
    }

    const generateGoal = () => {
        let num = Math.random();
        return num < 0.03 ? true : false;
    }

    return (
        <div className="row match-data">
            <div className="team home">{match.homeTeam}</div>
            <div className="score">{homeScore} - {awayScore}</div>
            <div className="team away">{match.awayTeam}</div>
            <div className="timer">
                <button onClick={startMatch} className={isActive ? 'hide' : 'show'}>
                    Start
                </button>
                <div className={isActive ? 'show counter' : 'hide'}>
                    {counter}'
                </div>
            </div>
        </div>
    )
}