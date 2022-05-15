import playerData from "../data/playerData";

// input: playerData -> output: arry of player objects
export const preparePlayerData = () => {
  return Object.values(playerData);
}

// input: playerDataArray, matchData
// output : [{player}, {player} ...] having a win key, numerical value
export const addWinsToPlayers = (playerDataArray, matchData) => {
  return playerDataArray.map(player => {
    const currentWins = matchData.reduce((acc, match) => {
      if (match.winner === player.gamerTag) {
        return acc += 1;
      } else {
        return acc;
      }
    }, 0);

    // assigns the value to the wins key
    player.wins = currentWins;

    return player;
  });
}

