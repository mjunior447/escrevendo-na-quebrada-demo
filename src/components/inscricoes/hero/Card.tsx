const colorVariants = {
  white: 'bg-white shadow-lg shadow-preto1/30 text-preto1 w-[18.125rem] h-[9.75rem]',
  blue: 'bg-ciano shadow-lg shadow-preto1/30 text-white1 w-[16rem] h-[8.75rem]',
}

interface CardProps {
  colorVariant?: keyof typeof colorVariants;
  className?: string;
  children: React.ReactNode;
}

const Card = ({ colorVariant = 'white', className, children }: CardProps) => {
  return (
    <div className={`${colorVariants[colorVariant]} absolute p-4 rounded-4xl ${className}`}>
      {children}
    </div>
  );
};

export default Card;
