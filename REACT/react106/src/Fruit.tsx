import { CSSProperties, useState } from "react";
import Fruit1 from "./Fruit1";

const Fruit = () => {
  const [fruit, setFruit] = useState({
    apple: { amount: 0, price: 1000 },
    banana: { amount: 0, price: 1500 },
    orange: { amount: 0, price: 2000 },
  });

  const changeApple = () => {
    setFruit((prev) => {
      return {
        ...prev,
        apple: { amount: prev.apple.amount + 1, price: 1000 },
      };
    });
  };

  const changebanana = () => {
    setFruit((prev) => {
      return {
        ...prev,
        banana: { amount: prev.banana.amount + 2, price: 1500 },
      };
    });
  };

  const changeorange = () => {
    setFruit((prev) => {
      return {
        ...prev,
        orange: { amount: prev.orange.amount + 3, price: 2000 },
      };
    });
  };

  const boxStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    gap: "7px",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
      <div style={boxStyle}>
        <Fruit1
          fruitName="사과"
          fruitAmount={fruit.apple.amount}
          click={changeApple}
        ></Fruit1>
        <Fruit1
          fruitName="바나나"
          fruitAmount={fruit.banana.amount}
          click={changebanana}
        ></Fruit1>
        <Fruit1
          fruitName="오렌지"
          fruitAmount={fruit.orange.amount}
          click={changeorange}
        ></Fruit1>
        <span>
          / 총 갯수 :{" "}
          {fruit.apple.amount + fruit.banana.amount + fruit.orange.amount}개
        </span>
        <span>
          / 총 얼마 :{" "}
          {fruit.apple.amount * fruit.apple.price +
            fruit.banana.amount * fruit.banana.price +
            fruit.orange.amount * fruit.orange.price}
          원
        </span>
      </div>
      <div style={boxStyle}>
        <span>사과 : {fruit.apple.price}원 </span>
        <span>/ 바나나 : {fruit.banana.price}원 </span>
        <span>/ 오렌지 : {fruit.orange.price}원 </span>
      </div>
    </div>
  );
};

export default Fruit;

{
  /* <Fruit1
fruitName="사과"
fruitAmount={fruit.apple.amount}
click={changeApple}
></Fruit1>
<Fruit1
fruitName="바나나"
fruitAmount={fruit.banana.amount}
click={changebanana}
></Fruit1>
<Fruit1
fruitName="오렌지"
fruitAmount={fruit.orange.amount}
click={changeorange}
></Fruit1>
// 위 아래 같은 말임 // 다만 위에거가 더 개발자스러움
<span onClick={changeApple}>사과 : {fruit.apple.amount}개</span>
<span onClick={changebanana}>/ 바나나 : {fruit.banana.amount}개</span>
<span onClick={changeorange}>/ 오렌지 : {fruit.orange.amount}개</span>
<span> */
}
