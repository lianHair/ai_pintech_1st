// - 0 +
// 10개 이상되면 버튼의 배경색 빨강으로 변하게 하셈

import { CSSProperties, useState } from "react";

const Counter = () => {
  const [elevation, setElevation] = useState(0);

  const minus = () => {
    setElevation((prev) => (prev == 0 ? 0 : prev - 1));
  };

  const plus = () => {
    setElevation((prev) => prev + 1);
  };

  return (
    <div>
      <button onClick={minus}>-</button>
      <button
        style={{
          backgroundColor: elevation >= 10 ? "red" : "white",
          border: "1px solid blue",
        }}
      >
        {elevation}
      </button>
      <button onClick={plus}>+</button>
    </div>
  );
};
export default Counter;
