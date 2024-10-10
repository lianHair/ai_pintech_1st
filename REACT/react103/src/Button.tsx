import { CSSProperties } from "react";

type buttonStyle = {
  backgroundColor: string;
  padding: string;
  text: string;
};
// 위에 써놓은걸 개발자스럽게 써본다면 아래처럼 하면 됨
// type ButtonCSS = {backgroundColor: string;    padding: string;}
// type ButtonText = {text: string;}
// type ButtonProps = ButtonCSS & ButtonText

// 아래의 props를 => {backgroundColor,padding} 로 대체 가능
const Button = (props: buttonStyle) => {
  const CssStyle: CSSProperties = {
    backgroundColor: props.backgroundColor,
    padding: props.padding,
  };
  return <button style={CssStyle}>{props.text}</button>; // {props.text} 를 => {text} 로 대체 가능
};

export default Button;

// HTML
// <div>
//         <Button backgroundColor="pink" text="오늘은 목요일" padding="10px" />
//         <Button
//           backgroundColor="skyblue"
//           text="내일까지만 나오면"
//           padding="5px"
//         />
//         <Button backgroundColor="orange" text="안나옴 ㅅㄱ" padding="20px" />
// </div>
