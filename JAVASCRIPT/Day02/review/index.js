// 운동 순서 만들기 프로그램
// 문제 : 운동을 prompt 로 3번 입력받고, console.log로 운동순서 : A-B-C로 출력
// 커피 가격과 수량 계산하기
// 문제 : 커피 한 잔의 가격을 prompt로 입력받고, prompt로 커피의 수량을 입력받아 총 가격을 계산
// 태어난 년도를 입력하면 몇살인지 알려주는 프로그램 만들기
// 문제 : 태어난 년도를 prompt로 입력받고, console.log로 A살이군요 출력

const a = prompt("1번 운동");
const b = prompt("2번 운동");
const c = prompt("3번 운동");
console.log(`${a}-${b}-${c} 순서로 운동하셈`);

const coffee = Number(prompt("커피 한 잔 가격 얼마?"));
const coffee1 = Number(prompt("커피 몇개 주문할거?"));
console.log(`${coffee * coffee1}원 내셈`);

const f1 = Number(prompt("몇년생임?"));
console.log(`님 나이 ${2025 - f1}세`);
