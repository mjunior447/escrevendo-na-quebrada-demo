import Button from "@/components/Button";
import CardHero from "@/components/seja_voluntario/hero/CardHero";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="min-h-[calc(100vh-97px)] w-screen flex items-center justify-center px-6 md:px-12 py-16 text-white bg-center bg-cover bg-[url(/img/seja_voluntario/hero/bg-hero-seja-voluntario.png)]">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 py-6 pt-[6rem] justify-center gap-20">
        <div className="flex-1">
          <div className="mb-6">
            <h1 className="font-bold text-3xl leading-tight tracking-normal text-white1 text-shadow-lg/30">
              Quer ser voluntário no
              <br /> Escrevendo na Quebrada?
            </h1>
          </div>
          <div className="mb-6">
            <p className="m-0 font-inter font-light text-xl leading-6 tracking-normal text-white1 text-shadow-lg/50">
              Vem fazer a diferença com a gente! O Escrevendo na Quebrada está
              com vagas abertas para voluntários. Se você acredita no poder da
              educação e quer transformar vidas por meio dos estudos, cola com
              nós! Bora fortalecer a quebrada juntos.
            </p>
          </div>
          <div>
            <Link href="https://forms.gle/mT66dE8CsiH14zh26" target="_blank">
              <Button className="bg-roxo-escuro/60 py-4 max-w-sm uppercase">
                Faça sua inscrição agora!
              </Button>
            </Link>
          </div>
        </div>

        <div className="flex-1">
          <CardHero />
        </div>
      </div>
    </section>
  );
};

export default Hero;
