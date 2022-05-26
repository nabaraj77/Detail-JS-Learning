const teamDolphins = (96 + 108 + 89) / 3;
const teamKoalas = (70 + 91 + 123) / 3;
const minScore = 100;
console.log(teamDolphins, teamKoalas);
if (teamDolphins > teamKoalas) {
  if (teamDolphins > minScore) {
    console.log(`Team Dolphon ${teamDolphins} is the Winner! with bonus`);
  } else {
    console.log(`Team Dolphin is the winner without bonus`);
  }
} else if (teamDolphins == teamKoalas) {
  console.log("Draw");
} else {
  if (teamKoalas > minScore) {
    console.log(`Team Koalas ${teamKoalas} is the Winner! with bonus`);
  } else {
    console.log(`Team Koalas is the winner without bonus`);
  }
}
