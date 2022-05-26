const calAverage = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
};
const avgDolphins = calAverage(44, 63, 73);
const avgKoalas = calAverage(45, 96, 84);
console.log(avgDolphins, avgKoalas);

let winner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas || avgKoalas >= 2 * avgDolphins) {
    if (avgDolphins > avgKoalas) {
      console.log("Dolphins won");
    } else {
      console.log("Koalas won");
    }
  } else {
    console.log("No one Won the game");
  }
};
winner(avgDolphins, avgKoalas);
