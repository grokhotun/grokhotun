import React from 'react';
import cn from 'classnames';

type TitleProps = React.ComponentPropsWithoutRef<
  'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
> & {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
};

export const Title: React.FC<TitleProps> = ({
  children,
  level = 1,
  className,
  ...rest
}) => {
  const Tag = (
    {
      1: 'h1',
      2: 'h2',
      3: 'h3',
      4: 'h4',
      5: 'h5',
      6: 'h6',
    } as const
  )[level];

  return (
    <Tag
      {...rest}
      className={cn(
        {
          'text-3xl font-bold': level === 1,
          'text-2xl font-bold': level === 2,
          'text-xl font-bold': level === 3,
          'text-lg font-bold': level === 4,
          'text-base font-bold': level === 5,
        },
        className,
      )}
    >
      {children}
    </Tag>
  );
};
