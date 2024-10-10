// 버스 종류
// 마을 버스, 시내 버스, 고속 버스, 심야 버스
// 1500, 2000, 8000, 10000

// 경기권, 충청권, 강원권, 제주권
// +2000, +3000, +3000, +10000

// 일반석, 프리미엄석, 넷플석
// +1000, +3000, +4000

// 나이 13세 이하 20%, 65세 이상 50%, 나머지 100%

const bus = {
  a1: [
    { name: "마을버스", price: 1500 },
    { name: "시내버스", price: 2000 },
    { name: "고속버스", price: 8000 },
    { name: "심야버스", price: 10000 },
  ],
  a2: [
    { name: "경기권", price: 2000 },
    { name: "충청권", price: 3000 },
    { name: "강원권", price: 3000 },
    { name: "제주권", price: 10000 },
  ],
  a3: [
    { name: "일반석", price: 1000 },
    { name: "프리미엄석", price: 3000 },
    { name: "넷플석", price: 4000 },
  ],
};

const a11 = Number(
  prompt(
    `${bus.a1[0].name} ${bus.a1[1].name} ${bus.a1[2].name} ${bus.a1[3].name} 중에 고르세요(0~3)`
  )
);
const a22 = Number(
  prompt(
    `${bus.a2[0].name} ${bus.a2[1].name} ${bus.a2[2].name} ${bus.a2[3].name} 중에 고르세요(0~3)`
  )
);
const a33 = Number(
  prompt(
    `${bus.a3[0].name} ${bus.a3[1].name} ${bus.a3[2].name} 중에 고르세요(0~2)`
  )
);
const age = Number(prompt("몇살?"));

const total = bus.a1[a11].price + bus.a2[a22].price + bus.a3[a33].price;
const msg = `${bus.a1[a11].name}, ${bus.a2[a22].name}, ${bus.a3[a33].name}`;

if (age <= 13) {
  console.log(`${msg} 총 금액 ${total * 0.8}원 입니다.`);
} else if (age >= 65) {
  console.log(`${msg} 총 금액 ${total * 0.5}원 입니다.`);
} else {
  console.log(`${msg} 총 금액 ${total}원 입니다.`);
}
