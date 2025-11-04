import React from 'react';
import Icon from '@/shared/components/Icon';
import { cn } from '@/shared/lib/utils';

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: Parameters<typeof Icon>[0]['name']; // Icon의 name prop 타입 재사용
  size?: number;
  variant?: 'ghost' | 'solid' | 'outline';
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  size = 20,
  variant = 'ghost',
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        'inline-flex cursor-pointer items-center justify-center rounded-full p-2 transition-colors',
        {
          'hover:bg-gray-100': variant === 'ghost',
          'bg-gray-200 p-2 hover:bg-gray-300': variant === 'solid',
          'border border-gray-300 p-2 hover:bg-gray-50': variant === 'outline',
        },
        className,
      )}
      {...props}
    >
      <Icon name={icon} size={size} />
    </button>
  );
};

export default IconButton;
