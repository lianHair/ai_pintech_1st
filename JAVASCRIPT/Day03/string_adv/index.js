const pizza = "cheese pizza";

// 포함하니?
const hasCheese = pizza.includes("cheese"); // true
const hasPine = pizza.includes("pineapple"); // false
const hasC = pizza.includes("c"); // true
const hasEE = pizza.includes("ee"); // true

// 몇번째임?
const indexH = pizza.indexOf("h"); // 1
const indexB = pizza.indexOf("b"); // -1

pizza.replace("z", "k"); // cheese pikza -> 첫번쨰 z 만 k로 바꿔줌
pizza.replaceAll("z", "k"); // cheese pikka -> z 전부 k로 바꿔줌

pizza.startsWith("pizza"); // false
pizza.endsWith("pizza"); // true

pizza.toUpperCase(); // 대문자화
pizza.toLowerCase(); // 소문자화

// 나누기
pizza.slice(0, 4); // chee 4번쨰 앞에서 끊음

// 나누기[배열화]
pizza.split("i"); // ["cheese p", "zza"]
pizza.split(" "); // ["cheese", "pizza"]

// 반복하기
pizza.repeat(3); // cheese pizza cheese pizza cheese pizza

pizza.length; // 문자의 길이 = 12개 (띄어쓰기 포함)
