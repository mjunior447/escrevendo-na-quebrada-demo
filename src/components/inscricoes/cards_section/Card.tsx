interface CardProps {
  children: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
  return (
    <div className="border border-[#DADADA] rounded-4xl p-8 w-full md:max-w-xl bg-white">
      {children}
    </div>
  )
}

export default Card;