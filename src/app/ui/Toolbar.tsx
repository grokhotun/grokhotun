'use client';

import React from 'react';

export const Toolbar = () => {
  const [clicked, setClicked] = React.useState(false);

  const handleClick = () => {
    const html = document.querySelector('html');
    const main = document.querySelector('main');
    if (!html || !main) return;

    html.classList.toggle('text-[7px]');
    main.classList.toggle('h-[297mm]');
    main.classList.toggle('overflow-hidden');
    setClicked(true);
  };

  if (clicked) return null;
  return <button onClick={handleClick}>Print</button>;
};
