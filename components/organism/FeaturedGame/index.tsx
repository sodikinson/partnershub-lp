import GameItem from "../../molecules/GameItem";

export default function FeaturedGame() {
  return (
    <section className="featured-game mt-5 pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 text-danger mb-30">
          Updated 2.2
        </h2>
        <div
          className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
          data-aos="fade-up"
        >
          <GameItem icon="promo1" />
          <GameItem icon="promo2" />
          <GameItem icon="promo3" />
          <GameItem icon="promo4" />
          <GameItem icon="promo5" />
          <GameItem icon="promo6" />
          <GameItem icon="promo7" />
        </div>
      </div>
    </section>
  );
}
