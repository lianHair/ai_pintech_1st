import Card from "./Card";
import { centerList } from "./data";

// Data 합치기
const DagymLayout = () => {
  return (
    <main style={{ width: "100vw" }}>
      <section style={{ width: "100%", maxWidth: "1000px", margin: "0 auto" }}>
        {centerList.map((v) => (
          <Card
            image={v.gymPhotoSmall}
            gymName={v.gymName}
            address={v.address}
            price={v.price.lowestPrice / (v.price.period || 12)}
            starRate={v.review.rate}
            reviews={v.review.count}
            text={"프리미엄 회원"}
            categories={v.tags.join("")}
            services={v.service.free}
          />
        ))}
      </section>
    </main>
  );
};

export default DagymLayout;
