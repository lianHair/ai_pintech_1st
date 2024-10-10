// typeliteral

// 화남정도
type angryDepth = 1 | 2 | 3 | 4 | 5;
const d1: angryDepth = 3;

// 게임
type jobType = "전사" | "마법사" | "궁수" | "도적";
const d2: { id: string; level: number; job: jobType } = {
  id: "지존법사령이",
  level: 155,
  job: "도적",
};

// 맥도날드
type Hamburger = "불고기버거" | "새우버거" | "치즈버거" | "빅맥" | "상하이버거";
type Side = "감자튀김" | "치즈스틱" | "콘솔로우" | "해쉬브라운";
type Drinks =
  | "제로콜라"
  | "콜라"
  | "환타"
  | "물"
  | "스프라이트"
  | "제로 스프라이트";

type SetMenu = {
  main: Hamburger;
  side: Side;
  drinks: Drinks;
};

const myMacdonald: SetMenu = {
  main: "빅맥",
  side: "감자튀김",
  drinks: "제로 스프라이트",
};

// 서브웨이 = 빵, 메인, 치즈, 야채, 소스1, 소스2
type bread = "파마산 오레가노" | "화이트" | "플랫브래드" | "허니오트";
type main = "치킨 슬라이스" | "바비큐 치킨" | "비엠티";
type cheese = "슈레드 치즈" | "아메리칸 치즈" | "모짜렐라 치즈";
type vegitable = "양상추" | "토마토" | "피망" | "오이" | "피클";
type source = "스위트 어니언" | "렌치" | "후추" | "소금";

// { name : type } // 위에 bread, main, ... 등 타입을 만들어놔서 [String, Number]로 안넣고 만든 타입[bread, main, ...] 넣어도됨
type Menu = {
  bread: bread;
  main: main;
  cheese: cheese;
  vegitable: vegitable[];
  source: source[];
};

const subway: Menu = {
  bread: "파마산 오레가노",
  main: "바비큐 치킨",
  cheese: "모짜렐라 치즈",
  vegitable: ["양상추", "오이", "토마토"],
  source: ["렌치", "스위트 어니언"],
};
