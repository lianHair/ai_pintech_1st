// 1. 어떤숫자를 넣으면 홀수인지 짝수인지 돌려주는 함수
function name(x) {
  return x % 2 == 1 ? "홀수" : "짝수";
}

// 2. 어떤숫자를 넣으면 5배수이면 5의배수 아니면 5의배수가 아님을 돌려주는 함수
function name1(x) {
  return x % 5 == 0 ? "5의 배수" : "5의 배수 아님";
}

// 3. 어떤숫자를 넣으면 1 - 일반 팝콘, 2 - 캬라멜 팝콘, 3 - 치즈 팝콘, 그 외 그런거 없음 돌려주는 함수
// 이게 정답
function name2(x) {
  if (x == 1) {
    return "일반 팝콘";
  } else if (x == 2) {
    return "캬라멜 팝콘";
  } else if (x == 3) {
    return "치즈 팝콘";
  } else {
    return "그런 팝콘 없음";
  }
}

function name21(x) {
  const menu = {
    1: "일반 팝콘",
    2: "캬라멜 팝콘",
    3: "치즈 팝콘",
  };
  return menu[x] || "그런거 없음";
}

// (콘솔로그) 팝콘 문자만 원해요 + 출력까지 해줄게요 : 순수성에 위배됨
function name22(x) {
  if (x == 1) {
    console.log("일반 팝콘");
  } else if (x == 2) {
    console.log("캬라멜 팝콘");
  } else if (x == 3) {
    console.log("치즈 팝콘");
  } else {
    console.log("그런 팝콘 없음");
  }
}

// 4. 어떠한 문자열을 3개 넣으면 배열로 돌려주는 함수 ex)사탕, 떡볶이, 멜론 -> [사탕, 떡볶이, 멜론]
function name3(a, b, c) {
  return [a, b, c];
}

// 5. 어떠한 과일 이름을 넣으면 -맛 아이스크림을 돌려주는 함수
function name4(x) {
  return `${x}맛 아이스크림`;
}

const a = fruit("민트");
console.log();

// 3개 배열
function name44(a, b, c) {
  return [a, b, c];
}

// true, false 돌려주기
function name444(x) {
  return x % 2 == 1;
}
