import Button from "@/components/Button";
import ContactCard from "./ContactCard";
import Link from "next/link";

const Contato = () => {
  return (
    <section className="flex justify-center items-center min-w-screen bg-cinza">
      <div className="flex flex-col gap-12 lg:gap-40 justify-center items-center max-w-[1440px] py-30 md:py-50 px-6">
        <div className="flex flex-col items-center lg:flex-row-reverse gap-12 lg:gap-20">
          <div className="flex flex-col gap-4 text-preto1 w-full max-w-lg">
            <h2 className="text-preto1/70 text-xl">Contate-nos</h2>
            <h3 className="text-2xl font-bold">
              Dúvidas? Entre em contato com nossa equipe!
            </h3>
            <p className="text-md">
              Tire suas dúvidas sobre as aulas, voluntariado, funcionamento ou
              qualquer outro assunto! Nosso time está pronto para te receber de
              braços abertos.
            </p>
            <Link
              href="https://wa.me/5511945369641?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20projeto!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="max-h-16 max-w-[16rem] rounded-[0.8rem] py-3 shadow-xs/80 shadow-preto1 text-sm">
                Vamos conversar!
              </Button>
            </Link>
          </div>

          <ContactCard />
        </div>
      </div>
    </section>
  );
};

export default Contato;
