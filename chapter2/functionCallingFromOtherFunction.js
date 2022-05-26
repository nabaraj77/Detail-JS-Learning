let cutPieces = (fruits) => {
  return fruits * 2;
};

let foodProcessor = (apples, oranges) => {
  const cutPiecesApple = cutPieces(apples);
  const cutPiecesOrange = cutPieces(oranges);
  const juice = `Juice of ${cutPiecesApple} apples pieces and ${cutPiecesOrange} oranges pieces`;
  return juice;
};
console.log(foodProcessor(2, 3));
