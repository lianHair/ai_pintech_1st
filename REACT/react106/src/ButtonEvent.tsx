import { useState } from "react";

// react19 - state
const ButtonEvent = () => {
  const [food, setFood] = useState("마라탕");
  const abc = () => {
    setFood((prev) => {
      return prev + "후루 사주세요 선배!";
    });
  };

  return <button onClick={abc}>{food}</button>;
};

export default ButtonEvent;
