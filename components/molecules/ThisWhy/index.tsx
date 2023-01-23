import Image from "next/image";

interface ThisWhyProps {
    icon: "why1" | "why2" | "why3" | "why4" | "why5" | "why6";
    title: string;
}

export default function ThisWhy(props: ThisWhyProps) {
    const { icon, title } = props;
    return (
        <div className="col-lg-4">
            <div className="card feature-card mb-4 border-0">
                <Image
                    src={`/img/${icon}.png`}
                    alt="stepper step icon"
                    width={200}
                    height={200}
                    style={{ objectFit: "contain" }}
                />
                <p className="fw-semibold text-2xl mb-2 color-palette-1">
                    {title}
                </p>
            </div>
        </div>
    );
}
