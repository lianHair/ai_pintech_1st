// makeCoffe 함수 만들기 [커피 준비 - 커피 완료]
// americano, latte, vanilla 함수 만들어서
// makeCoffee(americano) // [커피 준비 - 아케리카노 - 커피 완료]

const makeCoffee = (coffee) => {
  console.log("커피 준비");
  coffee();
  console.log("커피 완료");
};

const americano = () => {
  console.log("아메리카노 만들기");
  console.log("원두 갈기");
  console.log("샷 추가");
  console.log("얼음을 컵에 넣기");
  console.log("물 넣기");
};

const latte = () => {
  console.log("딸기라떼 만들기");
  console.log("원두 갈기");
  console.log("샷 추가");
  console.log("얼음을 컵에 넣기");
  console.log("우유 추가");
  console.log("딸기 시럽 추가");
};

const vanilla = () => {
  console.log("바닐라라떼 만들기");
  console.log("라떼");
  console.log("원두 갈기");
  console.log("샷 추가");
  console.log("얼음을 컵에 넣기");
  console.log("우유 추가");
  console.log("바닐라 시럽 추가");
};

makeCoffee(americano);
makeCoffee(latte);
makeCoffee(vanilla);

makeCoffee(() => {
  console.log("아망추 만들기");
  console.log("원두 갈기");
  console.log("샷 추가");
  console.log("얼음을 컵에 넣기");
  console.log("물 넣기");
  console.log("망고 추가");
});
