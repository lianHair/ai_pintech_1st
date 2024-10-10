// 1. [1,2,3,4,5] -> 두배 해주기
// 2. [1,2,3,4,5] -> 홀수면 두배 짝수면 세배
// 3. [1,2,3,4,5] -> 3 이하면 '🍒' 아니면 '🍉'

const a = (x) => {
  return x * 2;
};
const b = (x) => {
  return x % 2 == 1 ? x * 2 : x * 3;
};
const c = (x) => {
  return x <= 3 ? "🍒" : "🍉";
};

const num = [1, 2, 3, 4, 5].map(a);
const num1 = [1, 2, 3, 4, 5].map(b);
const num2 = [1, 2, 3, 4, 5].map(c);

console.log(num);
console.log(num1);
console.log(num2);

// 쌤이 한거

// const arr = [1, 2, 3, 4, 5];

// const multiArr = arr.map((x) => {
//   return x * 2;
// });
// const oddEven = arr.map((x) => {
//   return x % 2 == 1 ? x * 2 : x * 3;
// });
// const fruits = arr.map((x) => {
//   return x <= 3 ? "🍒" : "🍉";
// });

const fruitArray = [
  "watermelon",
  "cherry",
  "banana",
  "avocado",
  "apple",
  "orange",
  "pineapple",
  "strawberry",
];

// 1. 문자의 길이가 7글자 이상이면 대문자화 아니면 소문자화
const fruit = fruitArray.map((x) => {
  return x.length >= 7 ? x.toUpperCase() : x.toLowerCase();
});

// 2. 알파벳 a가 들어가면 대문자화 아니면 소문자화
const fruit1 = fruitArray.map((x) => {
  return x.includes("a") ? x.toUpperCase() : x.toLowerCase();
});

// 3. 단어 안에 있는 알파벳 a를 '🍒'로 바꾸기
const fruit2 = fruitArray.map((x) => {
  return x.includes("a") ? x.replaceAll("a", "🍒") : x;
});

console.log(fruit);
console.log(fruit1);
console.log(fruit2);

// 이것도 정답
// const q1 = (x) => {
//   return x.length >= 7 ? x.toUpperCase() : x.toLowerCase();
// };
// const q2 = (x) => {
//   return x.includes("a") ? x.toUpperCase() : x.toLowerCase();
// };
// const q3 = (x) => {
//   return x.includes("a") ? x.replaceAll("a", "🍒") : x;
// };

// const quiz1 = fruitArray.map(q1);
// const quiz2 = fruitArray.map(q2);
// const quiz3 = fruitArray.map(q3);

const starbucks = [
  {
    name: "americano",
    price: 4500,
    shots: 2,
    ingredients: ["water", "beeans"],
  },
  { name: "latte", price: 6000, shots: 2, ingredients: ["milk", "beans"] },
  {
    name: "java chip",
    price: 6500,
    shots: 2,
    ingredients: ["milk", "wheat", "beans"],
  },
  {
    name: "honey black tea",
    price: 5700,
    shots: 1,
    ingredients: ["grapefruit", "water", "source"],
  },
];
// 1. 가을시즌 이벤트 -> 모든 가격을 10% 할인한 가격으로 바꿔주셈
const a1 = starbucks.map((x) => {
  x.price = x.price * 0.9; // 숫자 -> 숫자라서 x.price = 앞에 붙여줌
  return x;
});

// 2. 두유시즌 이벤트 -> 성분에 두유 강제 추가
const a2 = starbucks.map((x) => {
  x.ingredients.push("두유"); // 문자 배열 -> 문자라서 x.ingredients = 안붙여도됨
  return x;
});

// 3. 스타벅스 아아 기념 -> 이름이 아메리카노면 20% 할인된 가격으로 바꿔주고, 샷 하나 더 늘려주셈
const a3 = starbucks.map((x) => {
  if (x.name == "americano") {
    x.price = x.price * 0.8; // 숫자 -> 숫자라서 x.price = 앞에 붙여줌
    x.shots = x.shots + 1; // 숫자 -> 숫자라서 x.price = 앞에 붙여줌
    return x;
  } else {
    return x;
  }
});

// 4.
const a4 = starbucks.map((x) => {
  x.price = x.price * 1.2; // 숫자 -> 숫자라서 x.price = 앞에 붙여줌
  return x;
});

console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
