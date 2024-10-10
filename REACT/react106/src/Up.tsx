import { useState } from "react";

// Up.tsx -> 0 버튼 있음
// 클릭하면 숫자가 1씩 올라가는 컴포넌트 ㄱ

const Up = () => {
  const [num, setNum] = useState(0); // num, setNum => 무조건 앞에있는거 앞에 set 붙여야됨
  const plus = () => {
    setNum((prev) => {
      return prev + 1;
    });
  };

  return <button onClick={plus}>{num}</button>;
};

export default Up;
