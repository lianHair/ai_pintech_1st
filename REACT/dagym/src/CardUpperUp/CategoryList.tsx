import { CSSProperties } from "react";

// 카드 위에꺼 - 첫번째 내용
export type CategoryListProps = {
  categories: string;
};

const CategoryList = (props: CategoryListProps) => {
  const categoryStyle: CSSProperties = {
    color: "pink",
    fontSize: "12px",
    fontWeight: "bold",
    lineHeight: "20px",
  };

  return <span style={categoryStyle}>{props.categories}</span>;
};

export default CategoryList;
