// 1. 출생년도를 물어보고 2005년 이하면 성인입니다. 아니면 미성년자입니다.
const year = Number(prompt("출생년도가?"));
const year1 = 2005 >= year ? "성인입니다" : "미성년자입니다";
console.log(year1);

// 2. 놀이기구를 탈려고 키를 물었음. 150cm 이하면 탈 수 없습니다. 아니면 탈 수 있습니다.
const height = Number(prompt("키몇?"));
const msg = 150 <= height ? "탈수있음" : "탈수없음";
console.log(msg);

// 3. 양의 정수를 입력받고, 분초를 바꾸는 프로그램
//    ex) 63 -> 1분 3초, 125 -> 2분 5초
const num = Number(prompt("양의 정수 입력"));
const sec = num % 60; // 76 입력시 -> 16초
const min = parseInt(num / 60); // 201 입력시 -> 3분   parseInt() : 정수값만 출력
console.log(`${min}분 ${sec}초`);
