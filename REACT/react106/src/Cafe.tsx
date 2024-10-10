import { useState } from "react";

const Cafe = () => {
  const [coffee, setCoffee] = useState({
    coffee: {
      amount: 0,
      price: 1000,
    },
  });

  const coffeePick = () => {
    setCoffee((prev) => {
      return { ...prev, coffee: { amount: prev.coffee.amount } };
    });
  };
  return (
    <div>
      <span onClick={coffeePick}>아메리카노 : {coffee.coffee.amount}</span>
    </div>
  );
};

export default Cafe;
