import { CSSProperties } from "react";
import CategoryList, { CategoryListProps } from "./CardUpperUp/CategoryList";
import GymName, { GymNameProps } from "./CardUpperUp/GymName";
import Album, { AlbumProps } from "./CardUpperUp/Album";
import StarRate, { StarRateProps } from "./CardUpperUp/StarRate";
import Reviews, { ReviewsProps } from "./CardUpperUp/Reviews";
import Address, { AddressProps } from "./CardUpperUp/Address";
import Tag, { tegProps } from "./CardDown/Tag";
import Price, { priceProps } from "./CardUpperDown/Price";
import { FreeContentsProps } from "./CardDown/FreeContents";

// 카드 위에꺼
export type CardUpperprops = AlbumProps &
  CategoryListProps &
  GymNameProps &
  AddressProps &
  StarRateProps &
  tegProps &
  ReviewsProps &
  priceProps &
  FreeContentsProps;

const CardUpper = (props: CardUpperprops) => {
  const cardUpperStyle: CSSProperties = {
    display: "flex",
    gap: "10px",
  };

  const rightStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "90%",
  };

  const infoStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
  };

  const eventStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  };

  return (
    <div style={cardUpperStyle}>
      <Album image={props.image} />
      <div style={rightStyle}>
        <div style={infoStyle}>
          <CategoryList categories={props.categories} />
          <GymName gymName={props.gymName}></GymName>
          <div>
            <StarRate starRate={props.starRate}></StarRate>
            <Reviews reviews={props.reviews}></Reviews>
            <Address address={props.address}></Address>
          </div>
        </div>
        <div style={eventStyle}>
          <Tag text={props.text}></Tag>
          <Price price={props.price}></Price>
        </div>
      </div>
    </div>
  );
};

export default CardUpper;
