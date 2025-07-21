import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

export default function OurStorySection() {
  return (
    <div className="container mx-auto px-6 md:px-10 xl:px-24 flex flex-col">
      <div className="flex flex-col gap-10">
        <h5 className="text-heading-sm text-foreground">Our Story</h5>
        <h2 className="w-full md:w-[400px] text-display-lg-emphasized md:text-display-xl-emphasized text-foreground">
          More Than a Bakery, It&apos;s a Piece of Our Story.
        </h2>
        <p className="text-heading-xl text-foreground">
          We believe the simplest things—like a warm loaf of bread shared among
          friends—create the most meaningful moments. Welcome to the heart of
          Ovenelle.
        </p>
        <Button
          className="btn-default w-fit text-caption-emphasized bg-foreground hover:bg-black"
          asChild
        >
          <Link href="/our-story">Discover Our Journey</Link>
        </Button>
      </div>
    </div>
  );
}
