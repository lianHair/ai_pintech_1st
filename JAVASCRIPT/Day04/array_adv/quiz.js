// 1. [1,2,3,4,5,6,7,8,9,10] 중에 3의 배수만 살려줘
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter((x) => {
  return x % 3 == 0;
});

// 2. [1,2,3,4,5,6,7,8,9,10] 4 이상 8 이하만 살려줘
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter((x) => {
  return 4 <= x && x <= 8;
});

const fruitArray = [
  "watermelon",
  "cherry",
  "banana",
  "avocado",
  "apple",
  "orange",
  "pineapple",
  "strawberry",
];
// 3. 알파벳 O가 들어있는 애들만 살려줘
fruitArray.filter((x) => {
  return x.includes("o");
});

// 4. 문자 길이가 6글자 이상만 살려줘
fruitArray.filter((x) => {
  return x.length >= 6;
});

// 5. 문자 길이가 짝수인 애들만 살리고, 대문자화 시켜줘
// 메소드 체이닝(method chaining)
fruitArray
  .filter((x) => {
    return x.length % 2 == 0;
  })
  .map((x) => {
    return x.toUpperCase();
  });

// 6. 유저에게 정수 n(maximum), k(배수)를 입력 받으면
//     n=10, k=3 -> [3,6,9]
const test = (n, k) => {
  return Array(n)
    .fill(0) // [0,0,0,0,0,0,0,0,0,0]
    .map((x, i) => {
      return;
      i + 1; // [1,2,3,4,5,6,7,8,9,10]
    })
    .filter((x) => {
      return x % k == 0;
    }); // [3,6,9]
};

// 7. newTodolist = ["점심먹기","복습하기"] 가 남기게 짜주셈
//    todolist = ["점심먹기","복습하기","유튜브보기","카톡하기"]
//    finishied = [false,false,true,true]
const todolist = ["점심먹기", "복습하기", "유튜브보기", "카톡하기"];
const finished = [false, false, true, true];

const test1 = (todolist, finished) => {
  return todolist.filter((x, i) => {
    return !finished[i]; // true를 부정(!) false만 남음
  });
};

// 8. x 기준으로 나눴을 때, 나눠진 문자열의 각각 길이를 배열화 시킨거
//    "xabcxdefxghi" [0,3,3,3]
const a = "xabcxdefxghi";
const b = a.split("x").map((x) => x.length);
console.log(b);

// 이것도 정답
// "xabcxdefxghi".split("x").map((x) => x.length);

// 9. 모음 : a,e,i,o,u는 대문자로 바꾸기
const fruits = ["melon", "kiwi", "apple", "banana", "orange"];
const vowels = ["a", "e", "i", "o", "u"];

// melon만 일단 해보기
"melon".split("").map((x) => {
  return x == "a" || x == "e" || x == "i" || x == "o" || x == "u"
    ? x.toUpperCase()
    : x;
});

// 모음 : a,e,i,o,u는 대문자로 바꾸기
fruits.map((x) =>
  x
    .split("")
    .map((x) =>
      x == "a" || x == "e" || x == "i" || x == "o" || x == "u"
        ? x.toUpperCase()
        : x
    )
);

// // 이것도 정답
// fruits.map((x) =>
//   x.split("".map((y) => (vowels.some((v) => v == y) ? y.toUpperCase() : y)))
// );

// 10. 1~100 까지 만들고 369 만들기
//     [1,2,"🤚",...]

// 해당 타입에 방법이 없으면 다른 타입으로 바꿔서 ㄱㄱ
const f = Array(100)
  .fill(0)
  .map((x, i) => String(i + 1)) // i 가 숫자였는데 숫자를 문자화 시켜버리기
  .map((x) =>
    x.includes("3") || x.includes("6") || x.includes("9") ? "🤚" : x
  );

console.log(f);
