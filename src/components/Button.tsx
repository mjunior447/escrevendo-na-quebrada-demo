interface ButtonProps {
  children: string;
  className?: string;
  colorVariant?: keyof typeof colorVariants;
  disabled?: boolean;
}

const colorVariants = {
  purple: 'bg-roxo-escuro text-white1 hover:bg-roxo',
  outlinedDeepPurple: 'bg-transparent border-roxo border-1 text-roxo-escuro hover:bg-roxo-escuro hover:text-white1',
  lightBlue: 'bg-azul-claro text-white1 hover:#4baebf',
  outlinedLightBlue: 'bg-transparent border border-azul-claro text-azul-claro hover:bg-azul-claro hover:text-white',
  ciano: 'bg-ciano text-white1 hover:bg-ciano-escuro',
};

const Button = ({
  children,
  colorVariant = "purple",
  className,
  disabled,
}: ButtonProps) => {

  return (
    <button
      disabled={disabled}
      className={`${colorVariants[colorVariant]} w-full px-6 rounded-4xl cursor-pointer active:opacity-85 uppercase shadow-sm/60 shadow-preto1 transition-colors duration-200 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
