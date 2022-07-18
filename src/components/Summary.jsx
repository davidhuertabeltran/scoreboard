import { useState, useEffect } from "react"

export const Summary = ({ matches }) => {
    const [sortedMatches, setSortedMatches] = useState([]);
    useEffect(() => {
        setSortedMatches(matches);
    }, [matches]);

    return (
        <div className="summary-container table">
            {sortedMatches.map(match => {
                return <div className="row match-data" key={match.homeTeamScore}>
                    <div className="team home">{match['homeTeam']}</div>
                    <div className="score">{match.homeTeamScore} - {match.awayTeamScore}</div>
                    <div className="team away">{match.awayTeam}</div>
                </div>
            })}
        </div>
    )
}