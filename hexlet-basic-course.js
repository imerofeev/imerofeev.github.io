// Первая программа
console.log('Hello, World!');


// Математика и константы
const weight = 100;
const c = 300000000;
const energy = weight * (c ** 2);


// Функции и ящики
const squareOfSum = (a, b) => {
  return (a ** 2) + (2 * a * b) + (b ** 2);
};


// Условия и принятия решений
const finalGrade = (exam, projects) => {
  if (exam > 90 || projects > 10) {
    return 100;
  } else if (exam > 75 && projects >= 5) {
    return 90;
  } else if (exam > 50 && projects >= 2) {
    return 75;
  } else {
    return 0;
  }
};


// О, нет, ошибки! И как с ними справляться
const reference = () => {
  return m;
};

export default reference;

const type = () => {
  const m = 5;
  return m();
};

export default type;


// Рекурсия
const sequenceSum = (begin, end) => {
  if (begin > end) {
    return NaN;
  } else if (begin === end) {
    return begin;
  }
  return begin + sequenceSum(begin + 1, end);
};

export default sequenceSum;


// Итеративный процесс
const smallestDivisor = (num) => {
  const iter = (acc) => {
    if (acc > num / 2) {
      return num;
    }
    if (num % acc === 0) {
      return acc;
    }
    return iter(acc + 1);
  };

  return iter(2);
};

export default smallestDivisor;


// Переменные, декларативное и императивное программировани
const smallestDivisor = (num) => {
  let divisor = 2;
  if (num < 1){
    return NaN;
  } else if (num === 1){
    return num;
  } else {
    while (num % divisor !== 0 ){
      divisor = divisor + 1;
    } 
    return divisor;
  }
 

export default smallestDivisor;


//Строки и работа с символам
const reverse = (str) => {
  let result = '';
  let i = str.length - 1;
  while (i >= 0) {
    result = result + str[i];
    i = i - 1;
  }
  return result;


export default reverse;


//Цикл for и изменение переменны
const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
}

export default isPrime;


//Тесты и автоматическая проверка кода
import assert from 'assert';
import factorial from './implementations';

// Example
assert.equal(factorial(2), 2);
assert.equal(factorial(3), 6);
assert.equal(factorial(0), 1); 
assert.equal(factorial(1), 1); 
assert.equal(factorial(7), 5040);


//Модули
// myMathModule.js
export const getTrianglePerimeter = (a, b, c) => a + b + c;
export const getTriangleArea = (h, b) => 0.5 * h * b

// solution.js
import square from './square';
import { getTriangleArea } from './myMathModule.js';
export default (n) => getTriangleArea(n, square(n) / 2)


//Выражения и инструкци
const square = (num) => num * num;
const sumOfSquares = (a, b) => square(a) + square(b);
const squareSumOfSquares = (a, b) => square(sumOfSquares(a, b))

export default {
  square,
  sumOfSquares,
  squareSumOfSquares,
};


//Окружение
import { length, toUpperCase } from './strings';

const bigLettersCount = (str) => {
  let count = 0;
  for (let char of str) {
    if (toUpperCase(char) === char) {
      count = count + 1;
    }
  }
  return count;
};


const compare = (first, second) => {
  const firstCount = bigLettersCount(first);
  const secondCount = bigLettersCount(second);

  if (firstCount > secondCount) {
    return 1;
  } else if (firstCount < secondCount) {
    return -1;
  }
  return 0;
};

export const greaterThan = (first, second) => (
  compare(first, second) === 1);

export const lessThan = (first, second) => (
  compare(first, second) === -1);

export const isEqual = (first, second) => (
  compare(first, second) === 0);


//Типизация
import { length } from './strings';

const sum = (str) => {
  let result = 0;
  for (let i = 0; i < length(str); i++) {
    result += Number(str[i]);
  }
  return result;
};
const addDigits = (num) => {
  let result = num;
  while (result >= 10) {
    result = sum(String(result));
  }
  return result;
};
export default addDigits;


//Чистые функции
import { length, toUpperCase } from './strings';
const solution = (str) => {
  let newStr = '';
  for (let i = 0; i < length(str); i = i + 1) {
    if (i === 0 || str[i - 1] === ' ') {
      newStr += toUpperCase(str[i]);
    } else {
      newStr += str[i];
    }
  }
  return newStr;
};
export default solution;
