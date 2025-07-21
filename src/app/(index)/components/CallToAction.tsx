import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

export default function CallToAction() {
  return (
    <div className="container mx-auto px-6 md:px-10 xl:px-24 py-[100px]">
      <div className="bg-brand w-full h-full flex flex-col items-center justify-center px-12 py-14 gap-10 rounded-3xl">
        <div className="flex flex-col gap-4 items-center justify-center text-center">
          <h3 className="text-display-xl-emphasized text-white">
            Your daily bread, made better.
          </h3>
          <p className="text-body-md text-white">
            Whether you visit us in person or enjoy our baking at home,
            we&apos;re ready to serve you.
          </p>
        </div>
        <Button
          className="btn-default w-fit text-caption-emphasized bg-foreground hover:bg-black"
          asChild
        >
          <Link href="products">Explore The Menu</Link>
        </Button>
      </div>
    </div>
  );
}
