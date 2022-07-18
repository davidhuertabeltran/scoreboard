import { Match } from "./Match"

export const Liveboard = ({ matches, onMatchEnd }) => {
    return (
        <div className="liveboard-container">
            {matches.map(match => {
                return <Match key={match.id} match={match} onMatchEnd={onMatchEnd} />
            })}
        </div >
    )
}