import { l, pow, floor } from "./utiles";
function simulateThrow(n: number) {
  const array = [];
  for (let i = 0; i < n; i++) {
    array.push(floor(Math.random() * 6) + 1);
  }
  return array;
}
function tryToHaveSameNumbers(n: number) {
  let unblockDices = 5;
  for (let i = 0; i < 3; i++) {
    const dices = simulateThrow(unblockDices);
    unblockDices -= dices.filter((d) => d === n).length;
  }
  return 5 - unblockDices;
}
console.log(pow(5 / 6, 15));
l(pow(pow(6, 5), 3) * 13);
// Try to find prob of each combination
// only 1
// P_1(0) = (5/6)^15 ~ 0
const SAMPLE_SIZE = 100000000;
const results = [0, 0, 0, 0, 0, 0];
for (let i = 0; i < SAMPLE_SIZE; i++) {
  // const dices = simulateThrow()
  results[tryToHaveSameNumbers(4)]++;
}
l(results.map((r) => floor((r / SAMPLE_SIZE) * 10000) / 100));
// [6.48, 23.62, 34.39, 25.05, 9.11, 1.32];
