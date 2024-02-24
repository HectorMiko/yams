export function l(a: any) {
  console.log(a);
}
export function pow(a: number, b: number) {
  return Math.pow(a, b);
}
export function floor(a: number) {
  return Math.floor(a);
}
export function dice() {
  return floor(Math.random() * 6) + 1;
}
