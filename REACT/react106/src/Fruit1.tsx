type FruitProps = {
  fruitName: string;
  fruitAmount: number;
  click: () => void;
};

const Fruit1 = (props: FruitProps) => {
  return (
    <span onClick={props.click}>
      {props.fruitName} : {props.fruitAmount}개
    </span>
  );
};

export default Fruit1;
