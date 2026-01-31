import CardsSection from "@/components/inscricoes/cards_section/CardsSection";
import Hero from "@/components/inscricoes/hero/Hero";
import NoticesSection from "@/components/inscricoes/notices_section/NoticesSection";

const Inscricoes = () => {
  return (
    <main className="flex flex-col gap-4 items-center overflow-x-hidden">
      <div className="flex flex-col items-center w-screen h-full max-w-[1440px] text-preto1">
        <Hero />
        <CardsSection />
        <NoticesSection />
      </div>
    </main>
  );
};

export default Inscricoes;
