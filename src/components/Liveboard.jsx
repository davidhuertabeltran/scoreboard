import { Timer } from "./Timer"

export const Liveboard = ({ groups }) => {
    return (
        <div className="liveboard-container">
            {groups.map(group => {
                return <div className="row">
                    <div className="match-data">
                        <div className="team home">{group.homeTeam}</div>
                        <div className="score">{group.homeTeamScore} - {group.awayTeamScore}</div>
                        <div className="team away">{group.awayTeam}</div>
                    </div>
                    <Timer />
                </div>
            })}
        </div>
    )
}