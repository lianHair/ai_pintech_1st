// 조건문! (조건에 맞으면 코드 실행하는 뜻~)
// if-else문
// 시작할때 무조건 if 끝날때 무조건 else 그사이엔 else if

const num = Number(prompt("숫자 입력"));
if (num > 0) {
  console.log("입력한 값은 양수임");
} else if (num == 0) {
  console.log("0임");
} else {
  console.log("입력한 값은 음수임");
}
console.log("프로그램 끝");

// 수학 시험 점수 프로그램
// 90점 이상 A, 80점 이상 B, 70점 이상 C, 60점 이상 D, 그 외는 수강철회
const math = Number(prompt("수학 점수 입력"));
if (math >= 90) {
  console.log("A");
} else if (math >= 80) {
  console.log("B");
} else if (math >= 70) {
  console.log("C");
} else if (math >= 60) {
  console.log("D");
} else {
  console.log("수강철회");
}

// 숫자를 입력해서 양의 홀수, 양의 짝수, 0, 음의 홀수, 음의 짝수 알려주기
// ex) -3 -> 음의 홀수, -4 -> 음의 짝수
const f1 = Number(prompt("숫자 입력"));

const isPositive = f1 > 0;
const isNegative = f1 < 0;
const isOdd = f1 % 2 == 1;
const isEven = f1 % 2 == 0;

if (isPositive && isOdd) {
  console.log("양의 홀수");
} else if (isPositive && isEven) {
  console.log("양의 짝수");
} else if (isNegative && isOdd) {
  console.log("음의 홀수");
} else if (isNegative && isEven) {
  console.log("음의 짝수");
} else {
  console.log("0");
}
// if (f1 > 0 && f1 % 2 == 1) -> 이것도 정답
