const a = "아메리카노";
const a1 = "라떼";

// 타입 어노테이션
const a2: string = "1";
const a3: boolean = !!"";
const a4: number[] = [1, 2, 3, 4, 5];
const a5: {
  name: string;
  isIce: boolean;
  price: number;
}[] = [
  { name: "아아", isIce: true, price: 2000 },
  { name: "Object", isIce: false, price: 3000 },
];

// age, isMan, nation [] 어노테이션해주고 데이터 아무거나 넣어주셈
const a6: { age: number; isMan: boolean; nation: String }[] = [
  { age: 30, isMan: true, nation: "한국" },
  { age: 32, isMan: false, nation: "미국" },
];
