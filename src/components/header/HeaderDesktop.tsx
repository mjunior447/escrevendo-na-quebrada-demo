import Image from "next/image";
import Link from "next/link";
import Button from "../Button";
import CollapsibleMenuItem from "./CollapsibleMenuItem";

const HeaderDesktop = () => {
  return (
    <nav className="hidden lg:flex justify-between items-center max-w-7xl mx-auto">
      <div className="flex gap-2">
        <div>
          <Link href={"/"}>
            <Image
              alt="logo"
              src={"/img/logo.png"}
              width={56}
              height={56}
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
      <ul className="flex gap-8">
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
    </nav>
  )
}

export default HeaderDesktop;