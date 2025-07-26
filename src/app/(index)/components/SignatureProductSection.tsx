'use client';

import { Carousel, Card } from '@/components/ui/apple-cards-carousel';
import data from '@/data/products.json';
import React from 'react';

function CardsCarousel() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="relative w-full h-full">
      <Carousel items={cards} />
    </div>
  );
}

export default function SignatureProductSection() {
  return (
    <div className="container mx-auto px-6 md:px-10 xl:px-24 flex flex-col">
      <div className="flex flex-col gap-4">
        <h2 className="text-heading-xl-emphasized text-foreground">
          Our Signature Bakes
        </h2>
        <p className="text-body-md text-foreground">
          Crafted with passion, using only the finest ingredients. A taste of
          what makes us special.
        </p>
      </div>
      <CardsCarousel />
    </div>
  );
}
