import { BsChatRightText } from "react-icons/bs";
import { CiMedal } from "react-icons/ci";
import { IoMdGlobe } from "react-icons/io";
import { TbWriting } from "react-icons/tb";
import Card from "./Card";

const CARD_CONTENT = [
  {
    title: "Escrita como prática social e autoral",
    description: 'Desenvolvimento das competências da redação do ENEM, integrando norma padrão, argumentação, autoria e ampliação de repertório com vistas ao desenvolvimento de repertórios LPP (Legítimos, Pertinentes e Produtivos).',
    icon: <div className="bg-azul-claro/42 text-ciano text-5xl inline-block rounded-2xl p-6"><TbWriting /></div>,
  },
  {
    title: "Escrever, reescrever e argumentar",
    description: 'A escrita é trabalhada como prática discursiva e social, com acompanhamento contínuo, devolutivas e reescritas orientadas.',
    icon: <div className="bg-azul-claro/42 text-ciano text-5xl inline-block rounded-2xl p-6"><BsChatRightText /></div>,
  },
  {
    title: "Aprender para além da sala de aula",
    description: 'Saídas pedagógicas e experiências culturais que ampliam repertório, fortalecem a leitura de mundo e conectam a escrita aos projetos de vida.',
    icon: <div className="bg-azul-claro/42 text-ciano text-5xl inline-block rounded-2xl p-6"><IoMdGlobe /></div>,
  },
  {
    title: "Formação integral",
    description: 'Espaço de acolhimento e construção coletiva, promovendo o desenvolvimento acadêmico, social e emocional.',
    icon: <div className="bg-azul-claro/42 text-ciano text-6xl inline-block rounded-2xl p-5"><CiMedal /></div>,
  },
]

const CardsSection = () => {
  return (
    <section className="w-screen mt-40 md:mt-0">
      <div className="w-full mx-auto max-w-7xl px-6 py-30">
        <h2 className="font-bold text-4xl lg:text-6xl mb-8">Nossa <span className="text-ciano">proposta pedagógica</span></h2>
        <p className="font-normal md:text-xl leading-6 tracking-normal text-preto1 mb-12">
          Formação em escrita e leitura crítica a partir da escrevivência,
          articulando as vivências da periferia com a preparação para o vestibular.
        </p>
        <div className="flex flex-wrap justify-center py-8 gap-4">
          {CARD_CONTENT.map((card) => (
            <Card key={card.title}>
              <div className="mb-8">{card.icon}</div>
              <h3 className="font-bold mb-6">{card.title}</h3>
              <p>{card.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardsSection;
