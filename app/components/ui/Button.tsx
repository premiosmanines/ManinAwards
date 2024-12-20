interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export function Button({ variant = 'primary', className = '', ...props }: ButtonProps) {
  const baseStyles = 'px-6 py-2.5 rounded-lg font-medium transition-all duration-200';
  const variants = {
    primary: 'bg-[#8B4513] hover:bg-[#6B3410] text-white glow-effect',
    secondary: 'bg-white/10 hover:bg-white/20 text-white',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    />
  );
}