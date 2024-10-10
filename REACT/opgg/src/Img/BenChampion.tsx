import { CSSProperties } from "react";

export type BenChampionProps = {
  benChampion: string;
};

const BenChampion = (props: BenChampionProps) => {
  const BenChampionStyle: CSSProperties = {
    width: "30px",
    height: "30px",
    borderRadius: "9999px",
  };
  return <img style={BenChampionStyle} src={props.benChampion} alt="" />;
};

export default BenChampion;
