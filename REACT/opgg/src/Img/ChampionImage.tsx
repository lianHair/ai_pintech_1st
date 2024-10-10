import { CSSProperties } from "react";

export type ChampionImageProps = {
  championImage: string;
};

const ChampionImage = (props: ChampionImageProps) => {
  const ChampionImageStyle: CSSProperties = {
    width: "30px",
    height: "30px",
  };
  return <img style={ChampionImageStyle} src={props.championImage} alt="" />;
};

export default ChampionImage;
