// String, Number, Boolean, Array
const arr = ["Samsung", "LG", "Apple", "Google"];

arr.push("Hyundai"); // Hyundai 뒤에 추가
arr.unshift("Hybe"); // Hybe 앞에 추가
arr.pop(); // 맨뒤에 요소 뺴기
arr.shift(); // 맨앞에 요소 빼기
arr.reverse(); // 배열 거꾸로 ["Google", "Apple", "LG", "Samsung"]
arr.indexOf("LG"); // 1 -> 1번째 있다고 찾아줌
arr.indexOf("toyota"); // -1 -> 없으면 -1 로 표시
arr.includes("Google"); // true

// 유저에게 뉴스기사를 입력받고, 찾고 싶은 단어를 입력 받은 후
// 단어가 있으면 단어가 있습니다! 없으면 단어가 없습니다!
const news = prompt("뉴스기사 입력");
const lookingWord = prompt("찾고 싶은 단어 입력");
0;
const words = news.split(" ");
const msg = words.includes(lookingWord) ? "단어가 있음" : "단어가 없음";
alert(msg);
