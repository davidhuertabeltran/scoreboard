import { useEffect, useState } from 'react';
import './App.scss';
import { Liveboard } from './components/Liveboard';
import { Summary } from './components/Summary';

function App() {
  const teams = ['Mexico', 'Poland', 'Germany', 'Italy', 'Spain', 'Uruguay', 'Brazil', 'USA', 'Canada', 'Argentina'];
  const [liveMatches, setLiveMatches] = useState([]);

  const [finishedMatches, setFinishedMatches] = useState([]);

  useEffect(() => {
    // Prepare team pairs for live scoreboard
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
  }, [])

  const EndMatch = (match) => {
    const updatedGroups = liveMatches.filter(m => m.id !== match.id);
    setLiveMatches(updatedGroups);
    const updatedFinishedMatches = [...finishedMatches];
    updatedFinishedMatches.push(match);
    console.log('updatedFinishedMatches', updatedFinishedMatches)
    setFinishedMatches(updatedFinishedMatches);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Scoreboard</h1>
        <div className="container">
          <Liveboard matches={liveMatches} onMatchEnd={EndMatch} />
          <Summary matches={finishedMatches} />
        </div>
      </header>
    </div>
  );
}

export default App;
