// CGV 프로그램
// 1. 영화 고르기 - ["베테랑2", "에일리언", "사랑의하츄핑"]
// 2. 좌석 등급 고르기 - standard[10000], couple[20000], premium[15000], economyp[8000]
// 3. 팝콘 고르기- 일반[6000], 캬라멜[6500], 치즈[6500], 반반[7000]
// 4. 음료 고르기 - 탄산[2000], 에이드[3000], 커피[3000]
// 5. 나이 입력 - 13세 이하면 30% 할인, 60세 이상 20% 할인 [영화만 할인]
// 콘솔 - 영화, 좌석, 팝콘, 음료 총 금액 : -입니다.

// 메뉴판
const movie = {
  name: ["베테랑", "에일리언", "사랑의 하츄핑"],
  seat: [
    { name: "Standard", price: 10000 },
    { name: "Couple", price: 20000 },
    { name: "Premium", price: 15000 },
    { name: "Economy", price: 8000 },
  ],
};
const shop = {
  popcorn: [
    { name: "일반 팝콘", price: 6000 },
    { name: "캬라멜 팝콘", price: 6500 },
    { name: "치즈 팝콘", price: 6500 },
    { name: "반반 팝콘", price: 7000 },
  ],
  beverage: [
    { name: "탄산", price: 2000 },
    { name: "에이드", price: 3000 },
    { name: "커피", price: 3000 },
  ],
};

// ~중에 고르세요
const movieChoose = Number(prompt(`${movie.name} 중에 고르세요(0~2)`));
const seatChoose = Number(
  prompt(
    `${movie.seat[0].name}, ${movie.seat[1].name}, ${movie.seat[2].name}, ${movie.seat[3].name} 중에 고르세요(0~3)`
  )
);
const popcornChoose = Number(
  prompt(
    `${shop.popcorn[0].name}, ${shop.popcorn[1].name}, ${shop.popcorn[2].name}, ${shop.popcorn[3].name} 중에 고르세요(0~3)`
  )
);
const beverageChoose = Number(
  prompt(
    `${shop.beverage[0].name}, ${shop.beverage[1].name}, ${shop.beverage[2].name} 중에 고르세요(0~2)`
  )
);
const age = Number(prompt("몇살임?"));

// 메세지 기니깐 묶어줌
const msg = `${movie.name[movieChoose]}, ${movie.seat[seatChoose].name}, ${shop.popcorn[popcornChoose].name}, ${shop.beverage[beverageChoose].name}`;

// 마지막 if else 문으로 가격 매겨서 콘솔에 표시
if (age <= 13) {
  const total =
    movie.seat[seatChoose].price * 0.7 +
    shop.popcorn[popcornChoose].price +
    shop.beverage[beverageChoose].price;
  console.log(`${msg} 총 금액: ${total} 입니다`);
} else if (age >= 60) {
  const total =
    movie.seat[seatChoose].price * 0.8 +
    shop.popcorn[popcornChoose].price +
    shop.beverage[beverageChoose].price;
  console.log(`${msg} 총 금액: ${total} 입니다`);
} else {
  const total =
    movie.seat[seatChoose].price +
    shop.popcorn[popcornChoose].price +
    shop.beverage[beverageChoose].price;
  console.log(`${msg} 총 금액: ${total} 입니다`);
}
// lexical scope -> 고급 영역임. 궁금하면 찾아보셈
