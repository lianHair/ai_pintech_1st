import { CSSProperties } from "react";

// 카드 위에꺼 - 세번째 내용 2
export type ReviewsProps = {
  reviews: number;
};

const Reviews = (props: ReviewsProps) => {
  const reviewsStyle: CSSProperties = {
    color: "red",
    fontSize: "12px",
    fontWeight: "bold",
    lineHeight: "20px",
    paddingRight: "5px",
  };

  return <span style={reviewsStyle}>{props.reviews}</span>;
};

export default Reviews;
