import { LayoutGrid } from '@/components/ui/layout-grid';
import React from 'react';
import Image from 'next/image';

const SkeletonOne = () => {
  return (
    <div className="flex flex-col px-12 py-14 bg-highlight rounded-3xl">
      <h4 className="font-serif text-[41px] md:text-[46px] text-foreground">
        Sourdough, butter-soft and golden.
      </h4>
      <Image
        src="https://olxwzgxszqzlanhykudq.supabase.co/storage/v1/object/public/products/product/hero-img-1.jpg"
        alt="Sourdough bread"
        width={800}
        height={800}
        priority
        className="size-full rounded-3xl"
      />
    </div>
  );
};
const SkeletonTwo = () => {
  return (
    <div className="flex flex-col px-12 py-14 bg-highlight rounded-3xl">
      <h4 className="font-serif text-[41px] md:text-[46px] text-foreground">
        Sourdough, butter-soft and golden.
      </h4>
      <Image
        src="https://olxwzgxszqzlanhykudq.supabase.co/storage/v1/object/public/products/product/hero-img-1.jpg"
        alt="Sourdough bread"
        width={800}
        height={800}
        priority
        className="size-full rounded-3xl"
      />
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div className="flex flex-col px-12 py-14 bg-highlight rounded-3xl">
      <h4 className="font-serif text-[41px] md:text-[46px] text-foreground">
        Sourdough, butter-soft and golden.
      </h4>
      <Image
        src="https://olxwzgxszqzlanhykudq.supabase.co/storage/v1/object/public/products/product/hero-img-2.jpg"
        alt="Sourdough bread"
        width={800}
        height={800}
        priority
        className="size-full rounded-3xl"
      />
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div className="flex flex-col px-12 py-14 bg-highlight rounded-3xl">
      <h4 className="font-serif text-[41px] md:text-[46px] text-foreground">
        Sourdough, butter-soft and golden.
      </h4>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: 'md:col-span-4 md:row-span-3',
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: 'col-span-4 md:row-span-2',
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: 'col-span-4 md:row-span-1',
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: 'md:col-span-4 md:row-span-3',
  },
];

export default function HeroSection() {
  return (
    <div className="container mx-auto px-6 md:px-10 xl:px-24 py-6 flex">
      <div className="flex w-full items-start justify-between gap-6">
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="font-serif text-[46px] text-foreground font-bold">
            Calm mornings. Warm ovens. Real bread.
          </h1>
          <p className="font-sans text-lg text-foreground">
            Ovenelle brings timeless baking into modern hands.
          </p>
        </div>
        <div className="w-[62%] h-screen">
          <LayoutGrid cards={cards} />
        </div>
      </div>
    </div>
  );
}
