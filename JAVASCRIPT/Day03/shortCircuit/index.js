// ||[or]
const a = false || true; // true
const b = false || "마라탕"; // 마라탕
const c = undefined || "자바스크립트"; // 자바스크립트

const username = prompt("유저 이름 입력");
alert(`${username || "Guest"}님 환영합니다`); // username님 환영합니다, 안칠경우 Guest님 환영합니다 로 출력

// &&[and]
const d = true && true; // true
const e = true && "탕수육"; // 탕수육
const f = false && "탕후루"; // false

const isLoggin = prompt("비밀번호 입력하셈") === "1234";
isLoggin && alert("주인님 ㅎㅇ");
