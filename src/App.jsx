import { useEffect, useState } from 'react';
import './App.scss';
import { Liveboard } from './components/Liveboard';
import { Summary } from './components/Summary';

function App() {
  const countries = ['Mexico', 'Poland', 'Germany', 'Italy', 'Spain', 'Uruguay', 'Brazil', 'USA', 'Canada', 'Argentina'];
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    // Prepare team pairs for live scoreboard
    countries.sort(() => (Math.random() > .5) ? 1 : -1);
    let arr = [];
    for (let i = 0; i < countries.length; i += 2) {
      let obj = {};
      let country1 = countries.slice(i, i + 1)[0];
      let country2 = countries.slice(i + 1, i + 2)[0];
      obj['hostTeam'] = country1;
      obj['awayTeam'] = country2;
      obj['hostTeamScore'] = 0;
      obj['awayTeamScore'] = 0;
      arr.push(obj);
      setGroups(arr);
    }
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Scoreboard</h1>
        <div className="container">
          <Liveboard groups={groups} />
          <Summary groups={groups} />
        </div>
      </header>
    </div>
  );
}

export default App;
