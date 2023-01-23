import ThisWhy from "../../molecules/ThisWhy";

export default function WhyUs() {
    return (
        <section id="whyus" className="feature pt-50 pb-50 mt-5">
            <div className="container-fluid">
                <h2 className="text-4xl fw-bold color-palette-1 text-center mb-30">
                    Kenapa Pilih
                    <br />{" "}
                    <span className="text-primary">
                        Partner's Hub Indonesia ?
                    </span>
                </h2>
                <div className="row gap-lg-0 gap-4" data-aos="fade-up">
                    <ThisWhy icon="why1" title="Proses Mudah dan Cepat" />
                    <ThisWhy icon="why2" title="Seluruh Indonesia" />
                    <ThisWhy icon="why3" title="Harga Kompetitif" />
                    <ThisWhy icon="why4" title="Banyak Benefitnya" />
                    <ThisWhy icon="why5" title="Keamanan Dokumen Terjamin" />
                    <ThisWhy icon="why6" title="All In One Service" />
                </div>
            </div>
        </section>
    );
}
