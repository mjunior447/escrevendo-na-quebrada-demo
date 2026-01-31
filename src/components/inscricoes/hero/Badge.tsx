interface BadgeProps {
  applicationSeason: 'open' | 'closed' | 'soon';
  children: string;
}

const Badge = ({ applicationSeason, children }: BadgeProps) => {
  const applicationState = {
    open: "bg-azul-claro/42",
    closed: "bg-laranja/42",
    soon: "bg-[#9B2693]/42",
  }

  const innedDotState = {
    open: "bg-ciano",
    closed: "bg-[#DB6E10]",
    soon: "bg-[#9B2693]",
  }

  return (
    <div className={`${applicationState[applicationSeason]} flex justify-center items-center text-preto1 font-bold w-[max-content] py-1 px-3 rounded-4xl`}>
      <div className={`${innedDotState[applicationSeason]} w-2 h-2 rounded-full mr-2`} />{children}
    </div>
  );
};

export default Badge;
