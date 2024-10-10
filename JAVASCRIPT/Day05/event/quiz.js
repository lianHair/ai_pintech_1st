// 1. 아메리카노 주문 버튼 태그 만들고 누르면 주문완료! 로 바뀌는 버튼 만들기
// const button = document.createElement("button");
// button.classList.add("button");
// button.innerText = "아메리카노 주문하기";
// button.addEventListener("click", () => {
//   button.innerText = "주문완료!";
// });
// document.body.append(button);

// 2. 배경색이 하늘색 버튼 태그 만들고 누르면 핑크색으로 바뀌는 버튼 만들기
// const button1 = document.createElement("button");
// button1.classList.add("button1");
// button1.innerText = "하늘색";
// button1.style.backgroundColor = "skyblue";
// button1.addEventListener("click", () => {
//   button1.style.backgroundColor = "pink";
// });
// document.body.append(button1);

// 3. 버튼 다른색 5개 만들고 버튼내용은 색깔 이름 넣어야함
//    버튼을 누르면 아래에 박스의 색깔이 바뀌어야함
const box = document.createElement("div");
box.style.width = "100px";
box.style.height = "100px";
box.style.border = "1px solid black";

["red", "blue", "yellow", "orange", "green"].forEach((v) => {
  const button = document.createElement("button");
  button.innerText = v;
  button.style.backgroundColor = v;
  button.addEventListener("click", () => {
    box.style.backgroundColor = v;
  });
  document.body.appendChild(button);
});
document.body.appendChild(box);

// 4. 버튼 두개 추가 [네모], [둥글게]
// 내가 한거
const nemo = document.createElement("button");
nemo.innerText = "nemo";
nemo.addEventListener("click", () => {
  box.style.borderRadius = "0px";
});
document.body.appendChild(nemo);

const o = document.createElement("button");
o.innerText = "o";
o.addEventListener("click", () => {
  box.style.borderRadius = "9999px";
});
document.body.appendChild(o);

// 쌤이 한거
[
  { name: "네모", radius: "0px" },
  { name: "둥글게", radius: "9999px" },
].forEach((v) => {
  const button = document.createElement("button");
  button.innerText = v.name;
  button.addEventListener("click", () => {
    box.style.borderRadius = v.radius;
  });
  document.body.appendChild(button);
});

document.body.appendChild(box);
