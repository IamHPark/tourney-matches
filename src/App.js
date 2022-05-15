import './App.css';
import MatchList from './components/MatchList';
import PlayerList from './components/PlayerList';
import { preparePlayerData, addWinsToPlayers } from './helpers/playerHelpers';
import matchData from "./data/matchData";
import playerData from './data/playerData';

function App() {
  const playerDataArray = preparePlayerData(playerData);
  const parsedPlayerData = addWinsToPlayers(playerDataArray, matchData);
  return (
    <div className="App">
      <h1>
        Tourney Matches {" "}
        <span>Where Coding and Tournaments found their Match!</span>
      </h1>
      <PlayerList playerData={ parsedPlayerData }/>
      <MatchList matchData={ matchData }/>
    </div>
  );
}

export default App;
