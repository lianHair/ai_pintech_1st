// 2000개 [빨,주,노,초,파,남,보]

const container = document.createElement("div");

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "purple"];

Array(2000)
  .fill(0)
  .forEach((v, i) => {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.backgroundColor = colors[i % colors.length]; // %7 -> 0~6번이니 7번째부터 0번으로 세기 위함 // 8개 색이면 0~7번이니 -> %8
    container.appendChild(box);
  });

document.body.appendChild(container);
