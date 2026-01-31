interface SwitchOptionProps {
  children: React.ReactNode,
  isActive: boolean,
  onClick: () => void
}

const SwitchOption = ({ children, isActive, onClick }: SwitchOptionProps) => (
  <div
    className={`font-bold py-3 px-8 rounded-xl inline-block cursor-pointer ${isActive ? 'bg-white' : 'bg-cinza text-[#676767] hover:bg-[#E0E0E0]'} transition-colors duration-200`}
    onClick={onClick}
  >
    {children}
  </div>
)

export default SwitchOption;