import Image from "next/image";
import Link from "next/link";

export default function CompleteCheckout() {
    return (
        <section className="complete-checkout mx-auto pt-lg-145 pb-lg-145 pt-100 pb-80">
            <div className="container-fluid">
                <div className="text-center">
                    <Image
                        className="thumbnail p-1"
                        src="/img/promo1.jpeg"
                        width={350}
                        height={350}
                        alt=""
                    />
                    <Image
                        className="thumbnail p-1"
                        src="/img/promo2.jpeg"
                        width={350}
                        height={350}
                        alt=""
                    />
                    <Image
                        className="thumbnail p-1"
                        src="/img/promo3.jpeg"
                        width={350}
                        height={350}
                        alt=""
                    />
                    <Image
                        className="thumbnail p-1"
                        src="/img/promo4.jpeg"
                        width={350}
                        height={350}
                        alt=""
                    />
                    <Image
                        className="thumbnail p-1"
                        src="/img/promo5.jpeg"
                        width={350}
                        height={350}
                        alt=""
                    />
                    <Image
                        className="thumbnail p-1"
                        src="/img/promo6.jpeg"
                        width={350}
                        height={350}
                        alt=""
                    />
                </div>
                <div className="pt-70 pb-50">
                    <h2 className="text-4xl fw-bold text-center color-palette-1 mb-10">
                        #LevelUpYourBusiness 📈📈📈
                    </h2>
                    <p className="text-lg text-center color-palette-1 m-0">
                        Untuk membantu kamu dalam impian dan tercapainya goals
                        bisnis kamu,
                        <br className="d-sm-block d-none" /> partnershub kasih
                        spesial price supaya kamu tidak perlu lagi keluar banyak
                        biaya.
                    </p>
                </div>
                <div className="button-group d-flex flex-column mx-auto">
                    <a
                        className="btn btn-dashboard fw-medium text-lg text-white rounded-pill mb-16"
                        href="https://api.whatsapp.com/send?phone=6281213354221&text=%F0%9F%A7%A7%20%F0%9F%A5%AE%20%20Halo%20Admin%20Cindy%2C%0ABoleh%20aku%20minta%20info%20terkait%20promo%20imleknya%20%3F"
                        target="_blank"
                        role="button"
                        rel="noreferrer"
                    >
                        WhatsApp ke Admin
                    </a>
                    <Link
                        className="btn btn-whatsapp fw-medium text-lg color-palette-1 rounded-pill"
                        href="/"
                        role="button"
                    >
                        Kembali
                    </Link>
                </div>
            </div>
        </section>
    );
}
