// 기본 타입 : String, Number, Boolean, Null, Undefined
// 참조 타입 : Array

// Array(배열) : []
// 시작은 0번째부터 0, 1, 2, 3, ...
const paik = ["아메리카노", "라떼", "모카", "바닐라"];
console.log(paik);
console.log(paik[2]); // 모카 나옴

// 서브웨이
// 빵메뉴 고르기 [플랫, 화이트, 위트]
// 치즈메뉴 고르기 [슈레드, 모짜렐르, 아메리칸치즈]
// 소스메뉴 고르기 [머스타드, 핫칠리, 소금, 후추, 스언, 홀레]
// 쿠키메뉴 고르기 [화이트, 초콜릿, 아몬드]
// 음료메뉴 고르기 [콜라, 제로콜라, 스프라이트, 커피]
// 최종메뉴는 플랫 - 모짜렐라 - 소금 - 아몬드쿠키 - 콜라

// 내가한것
// const f1 = prompt(["플랫", "화이트", "위트"]);
// const f2 = prompt(["슈레드", "모짜렐르", "아메리칸치즈"]);
// const f3 = prompt(["머스타드", "핫칠리", "소금", "후추", "스언", "홀레"]);
// const f4 = prompt(["화이트", "초콜릿", "아몬드"]);
// const f5 = prompt(["콜라", "제로콜라", "스프라이트", "커피"]);
// console.log(`${f1}-${f2}-${f3}-${f4}-${f5}`);

const a1 = ["플랫", "화이트", "위트"];
const a2 = ["슈레드", "모짜렐르", "아메리칸치즈"];
const a3 = ["머스타드", "핫칠리", "소금", "후추", "스언", "홀레"];
const a4 = ["화이트", "초콜릿", "아몬드"];
const a5 = ["콜라", "제로콜라", "스프라이트", "커피"];

const b1 = Number(prompt(`${a1}중 고르세요(0~2)`));
const b2 = Number(prompt(`${a2}중 고르세요(0~2)`));
const b3 = Number(prompt(`${a3}중 고르세요(0~5)`));
const b4 = Number(prompt(`${a4}중 고르세요(0~2)`));
const b5 = Number(prompt(`${a5}중 고르세요(0~3)`));

console.log(`${b1}-${b2}-${b3}-${b4}-${b5}`);
