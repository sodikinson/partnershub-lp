import cx from "classnames";
import Link from "next/link";

interface MenuProps {
    title: string;
    href: string;
    active?: boolean;
}

export default function Menu(props: Partial<MenuProps>) {
    const { title, href = "/", active } = props;
    const classTitle = cx({
        "nav-link": true,
        active: active,
    });

    return (
        <li className="nav-item my-auto">
            <Link href={href} className={classTitle} aria-current="page">
                {title}
            </Link>
        </li>
    );
}
