// DOM[HTML+CSS]

// element type
const div = document.createElement("div");
div.innerText = "샤브샤브";
div.style.color = "red";
document.body.appendChild(div);

// 버튼 태그 3개 만드셈 [아메리카노] [에이드] [라떼]
["아메리카노", "에이드", "라떼"].forEach((v) => {
  const button1 = document.createElement("button");
  button1.innerText = v;
  button1.style.backgroundcolor = "skyblue";
  button1.style.color = "white";
  document.body.appendChild(button1);
});

// [아메리카노,노랑색,검은색] [에이드,핑크색,하얀색] [라떼,하늘색,주황색]
[
  { name: "아메리카노", bg: "yellow", color: "black" },
  { name: "에이드", bg: "pink", color: "white" },
  { name: "라떼", bg: "skyblue", color: "orange" },
].forEach((v) => {
  const button2 = document.createElement("button");
  button2.innerText = v.name;
  button2.style.backgroundcolor = v.bg;
  button2.style.color = v.color;
  document.body.appendChild(button2);
});

// 사이트의 기획 먼저 파악해야함
// [html + css] +[js]

const container = document.createElement("div");

// className
// container.className = "container"

// classList
container.classList.add("container"); // <div class="container"> </div>

const box = document.createElement("div");
box.classList.add("box");
box.style.backgroundColor = "red";
container.appendChild(box); // div tag(container) 안에 자식(box) 추가해달라 라는 뜻

const box1 = document.createElement("div");
box1.classList.add("box");
box1.style.backgroundColor = "yellow";
container.appendChild(box1);

document.body.appendChild(container);
