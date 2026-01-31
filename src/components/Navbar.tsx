"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import Button from "./Button";

const Navbar = () => {
  const [activeMenuItem, setActiveMenuItem] = useState("");
  const [activeSandwichMenu, setActiveSandwichMenu] = useState(false);
  const [isTransparent, setIsTransparent] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveMenuItem(entry.target.id);
          }
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.6,
      }
    );
    sections.forEach((section) => observer.observe(section));
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const pathname = usePathname();

  const handleToggleMenu = () => {
    setActiveSandwichMenu(!activeSandwichMenu);
  };

  useEffect(() => {
    if (pathname.includes("/sobre")) {
      setActiveMenuItem("SOBRE");
    } else if (pathname.includes("/como_funciona")) {
      setActiveMenuItem("COMO FUNCIONA");
    } else if (pathname.includes("/seja_aluno")) {
      setActiveMenuItem("SEJA ALUNO");
    } else if (pathname.includes("/seja_voluntario")) {
      setActiveMenuItem("SEJA VOLUNTARIO");
    } else if (pathname.includes("/nossos_resultados")) {
      setActiveMenuItem("NOSSOS RESULTADOS");
    } else if (pathname.includes("/contato")) {
      setActiveMenuItem("CONTATO");
    } else {
      setActiveMenuItem("HOME");
    }

    if (pathname === "/seja_voluntario/") {
      setIsTransparent(() => true);
    } else {
      setIsTransparent(() => false);
    }
  }, [pathname]);

  const menuItens = [
    { label: "HOME", path: "#sobre" },
    { label: "COMO FUNCIONA", path: "#como_funciona" },
    { label: "SEJA ALUNO", path: "#seja_aluno" },
    { label: "SEJA VOLUNTARIO", path: "#seja_voluntario" },
    { label: "NOSSOS RESULTADOS", path: "#nossos_resultados" },
    { label: "CONTATO", path: "#contato" },
  ];
  return (
    <nav
      id="navbar"
      className={`${isTransparent && "h-0"} px-6 relative z-30 bg-transparent`}
    >
      <div className="flex gap-5 items-center justify-between mx-auto w-full max-w-[1440px] py-5">
        <div className="flex gap-2">
          <div>
            <Link href={"/"}>
              <Image
                alt="logo"
                src={isTransparent ? "/img/logo-white.png" : "/img/logo.png"}
                width={56}
                height={56}
                onClick={() => setActiveMenuItem("Home")}
              />
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <h3
              className={`${
                isTransparent ? "text-white1" : "text-roxo-escuro"
              } font-bold text-xs w-full`}
            >
              Escrevendo na Quebrada
            </h3>
          </div>
        </div>

        <div className="absolute right-2 top-8 lg:hidden cursor-pointer p-2">
          {!activeSandwichMenu && (
            <FiMenu
              size={20}
              onClick={handleToggleMenu}
              className={`${isTransparent ? "text-white1" : "text-preto1"} `}
            />
          )}
        </div>

        <div
          className={`fixed top-0 right-0 w-[80%] sm:w-[40%] overflow-y-auto bg-black h-full pt-5 text-white transition-transform duration-300 ease-in-out ${
            activeSandwichMenu ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end pr-6">
            <IoMdClose
              className="cursor-pointer"
              size={20}
              onClick={handleToggleMenu}
            />
          </div>
          <ul className="flex flex-col gap-8 mt-8 ml-10 font-semibold">
            {menuItens.map((item) => (
              <li
                className="flex flex-col gap-5"
                key={item.label}
                onClick={() => {
                  setActiveMenuItem(item.label);
                  setActiveSandwichMenu(false);
                }}
              >
                <Link
                  href={item.path}
                  className={`${
                    activeMenuItem === item.path.replace("#", "")
                      ? "bg-roxo w-fit text-white rounded-full px-2 py-1"
                      : "text-white"
                  } hover:bg-roxo hover:text-white hover:rounded-full px-2 py-1 text-sm`}
                >
                  {item.label}
                </Link>

                <hr className="border-gray-700 opacity-70" />
              </li>
            ))}
          </ul>
          <div className="p-10">
            <Link
              target="_blank"
              href={" https://www.paraquemdoar.com.br/escrevendo-na-quebrada "}
            >
              <Button colorVariant="ciano" className="rounded-md px-8 py-2">
                DOE
              </Button>
            </Link>
          </div>
        </div>

        <div className="hidden lg:flex gap-10">
          <ul className="flex items-center gap-3 font-semibold text-base">
            {menuItens.map((item) => (
              <li
                key={item.label}
                onClick={() => setActiveMenuItem(item.label)}
              >
                <Link
                  href={item.path}
                  className={`px-4 py-2 ${
                    activeMenuItem === item.path.replace("#", "")
                      ? "bg-roxo text-white rounded-full "
                      : "text-black"
                  } ${
                    isTransparent && "text-white1"
                  } hover:bg-roxo hover:text-white hover:rounded-full text-xs`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link
          target="_blank"
          href={" https://www.paraquemdoar.com.br/escrevendo-na-quebrada "}
        >
          <Button
            colorVariant="ciano"
            className="rounded-md px-8 py-2 text-sm hidden lg:inline"
          >
            DOE
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
