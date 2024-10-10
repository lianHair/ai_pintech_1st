// |(union [or])
const b: string | number = "1";

// 배열이면서 name[문자], age[문자 or 숫자] 나타내주셈
const b1: { name: String; age: String | Number }[] = [
  { name: "이름", age: "20" },
  { name: "성함", age: 20 },
];

// &(intersection [and])
// const b2: string & number => never 타입
const b2: { name: string } & { age: number } = {
  age: 21,
  name: "재민이",
};

// any : 뭐든지 가능
const b3: any = { name: "뭐든지 가능" };

// 함수
const b4: (x: string) => string = (x) => `${x}맛 아이스크림`;
const b5: (x: number) => number = (x) => x ** x;
