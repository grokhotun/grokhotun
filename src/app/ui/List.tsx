import React from 'react';
import cn from 'classnames';

type ItemProps = React.ComponentPropsWithoutRef<'li'>;
const Item: React.FC<ItemProps> = ({ children, className, ...rest }) => {
  return (
    <li {...rest} className={cn(['leading-6', className])}>
      {children}
    </li>
  );
};

type ListProps = React.ComponentPropsWithoutRef<'ul'>;
const BaseList: React.FC<ListProps> = ({ children, className, ...rest }) => {
  return (
    <ul
      {...rest}
      className={cn(['my-2 pl-4 list-disc list-inside text-base', className])}
    >
      {children}
    </ul>
  );
};

export const List = Object.assign(BaseList, { Item });
