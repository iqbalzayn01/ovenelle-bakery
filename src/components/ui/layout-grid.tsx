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
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-8 grid-rows-8 gap-2">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, '')}>
          {card.content}
        </div>
      ))}
    </div>
  );
};
