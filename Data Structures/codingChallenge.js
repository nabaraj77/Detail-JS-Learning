const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
//CHALLENGING CODE NO 1
/*console.log('1');
const [player1, player2] = game.players;
console.log(player1, player2);
console.log('2');
const [gk, ...fieldPlayers] = player1;
console.log(gk, fieldPlayers);
console.log('3');
const allPlayers = [...player1, player2];
console.log(allPlayers);
console.log('4');
const playersFinal = [...player1, 'Thiago', 'Coutino', 'Capricon'];
console.log(playersFinal);
console.log('5');
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);
console.log('6');

const [...scored] = game.scored;
console.log(scored);
function printGoals(scored) {
  return `${scored.length} goals were scored`;
}
console.log(printGoals(scored));
console.log('7');
console.log(team1 < team2 && 'Team 1 is more likely to win');

for (items of player1) {
  console.log(items);
}*/

//CHALLENGING CODE NO 2

let scorecard = game.scored;
//console.log(scorecard);
let result = '';
for (let [index, name] of scorecard.entries()) {
  result += `Goal ${index + 1}: ${name}. `;
}
console.log(result);

//2
const { odds } = game;
console.log(odds);
const values1 = Object.values(odds);
let avg = 0;
for (items of values1) {
  avg += items;
}
console.log(avg / values1.length);
//3
console.log(
  `Odd of Victory Baryen:${values1[0]}
Odd of draw:${values1[1]}
Odd of Victory Brussia:${values1[2]}`
);
//4
