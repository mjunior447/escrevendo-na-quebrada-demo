import NoticesSwitch from "./notice_switch/NoticeSwitch";

const NoticesSection = () => {
  return (
    <section className="w-screen" id="editaiseinscricoes">
      <div className="w-full mx-auto max-w-7xl px-6 pb-12">
        <h2 className="font-bold text-4xl lg:text-6xl mb-8">Editais e Inscrições</h2>
        <p className="font-normal md:text-xl leading-6 tracking-normal text-preto1 mb-12">
          Confira os processos seletivos disponíveis e inscreva-se para nossas turmas de estudantes.
        </p>
        <NoticesSwitch />
      </div>
    </section>
  );
};

export default NoticesSection;
