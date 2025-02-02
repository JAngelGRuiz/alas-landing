import React, { ReactNode } from 'react';

interface PostItProps {
  children: React.ReactNode;
  color: 'pink' | 'yellow' | 'green';
  icon?: ReactNode;
  className?: string;
}

export function Postick({
  children,
  color,
  icon,
  className = '',
}: PostItProps) {
  const colorStyles = {
    pink: 'bg-gradient-to-br from-pink-50 to-pink-100 shadow-pink-200/50',
    yellow: 'bg-gradient-to-br from-amber-50 to-amber-100 shadow-amber-200/50',
    green: 'bg-gradient-to-br from-green-50 to-green-100 shadow-green-200/50',
  };

  const textColors = {
    pink: 'text-pink-700',
    yellow: 'text-amber-700',
    green: 'text-green-700',
  };

  const iconBackgrounds = {
    pink: 'bg-pink-200/50',
    yellow: 'bg-amber-200/50',
    green: 'bg-green-200/50',
  };

  return (
    <div
      className={`
        relative p-6 rounded-2xl w-auto mx-8 sm:mx-0 md:max-w-[380px] h-[300px] md:h-[350px]
        transform transition-all duration-300
        hover:-translate-y-1 hover:shadow-xl
        shadow-lg backdrop-blur-sm flex flex-col justify-center
        ${colorStyles[color]}
        ${className}
      `}
    >
      {icon && (
        <div
          className={`
          absolute top-4 left-4 p-2 rounded-full
          ${iconBackgrounds[color]}
        `}
        >
          {icon}
        </div>
      )}
      <h4
        className={`
        text-xl font-medium pt-4
        ${textColors[color]}
      `}
      >
        {children}
      </h4>
    </div>
  );
}
