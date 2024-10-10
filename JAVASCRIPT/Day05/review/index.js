// 1. 좋아하는 색깔 5개 배열로 넣은 뒤에
//    grid로 3열로 박스(100개) 형태로 넣기

// 내가 한거
// const main = document.createElement("main");

// const container = document.createElement("section");
// container.classList.add("container");

// Array(100)
//   .fill(0)
//   .forEach((v, i) => {
//     const box1 = document.createElement("div");
//     box1.classList.add("box1");
//     const box2 = document.createElement("div");
//     box2.classList.add("box2");
//     const box3 = document.createElement("div");
//     box3.classList.add("box3");
//     const box4 = document.createElement("div");
//     box4.classList.add("box4");
//     const box5 = document.createElement("div");
//     box5.classList.add("box5");

//     container.appendChild(box1);
//     container.appendChild(box2);
//     container.appendChild(box3);
//     container.appendChild(box4);
//     container.appendChild(box5);
//   });

// document.body.appendChild(container);

//쌤이 한거
const main = document.createElement("main");

const container = document.createElement("section");
container.classList.add("container");

const colors = ["red", "skyblue", "pink", "yellow", "orange"];

Array(100)
  .fill(0)
  .forEach((v, i) => {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.backgroundColor = colors[i % colors.length];
    container.appendChild(box);
  });

main.appendChild(container);
document.body.appendChild(container);
