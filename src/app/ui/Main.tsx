import React from 'react';
import cn from 'classnames';

export const Main = (props: { children?: React.ReactNode }) => {
  return <main className={cn('py-9 mx-auto w-[210mm]')}>{props.children}</main>;
};
