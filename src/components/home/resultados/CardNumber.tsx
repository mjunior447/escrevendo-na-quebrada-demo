import Button from "@/components/Button";
import CounterNumber from "./CounterNumber";
import Link from "next/link";

const CardNumber = () => {
  return (
    <div className="relative bg-azul-escuro w-full lg:p-20 p-12 rounded-4xl">
      <div className="flex flex-col md:flex-row gap-10 md:max-lg:gap-10 lg:gap-0 justify-around text-white ">
        <div className="flex flex-col lg:flex-row gap-10 md:gap-20">
          <div className="flex flex-col items-center">
            <h3 className="text-2xl md:text-4xl font-bold">
              <CounterNumber to={845} />
            </h3>
            <p className="text-center text-sm sm:text-base">
              Média das redações
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-2xl md:text-4xl font-bold">
              <CounterNumber to={2000} plus />
            </h3>
            <p className="text-center text-sm sm:text-base">
              Estudantes impactados
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 md:gap-20">
          <div className="flex flex-col items-center">
            <h3 className="text-2xl md:text-4xl font-bold">
              <CounterNumber to={95} percent />
            </h3>
            <p className="text-center text-sm sm:text-base">
              Aprovação dos alunos
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-2xl md:text-4xl font-bold">
              <CounterNumber to={750} plus />
            </h3>
            <p className="text-center text-sm sm:text-base">
              Alunos matriculados
            </p>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-10 sm:-bottom-6 left-1/2 -translate-x-1/2 w-[15rem] sm:w-[17rem] md:w-[30rem] lg:w-[36.875rem]">
        <Link href={'#faq'}>
          <Button className="py-3 text-sm md:text-base" colorVariant="ciano">
            VEJA MAIS SOBRE NOSSAS CONQUISTAS
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CardNumber;
