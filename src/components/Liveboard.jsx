import { Match } from "./Match"

export const Liveboard = ({ matches, onMatchEnd, restart }) => {
    return (
        <div className="liveboard-container">
            {matches.length === 0 && (
                <div>No more matches for today
                    <button onClick={restart}>Restart</button>
                </div>
            )}
            {matches.map(match => {
                return <Match key={match.id} match={match} onMatchEnd={onMatchEnd} />
            })}
        </div >
    )
}