import Link from "next/link";
import Button from "../../Button";
import Card from "./Card";
import { cardComoFuncionaData } from "@/data/data";

const ComoFunciona = () => {
  return (
    <section className="flex flex-col items-center w-screen bg-cinza">
      <div className="flex flex-col gap-16 items-center w-full py-16 px-6 max-w-[1440px] text-center">
        <div className="text-center">
          <h2 className="text-lg md:text-lg font-bold mb-5 md:mb-0">
            Como Funciona
          </h2>
          <h3 className="text-base mt-4">
            O Escrevendo na Quebrada promove aulas de escrita e redação com foco
            em vestibulares através de quatro tarefas:
          </h3>
        </div>
        <div className="flex flex-col  items-center flex-wrap lg:flex-nowrap sm:flex-row gap-16 justify-center w-full">
          {cardComoFuncionaData.map((item) => (
            <div
              key={item.id}
              className={`${
                item.id === 1 ? "border-l border-gray-200 lg:pl-16" : ""
              } border-r border-gray-200 lg:pr-16`}
            >
              <Card
                alt={item.alt}
                img={item.img}
                text={item.text}
                title={item.title}
              />
            </div>
          ))}
        </div>
        <div>
          <p className="text-base text-center lg:w-[976px]">
            Vem conhecer o Escrevendo na Quebrada: um projeto gratuito, com
            alimentação nas aulas, tablets, materiais didáticos, taxa de vestibular e acompanhamento psicológico para te
            apoiar em cada passo!
          </p>
          <div className="flex justify-center w-full md:w-[710px] mx-auto mt-16">
            <Link className="w-full" href="#faq">
              <Button className="text-sm p-2 max-w-lg">
                entenda como funciona
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComoFunciona;
