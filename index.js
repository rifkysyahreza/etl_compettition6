let arrayFull = [
  1, 2, 3, 4, 6, 5, 7, 8, 9, 10, 11, 13, 12, 14, 15, 16, 17, 18, 19, 20,
];
let operationHalf = Math.ceil(arrayFull.length / 2);
let arrayFirst = arrayFull.slice(0, operationHalf);
let arraySecond = arrayFull.slice(operationHalf);

let temp1 = 9;
for (let i = 0; i < arrayFirst.length / 2; i++) {
  console.log(
    `${arrayFirst[i]} -> ${arrayFirst[temp1 - i]} -> ${arrayFirst[i]} `
  );
}

let temp2 = 9;
for (let i = 0; i < arraySecond.length / 2; i++) {
  console.log(
    `${arraySecond[i]} -> ${arraySecond[temp2 - i]} -> ${arrayFirst[temp2 - i]}`
  );
}
