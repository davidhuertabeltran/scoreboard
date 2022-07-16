export const Summary = ({ groups }) => {
    return (
        <div className="summary-container table">
            {groups.map(group => {
                return <div className="row">
                    <div className="team host">{group.hostTeam}</div>
                    <div className="score">{group.hostTeamScore} - {group.awayTeamScore}</div>
                    <div className="team away">{group.awayTeam}</div>
                </div>
            })}
        </div>
    )
}