import Image from "next/image";
import Link from "next/link";

interface GameItemProps {
  icon: "promo1" | "promo2" | "promo3" | "promo4";
}

export default function GameItem(props: GameItemProps) {
  const { icon } = props;
  return (
    <div className="featured-game-card position-relative">
      <Link href="/complete-checkout">
        <div className="blur-sharp">
          <Image
            className="thumbnail"
            src={`/img/${icon}.png`}
            width={300}
            height={300}
            alt="update price"
          />
        </div>
        <div className="cover position-absolute bottom-0 m-32">
          <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
            <div>
              <p className="fw-semibold text-white text-xl m-0">
                Promo terbatas !
              </p>
              <p className="fw-light text-white m-0">Pesan sekarang</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
