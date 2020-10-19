// oma tyyppi!
type Operation = 'multiply' | 'add' | 'divide';

const calculator = (a: number, b: number, op: Operation) => {
  if (op === 'multiply') {
    return a * b;
  }
  else if (op === 'add') {
    return a + b;
  }
  else if (op === 'divide') {
    if (b === 0) {
      return 'cannot divide by zero!'
    }
    return a - b;
  }
}
 
console.log(calculator(8, 17, 'multiply'));
console.log(calculator(8, 17, 'add'));
console.log(calculator(8, 17, 'divide'));
console.log(calculator(8, 0, 'divide'));


