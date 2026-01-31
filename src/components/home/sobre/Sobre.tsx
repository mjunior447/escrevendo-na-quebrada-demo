import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";

const Sobre = () => {
  return (
    <section className="flex flex-col gap-12 md:gap-16 lg:flex-row justify-center lg:justify-evenly items-center w-full min-h-fit py-10 md:py-16 px-6">
      <div className="flex flex-col gap-5 w-full lg:max-w-xl md:max-lg:text-center lg:self-start">
        <h1 className="font-bold text-xl lg:text-2xl">
          Escrevendo novos caminhos através da educação
        </h1>
        <div className="max-sm:w-[80%] lg:hidden flex mx-auto my-4 sm:max-lg:w-[50%]">
          <Image
            alt=""
            src="/img/home/sobre/imagem-secao-sobre.png"
            width={400}
            height={400}
          />
        </div>
        <div className="text-sm/6">
          <p className="text-justify">
            O Escrevendo na Quebrada é mais do que um cursinho gratuito — é um
            cursinho popular que fortalece jovens periféricos por meio da
            educação e do acesso à cultura. Acreditamos na escrita como
            ferramenta de transformação e protagonismo. Somos uma iniciativa sem
            fins lucrativos, construída de forma colaborativa por voluntários de
            diversas áreas, comprometidos com a educação pública, o direito à
            universidade e a democratização do conhecimento.
          </p>
          <p className="pt-6 text-justify">
            <b>Vencedor do prêmio LED em 2025</b>, o EQ é movido por uma rede
            que acredita no potencial de cada estudante e trabalha para
            ampliá-lo por meio da educação e da cultura.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-6">
          <Link href="#faq" className="md:max-lg:self-center lg:w-1/2">
            <Button className="w-full md:max-lg:w-lg lg:w-full text-sm mt-3 py-2 lg:py-1">
              Saiba mais
            </Button>
          </Link>
          <Link className="md:max-lg:self-center lg:w-1/2" href={' https://www.paraquemdoar.com.br/escrevendo-na-quebrada '}>
            <Button
              colorVariant="ciano"
              className="w-full md:max-lg:w-lg lg:w-full text-sm mt-3 py-2 lg:py-1"
            >
              faça uma doação
            </Button>
          </Link>
        </div>
      </div>
      <div className="hidden lg:flex w-full">
        <Image
          alt=""
          src="/img/home/sobre/imagem-secao-sobre.png"
          width={420}
          height={420}
        />
      </div>
    </section>
  );
};

export default Sobre;
