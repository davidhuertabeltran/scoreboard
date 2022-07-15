export const Liveboard = ({ groups }) => {
    return (
        <div className="liveboard-container">
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