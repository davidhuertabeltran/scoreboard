import { useEffect, useState, useRef } from 'react';
import './App.scss';
import { Liveboard } from './components/Liveboard';
import { Summary } from './components/Summary';

function App() {
	const teams = ['Mexico', 'Poland', 'Germany', 'Italy', 'Spain', 'Uruguay', 'Brazil', 'USA', 'Canada', 'Argentina'];

	const [liveMatches, setLiveMatches] = useState([]);
	const liveStateRef = useRef();
	liveStateRef.current = liveMatches;

	const [finishedMatches, setFinishedMatches] = useState([]);
	const summaryStateRef = useRef();
	summaryStateRef.current = finishedMatches;

	const prepareGames = () => {
		teams.sort(() => (Math.random() > .5) ? 1 : -1);
		let matches = [];

		for (let i = 0; i < teams.length; i += 2) {
			let obj = {};
			let homeTeam = teams.slice(i, i + 1)[0];
			let awayTeam = teams.slice(i + 1, i + 2)[0];

			obj['id'] = i + 1;
			obj['homeTeam'] = homeTeam;
			obj['awayTeam'] = awayTeam;
			obj['homeTeamScore'] = 0;
			obj['awayTeamScore'] = 0;
			obj['endTime'] = undefined;
			matches.push(obj);
			setLiveMatches(matches);
		}
	}

	useEffect(() => {
		// Prepare team pairs for live scoreboard
		prepareGames();
	}, []);

	const endMatch = (match) => {
		// Update liveboard
		const updatedMatches = liveStateRef.current.filter(m => m.id !== match.id);
		setLiveMatches(updatedMatches);

		// Update summary board
		const updatedFinishedMatches = [...summaryStateRef.current];
		updatedFinishedMatches.push(match);
		setFinishedMatches(updatedFinishedMatches);
	}

	const restart = () => {
		setFinishedMatches([]);
		prepareGames();
	}

	return (
		<div className="app">
			<header className="app-header">
				<h1 className="title">Scoreboard</h1>
				<h2 className="author">Made with ❤️ by <a href="https://github.com/davidhuertabeltran" target="_blank" rel="noreferrer">David Huerta</a></h2>
			</header>
			<div className="container">
				<Liveboard matches={liveMatches} onMatchEnd={endMatch} restart={restart} />
				<Summary matches={finishedMatches} />
			</div>
		</div>
	);
}

export default App;
