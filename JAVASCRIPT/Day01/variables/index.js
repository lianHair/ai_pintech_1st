// const 변수 (variable) = "데이터"
const lunch = "짬뽕";
alert(lunch);

// 콘솔
// 커피라는 별명을 만들고
// 커피 데이터 넣어주고 콘솔로 출력
const coffee = "핫식스";
console.log(coffee);

// mbti라는 별명 만들고
// 님들 mbti 넣어주고
// 콘솔로 출력
const mbti = "ISFP";
console.log(mbti);

// 아래 3개 다 같은 말 (2번째가 요즘 많이 씀)
console.log("내 mbti ISFP");
console.log(`내 mbti ${mbti}`);
console.log("내 mbti " + mbti);

/*
- 5개의 변수명을 만들고 데이터 커스터마이즈 하셈

안녕하세요 저의 이름은 - 입니다.
저의 mbti는 - 이고요,
제가 좋아하는 OTT 플랫폼은 - 입니다.
요즘 즐겨보는 유튜버는 - 입니다.
오늘 저녁은 - 먹을 예정입니다.
*/
const name = "류리안";
const ott = "youtube";
const youtuber = "한동숙";
const food = "i don't know";

console.log(`안녕하세요 저의 이름은 ${name}입니다.
저의 mbti는 ${mbti} 이고요
제가 좋아하는 OTT 플랫폼은 ${ott} 입니다.
요즘 즐겨보는 유튜버는 ${youtuber} 입니다.
오늘 저녁은 ${food} 입니다.`);
