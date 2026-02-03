import Button from "@/components/Button";
import { FaPeopleGroup } from "react-icons/fa6";
import { PiHandHeartFill } from "react-icons/pi";
import Badge from "./Badge";
import StackedCards from "./StackedCards";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="w-screen flex items-center justify-center px-6 md:px-12 py-16 text-white">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 py-6 justify-center gap-20">
        <div className="flex-1">
          <div className="mb-6">
            <Badge applicationSeason="open">Inscrições abertas</Badge>
            <h1 className="font-bold text-4xl lg:text-6xl leading-tight tracking-normal text-preto1 mt-4">
              Escrevendo {' '}
              <br /><span className="text-ciano">na Quebrada</span>
            </h1>
          </div>
          <div className="mb-12">
            <p className="m-0 font-normal md:text-xl leading-6 tracking-normal text-preto1">
              Iniciativa educacional que utiliza a escrita e a literatura
              como ferramentas de expressão e fortalecimento do pensamento crítico.
              Vem ampliar seu repertório, desenvolver sua escrita e fortalecer sua habilidade de leitura e reflexão.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href='#editaiseinscricoes' className="w-full">
              <Button colorVariant="ciano" className="py-2 max-w-sm uppercase text-sm md:text-base">
                Inscreva-se
              </Button>

            </Link>
            <Button colorVariant="outlinedLightBlue" className="py-2 max-w-sm uppercase border-1 text-sm md:text-base">
              Saiba mais
            </Button>
          </div>
          <div className="flex justify-start items-center gap-12 text-preto1 md:text-xl mt-12">
            <p className="font-normal"><FaPeopleGroup className="inline text-2xl text-ciano mr-1" /> +2000 cidadãos impactados</p>
            <p className="font-normal"><PiHandHeartFill className="inline text-2xl text-ciano mr-1" /> 100% gratuito</p>
          </div>
        </div>

        <div className="flex-1 h-100 w-100">
          <StackedCards />
        </div>
      </div>
    </section>
  );
};

export default Hero;
