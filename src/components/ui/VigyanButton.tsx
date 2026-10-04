import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface VigyanButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export default function VigyanButton({
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: VigyanButtonProps) {
  const variants = {
    primary: 'bg-vigyan-navy text-white hover:bg-vigyan-deepNavy',
    secondary: 'bg-vigyan-saffron text-white hover:bg-opacity-90',
    outline: 'border-2 border-vigyan-navy text-vigyan-navy hover:bg-vigyan-navy hover:text-white',
    ghost: 'text-vigyan-muted hover:bg-gray-100',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-8 py-3 text-base',
  };

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-sm font-medium transition-all active:scale-95',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
}
