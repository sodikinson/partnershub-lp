import Image from "next/image";
import Link from "next/link";

export default function GameItem() {
    return (
        <div className="featured-game-card position-relative">
            <Link href="/complete-checkout">
                <div className="blur-sharp">
                    <Image
                        className="thumbnail"
                        src="/img/promo1.jpeg"
                        width={300}
                        height={300}
                        alt=""
                    />
                </div>
                <div className="cover position-absolute bottom-0 m-32">
                    <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
                        <div>
                            <p className="fw-semibold text-white text-xl m-0">
                                Promo terbatas !
                            </p>
                            <p className="fw-light text-white m-0">
                                Pesan sekarang
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}
