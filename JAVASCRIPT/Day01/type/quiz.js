// prompt로 첫번째 숫자 입력
// prompt로 두번째 숫자 입력
// 콘솔로 두 수의 합은 - 입니다.

// 1. const one = prompt("첫번째 숫자 입력");
//    const two = prompt("두번째 숫자 입력");
//    const sum = Number(one) + Number(two);
//    console.log(`두 수의 합은 ${sum} 입니다`); -> 이것도 정답

// 2. console.log(`두 수의 합은 ${Number(one) + Number(two)} 입니다`); -> 이것도 정답

// 3. const one = Number(prompt("첫번째 숫자 입력"));
//    const two = Number(prompt("두번째 숫자 입력"));
//    console.log(`두 수의 합은 ${one + two} 입니다`); -> 이것도 정답

// ask : prompt, answer : console

// 1. 한변의 길이를 물어보고, 정사각형의 넓이와 둘레 알려주기
const one = Number(prompt("정사각형 한변의 길이 얼마?"));
console.log(`정사각형 넓이는 ${one * one}, 둘레는 ${one * 4}`);

// 2. 밑변과 높이를 물어보고, 정삼각형의 넓이 구하기
const two = Number(prompt("정삼각형 밑변 얼마?"));
const two1 = Number(prompt("정삼각형 높이 얼마?"));
console.log(`정삼각형 넓이는 ${two * two1 * 0.5}`);

// 3. 반지름을 물어보고, 원의 넓이와 둘레 구하기
const three = Number(prompt("원 반지름 얼마?"));
console.log(`원 넓이는 ${3.14 * three * three}, 원 둘레는 ${2 * 3.14 * three}`);

// 4. 출생년도를 물어보고 나이를 나타내기 ex) 몇년생임? 1995 -> 30
const f4 = Number(prompt("출생년도가?"));
console.log(`님 나이 ${2024 - f4 + 1}세`);

// 5. 일본여행 갈거임 그래서 100만원 환전하면 현재 환율로 엔화 나타내기
//     ex) 얼마 환전? 1000000 -> 107451
const f5 = Number(prompt("얼마 환전할거임?"));
console.log(`${f5 * 0.1075}`);
