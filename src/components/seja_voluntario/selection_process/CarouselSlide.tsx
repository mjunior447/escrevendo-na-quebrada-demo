import Button from "@/components/Button";

export interface CarouselSlideProps {
  carouselTitle: string;
  jobTitle: string;
  jobLocation: string;
  jobDescription: string;
  jobActivities: string;
}

const CarouselSlide = ({
  carouselTitle,
  jobTitle,
  jobLocation,
  jobDescription,
  jobActivities,
}:
  CarouselSlideProps) => {
  return (
    <div className="embla__slide grow-0 shrink-0 basis-[100%] sm:basis-[55%] pl-1 h-full">
      <div className="embla__slide__content rounded-[1.8rem] flex flex-col justify-between select-none backface-hidden p-12 bg-roxo-escuro/20 h-full">
        <h3 className="text-lg font-bold">{carouselTitle}</h3>
        <div className="flex flex-col gap-3">
          <h4 className="leading-[1.2] text-xs">
            <span className="font-bold">Vaga</span>: {jobTitle}
          </h4>
          <p className="leading-[1.2] text-xs">
            <span className="font-bold">Local</span>: {jobLocation}
          </p>
          <p className="leading-[1.2] text-xs">
            <span className="font-bold">Descrição</span>: {jobDescription}
          </p>
          <p className="leading-[1.2] text-xs">
            <span className="font-bold">Atividades</span>: {jobActivities}
          </p>
        </div>
        <Button
          colorVariant="outlinedDeepPurple"
          className="py-3 text-sm font-semibold shadow-none"
        >
          Candidate-se
        </Button>
      </div>
    </div>
  );
};

export default CarouselSlide;
