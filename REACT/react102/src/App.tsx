// !! 항상 첫글자는 대문자로 만들어야함 !!

import Box from "./Box";

// DisLikeButton - 짱시룸 // 버튼 만들기
// Umm - 엄준식 // 엄준식 만들기

// RedBox - 100px*100px
// GreenBox
// YellowBox
// SkyblueBox

function App() {
  return (
    <div>
      <Box
        width={"30px"}
        height={"30px"}
        backgrondColor={"red"}
        color="yellow"
        text="R"
      />
      <Box
        width={"50px"}
        height={"50px"}
        backgrondColor={"blue"}
        color="white"
        text="B"
      />
      <Box
        width={"100px"}
        height={"100px"}
        backgrondColor={"green"}
        color="pink"
        text="Gray"
      />
      <Box
        width={"150px"}
        height={"150px"}
        backgrondColor={"orange"}
        color="green"
        text="O"
      />
    </div>
  );
}

export default App;
