// 1. [10,20,30,40,50]을 30 이하면 100 더하기, 아니면 200 더하기
const num = [10, 20, 30, 40, 50];

const num1 = num.map((x) => {
  if (x <= 30) {
    return x + 100;
  } else {
    return x + 200;
  }
});
console.log(num1);

// 이것도 정답
// num.map((x) => {
//   return x <= 30 ? x + 100 : x + 200;
// });

// 2. ["americano","latte","vanilla","mocha","mint","tea"]
//   -1. 5글자 이하면 대문자화, 아니면 '☕'로 바꾸기
const coffee = ["americano", "latte", "vanilla", "mocha", "mint", "tea"];

const coffee1 = coffee.map((x) => {
  if (x.length <= 5) {
    return x.toUpperCase();
  } else {
    return x.replaceAll("☕");
  }
});
console.log(coffee1);

// 이것도 정답
// coffee.map((x) => {
//   return x.length <= 5 ? x.toUpperCase : "☕";
// });

// return 한 줄이면 return 빼도 됨
const add = (x, y) => {
  return x + y;
};
const add1 = (x, y) => x + y;
// const 같은 부가적인게 있으면 return 못뺌
