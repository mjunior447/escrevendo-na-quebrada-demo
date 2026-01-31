import Card from "./Card";
import { TbWriting } from "react-icons/tb";
import { GiCapitol } from "react-icons/gi";
import { HiMiniArrowLongRight } from "react-icons/hi2";

const StackedCards = () => {
  return (
    <div className="relative">
      <Card className="top-2 left-28 z-20 rotate-10">
        <div className="flex justify-start items-center">
          <div className="flex flex-1 justify-center items-center">
            <div className="bg-azul-claro text-white rounded-full p-3">
              <TbWriting className="text-2xl" />
            </div>
          </div>
          <div className="flex-3">
            <h6 className="font-bold">Aulas de Redação</h6>
            <p className="text-sm">Foco no ENEM</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-3">
          <div className="bg-white1 rounded-4xl w-full h-3"></div>
          <div className="bg-white1 rounded-4xl w-4/5 h-3"></div>
          <div className="bg-white1 rounded-4xl w-11/12 h-3"></div>
        </div>
      </Card>
      <Card colorVariant="blue" className="relative top-29 left-8 z-30 rotate-6">
        <div className="p-2">
          <h6 className="font-bold">Próximas Turmas</h6>
          <p className="text-sm">Fevereiro de 2026</p>
          <div className="absolute bottom-4 right-5 bg-azul-claro p-2 rounded-full">
            <HiMiniArrowLongRight className="text-2xl" />
          </div>
        </div>
      </Card>
      <Card className="top-62 left-0 z-10 -rotate-8">
        <div className="flex justify-start items-center">
          <div className="flex flex-1 justify-center items-center">
            <div className="bg-azul-claro text-white rounded-full p-3">
              <GiCapitol className="text-2xl" />
            </div>
          </div>
          <div className="flex-3">
            <h6 className="font-bold">Encontros Culturais</h6>
            <p className="text-sm">Visitas ao Museu</p>
          </div>
        </div>
        <div className="mt-5">
          <p className="inline-block bg-azul-claro/42 border-1 border-white p-2 rounded-full px-4">A</p>
          <p className="inline-block -ml-2 bg-azul-claro/42 border-1 border-white p-2 rounded-full px-4">B</p>
          <p className="inline-block -ml-2 bg-azul-claro/42 border-1 border-white p-2 rounded-full px-4">C</p>
          <p className="inline-block -ml-2 bg-azul-claro/42 border-1 border-white p-2 rounded-full px-4">D</p>
          <p className="inline-block text-xs">+12 participantes</p>
        </div>
      </Card>
    </div>
  );
};

export default StackedCards;
