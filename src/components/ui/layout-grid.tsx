'use client';

import React, { JSX } from 'react';
import { cn } from '../../lib/utils';

type Card = {
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  return (
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-8 grid-rows-4 gap-2">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, '')}>
          {card.content}
        </div>
      ))}
      <div
        className={cn(
          'absolute h-full w-full left-0 top-0 bg-black opacity-0 z-10'
        )}
      />
    </div>
  );
};
