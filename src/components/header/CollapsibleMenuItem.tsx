import Link from "next/link";
import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import LinkMenuItem from "./LinkMenuItem";

type CollapsibleItem = {
  label: string;
  href: string;
  disabled?: boolean;
}

interface CollapsibleProps {
  label: string;
  items?: CollapsibleItem[];
  href?: string;
}

const CollapsibleMenuItem = ({ label, items, href }: CollapsibleProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <LinkMenuItem
      href={href}
      onClick={() => setIsOpen(!isOpen)}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="flex justify-between items-center hover:bg-cinza rounded-xl p-4 py-2">
        {label}
        {!href && <IoChevronDown className={`inline ml-2 text-xs ${isOpen ? "rotate-180" : ""} transition-transform duration-200`} />}
      </div>
      {
        items && items?.length > 0 &&
        (
          <>
            {
              isOpen && (
                <div className="flex flex-col lg:absolute lg:top-12 lg:w-60 bg-white rounded-md lg:shadow-md lg:border-1 lg:border-cinza p-2 gap-2">
                  {items.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={`${item.disabled && "opacity-50 cursor-not-allowed"} hover:bg-cinza rounded-xl p-4 py-3`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )
            }
          </>
        )
      }
    </LinkMenuItem>
  );
}

export default CollapsibleMenuItem;