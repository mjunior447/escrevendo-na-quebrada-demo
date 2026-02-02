'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import Button from "../Button";
import CollapsibleMenuItem from "./CollapsibleMenuItem";

const HeaderMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {
        isMenuOpen ? (
          <>
            <nav className="lg:hidden flex flex-col fixed top-0 right-0 bottom-0 bg-white p-4 z-50 overflow-auto">
              <div
                onClick={() => setIsMenuOpen(false)}
                className="max-w-fit p-2 self-end hover:bg-cinza transition-colors z-50">
                <IoMdClose />
              </div>
              <div className="flex gap-2 p-4 pl-0">
                <div>
                  <Link href={"/"}>
                    <Image
                      alt="logo"
                      src={"/img/logo.png"}
                      width={48}
                      height={48}
                      onClick={() => { }}
                    />
                  </Link>
                </div>
                <div className="flex justify-center items-center">
                  <h3
                    className={`text-roxo-escuro font-bold text-xs w-full`}
                  >
                    Escrevendo na Quebrada
                  </h3>
                </div>
              </div>
              <ul>
                <CollapsibleMenuItem label="Home" href={'/'} />
                <CollapsibleMenuItem label="Sobre" items={
                  [
                    {
                      label: 'Como funciona',
                      href: '/#como_funciona',
                    },
                    {
                      label: 'Transparência',
                      href: '',
                      disabled: true
                    }
                  ]
                } />
                <CollapsibleMenuItem label="Participe" items={
                  [
                    {
                      label: 'Seja Aluno',
                      href: '/inscricoes'
                    },
                    {
                      label: 'Seja Voluntário',
                      href: '/seja_voluntario',
                    },
                    {
                      label: 'Inscrições',
                      href: '/inscricoes',
                    }
                  ]
                } />
                <CollapsibleMenuItem label="Ajuda" items={
                  [
                    {
                      label: 'FAQ',
                      href: '/#faq',
                    },
                  ]
                } />
              </ul>
              <div className="mt-10">
                <Link
                  target="_blank"
                  href={" https://www.paraquemdoar.com.br/escrevendo-na-quebrada "}
                >
                  <Button colorVariant="ciano" className="rounded-md px-8 py-2">
                    DOE
                  </Button>
                </Link>
              </div>
            </nav>
            <div className="fixed top-0 left-0 right-0 bottom-0 bg-preto1/50 z-49 transition-colors" onClick={() => setIsMenuOpen(false)}></div> {/* backdrop com fundo preto ao abrir menu */}
          </>
        )
          : (
            <div
              className="block lg:hidden absolute top-4 right-4 p-3 hover:bg-cinza transition-colors z-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <IoMdMenu />
            </div>
          )
      }
    </>
  );
}

export default HeaderMobile;
