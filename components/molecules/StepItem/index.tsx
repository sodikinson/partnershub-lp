import Image from "next/image";

interface StepItemProps {
    icon: "step1" | "step2" | "step3" | "step4";
    title: string;
    instruction: string;
    description: string;
    step: number;
}

export default function StepItem(props: StepItemProps) {
    const { icon, title, instruction, description, step } = props;
    return (
        <div className="col-lg-3">
            <div className="card feature-card border-0">
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
                <p className="text-lg color-palette-1 mb-0 text-wrap">
                    {instruction}
                    <br />
                    {description}
                </p>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {step}
                    <span className="visually-hidden">unread messages</span>
                </span>
            </div>
        </div>
    );
}
