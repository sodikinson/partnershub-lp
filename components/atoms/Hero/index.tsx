import Image from "next/image";

export default function Hero() {
    return (
        <section>
            <div className="px-4 py-5 my-5 text-center">
                <Image
                    className="d-block mx-auto mb-4"
                    src="/img/bannerhub2.png"
                    alt="Partners Hub Indonesia"
                    width="380"
                    height="200"
                />
                <h1 className="display-5 fw-bold">#LevelUpYourBusiness</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">
                        Jaman sekarang yang serba cepat, apapun bisa kita
                        lakukan dengan mudah, termasuk mengurus legalitas,
                        keuangan, pajak dari mana saja dan kapan sana. Partners
                        Hub Indonesia menawarkan solusi kemudahan dalam urusan
                        administrasi bisnis anda, sehingga anda bisa lebih fokus
                        dengan strategi dan peningkatan omses bisnis anda.
                    </p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <a
                            href="https://wa.link/urqzxj"
                            type="button"
                            target="_blank"
                            className="btn btn-primary btn-lg px-4 gap-3"
                            rel="noreferrer"
                        >
                            Kontak
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
