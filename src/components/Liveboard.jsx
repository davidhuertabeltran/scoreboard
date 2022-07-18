import { Match } from "./Match"

export const Liveboard = ({ matches, onMatchEnd, restart }) => (
    <div className="liveboard matches">
        {matches.length === 0 && (
            <div className="restart">
                <p>No more matches for today</p>
                <button onClick={restart}>Restart All Games</button>
            </div>
        )}
        {matches.map(match => {
            return <Match key={match.id} match={match} onMatchEnd={onMatchEnd} />
        })}
    </div >
)
