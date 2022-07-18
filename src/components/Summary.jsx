import { useState, useEffect } from "react"

export const Summary = ({ matches }) => {
	const [sortedMatches, setSortedMatches] = useState([]);
	useEffect(() => {
		const newMatches = sortMatches(...matches);
		setSortedMatches(newMatches);
	}, [matches]);

	const sortMatches = (...games) => {
		return games
			.sort((a, b) => a.endTime > b.endTime ? -1 : 1)
			.sort((a, b) => (a.homeTeamScore + a.awayTeamScore) > (b.homeTeamScore + b.awayTeamScore) ? -1 : 1);
	}

	return (
		<div className="summary matches">
			{sortedMatches.map(match => {
			return (
				<div className="row match-data" key={match.id}>
					<div className="team home">{match['homeTeam']}</div>
					<div className="score">{match.homeTeamScore} - {match.awayTeamScore}</div>
					<div className="team away">{match.awayTeam}</div>
					<div className="end">
						<p>FT {match.endTime.getHours()}:{match.endTime.getMinutes()}:{match.endTime.getSeconds()}</p>
					</div>
				</div>
			)
			})}
		</div>
	)
}