import { CSSProperties } from "react";

type buttonProps = {
  borderRadius: "hard" | "smooth" | "circle";
  backgroundColor: "primary" | "hover" | "deactive";
};

const Button = (props: buttonProps) => {
  const backgroundcolors = {
    primary: "#f8a5c2",
    hover: "#63cdda",
    deactive: "#778beb",
  };

  const borderRadiuss = {
    hard: "0px",
    smooth: "8px",
    circle: "9999px",
  };

  const buttonStyle: CSSProperties = {
    borderRadius: borderRadiuss[props.borderRadius],
    backgroundColor: backgroundcolors[props.backgroundColor],
    padding: "10px, 40px",
    color: "white",
    fontSize: "30px",
    border: "none",
  };
  return <button style={buttonStyle}>^ 모 ^</button>;
};
export default Button;
