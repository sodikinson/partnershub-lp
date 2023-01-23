import StepItem from "../../molecules/StepItem";

export default function TransactionStep() {
    return (
        <section id="feature" className="feature pt-50 pb-50">
            <div className="container-fluid">
                <h2 className="text-4xl fw-bold color-palette-1 text-center mb-30">
                    This is
                    <br /> How It's Done
                </h2>
                <div className="row gap-lg-0 gap-4" data-aos="fade-up">
                    <StepItem
                        icon="step1"
                        step={1}
                        title="Discussions"
                        instruction="Konsultasikan kepada Partners Hub Indonesia"
                        description="(cukup isi FORM dibawah dan tunggu kami menghubungi kamu)"
                    />
                    <StepItem
                        icon="step2"
                        step={2}
                        title="Start"
                        instruction="Pengumpulan"
                        description="Dokumen"
                    />
                    <StepItem
                        icon="step3"
                        step={3}
                        title="Fill Up"
                        instruction="Pengurusan oleh tim legal"
                        description="Partners Hub Indonesia"
                    />
                    <StepItem
                        icon="step4"
                        step={4}
                        title="Done"
                        instruction="Tunggu di rumah sampai selesai,"
                        description="nanti team Partners Hub Indonesia kirim dokumennya 😄"
                    />
                </div>
            </div>
        </section>
    );
}
