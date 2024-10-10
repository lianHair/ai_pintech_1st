// spread 연산자
// 1. 배열
// 1) 문자열
const spreadArray = [..."coffee"]; // ["c","o","f","f","e","e"] spread : 흩뿌리다

// 2) rest
const fruits = ["apple", "orange", "kiwi", "grape"];
const [first, second, third] = fruits; // first = apple, second = orange, third = kiwi
const [a, b] = fruits; // a = apple, b = orange
const [aa, ...bb] = fruits; // a = apple, b = ["orange","kiwi","grape"]

// Quiz -> ice_americano -> i a
const [ice, coffee] = "ice_americano".split("_");
const i = [...ice]; // ["i","c","e"] // [...ice][0] = ["i"]
const aaa = [...coffee]; // ["c","o","f","f","e","e"]

// 2. 오브젝트
const person = { name: "차은우", age: 28, agency: "판타지오" };
const { name, ...other } = person; // name: 차은우, other: {age: 28,  agency: "판타지오"}

const son = { name: "손흥민", position: "윙" };
const tottham = { club: "토트넘", number: 7 };
const korea = { nation: "대한민국", number: 10 };

const a0 = { son, tottham }; // {{ name: "손흥민", position: "윙" }, { club: "토트넘", number: 7 }}
const a1 = { ...son, ...tottham }; // {name: "손흥민", position: "윙", club: "토트넘", number: 7}
const a2 = { ...son, ...korea }; // {name: "손흥민", position: "윙", nation: "대한민국", number: 10}

// k값과 v값이 같으면 한 단어 가능
const coffeeName = "아메리카노";
const coffeeShots = 2;

const coffee1 = {
  coffeeName,
  coffeeShots,
};
