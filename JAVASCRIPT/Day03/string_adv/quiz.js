// 유저에게 비밀번호 설정을 물어보고,
// 비밀번호가 it, IT를 포함하면 비밀번호 설정완료! 아니면 비밀번호 설정오류!

// const a = prompt("비밀번호 설정 어케할거?");
// const aa = a.includes("it") || a.includes("IT");
// const msg = aa ? "비밀번호 설정완료!" : "비밀번호 설정오류!";
// alert(msg);

// 1. 유저에게 좋아하는 음식을 입력 받고, 그 음식을 5번 출력하는 프로그램
const food = prompt("좋아하는 음식");
const fiveFood = food.repeat(5);
alert(fiveFood);

// 2. 유저에게 좋아하는 음식과 횟수를 입력 받고, 그 음식을 횟수번 만큼 출력하는 프로그램
// ex) 떡볶이 5 -> 떡볶이떡볶이떡볶이떡볶이떡볶이
const foodCount = prompt("좋아하는 음식, 횟수 입력");
const arr = foodCount.split(" "); // ["떡볶이", "5"]

const myFood = arr[0]; // 떡볶이
const count = Number(arr[1]); // 5
alert(myFood.repeat(count));

// 3. 유저에게 알파벳 단어를 입력 받고, 6글자보다 작으면 소문자화 하고, 크면 대문자화 해서 출력
const alpha = prompt("알파벳 ㄱ");
const is6under = alpha.length <= 6;

const result = is6under ? alpha.toLowerCase() : alpha.toUpperCase();
alert(result);

// 뉴스를 단어별로 배열화 하기
const news = `Left-leaning politician Anura Kumara Dissanayake has won Sri Lanka’s presidential election after a historic second round of counting.
No candidate won more than 50% of the total votes in the first round, where Dissanayake got 42.31% while his closest rival, opposition leader Sajith Premadasa, got 32.76%.
But Dissanayake, who promised voters good governance and tough anti-corruption measures, emerged as winner after the second count, which tallied voters' second and third choice candidates.
The election on Saturday was the first to be held since mass protests unseated the country's leader, Gotabaya Rajapaksa, in 2022 after Sri Lanka suffered its worst economic crisis.`;

alert(news.split(" "));

// 1. 유저에게 단어를 입력받고, 소문자면 대문자로, 대문자면 소문자로
// ex) happy -> HAPPY, SAD -> sad
const word = prompt("단어 입력");
const result1 =
  word == word.toUpperCase() ? word.toLowerCase() : word.toUpperCase(); // word가 대문자와 같을때 true면 소문자화 : false면 대문자화
alert(result1);

// 2. 유저에게 비밀번호 설정을 물어보고
// -1. 길이가 8~20 이 아니면 비밀번호 길이 오류!
// -2. 시작이 it, IT로 시작안하면 비밀번호 시작은 it, IT로 시작해야함
// -3. 특수문자 &#@! 중에 하나라도 없으면 비밀번호에 반드시 특수문자 넣어야함
// 위에 조건이 모두 통과되면 비밀번호 설정완료!
const b = prompt("비밀번호 설정");
const b1 = 20 >= b.length && b.length >= 8;
const b2 = b.startsWith("it") || b.startsWith("IT");
const b3 =
  b.includes("&") || b.includes("#") || b.includes("@") || b.includes("!");

if (!b1) {
  alert("비밀번호 길이 오류!");
} else if (!b2) {
  alert("비밀번호 시작은 it, IT로 시작해야함");
} else if (!b3) {
  alert("비밀번호에 반드시 특수문자 넣어야함");
} else {
  alert("비밀번호 설정 완료!");
}
