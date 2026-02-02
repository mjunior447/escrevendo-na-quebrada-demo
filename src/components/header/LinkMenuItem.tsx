import Link from "next/link";

interface LinkMenuItemProps {
    children: React.ReactNode;
    href?: string;
    onClick?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}

const LinkMenuItem = ({ children, href, onMouseEnter, onMouseLeave, onClick }: LinkMenuItemProps) => {
    return (
        href ? (
            <Link href={href} className="">
                <div
                    className="pl-0 lg:pl-4 p-4 py-2 cursor-pointer relative rounded-4xl transition-colors duration-200 z-50"
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    onClick={onClick}
                >
                    {children}
                </div>
            </Link>
        ) : (
            <div
                className="pl-0 lg:pl-4 py-2 cursor-pointer relative rounded-4xl transition-colors duration-200 z-50"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onClick={onClick}
            >
                {children}
            </div>
        )
    );
}

export default LinkMenuItem;
