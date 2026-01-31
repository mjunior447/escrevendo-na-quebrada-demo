const Switch = ({ children }: { children: React.ReactNode }) => {
  return (
    <div role="switch" className="inline-flex justify-center items-center rounded-xl bg-cinza p-1 select-none">
      {children}
    </div>
  )
}

export default Switch;