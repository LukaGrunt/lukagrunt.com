import { motion } from 'framer-motion';
import { ReactNode, useRef, useState, MouseEvent } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'glass';
  size?: 'medium' | 'large';
  href?: string;
  onClick?: () => void;
  target?: string;
  download?: boolean;
  className?: string;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'medium',
  href,
  onClick,
  target,
  download,
  className = '',
}: ButtonProps) {
  const buttonRef = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Magnetic hover effect
  const handleMouseMove = (e: MouseEvent) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  // Variant styles
  const variantStyles = {
    primary: 'bg-primary text-foundation font-bold shadow-neon-orange hover:shadow-neon-orange hover:scale-105',
    secondary: 'bg-accent text-text font-bold shadow-neon-red hover:shadow-neon-red hover:scale-105',
    glass: 'glass text-text font-normal border-2 border-primary/30 hover:border-primary hover:bg-primary/10',
  };

  const sizeStyles = {
    medium: 'px-8 py-3 text-base',
    large: 'px-12 py-4 text-lg',
  };

  const baseStyles = `
    inline-block rounded-full font-body transition-all duration-300 ease-out cursor-pointer
    ${variantStyles[variant]} ${sizeStyles[size]} ${className}
  `;

  const Component = href ? 'a' : 'button';

  return (
    <motion.div
      style={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <Component
        ref={buttonRef as any}
        href={href}
        onClick={onClick}
        target={target}
        download={download}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={baseStyles}
      >
        {children}
      </Component>
    </motion.div>
  );
}
