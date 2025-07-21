import { Button } from '@/components/ui/button';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <div className="container mx-auto px-6 md:px-10 xl:px-24 flex">
      <div className="flex flex-col lg:flex-row w-full items-start justify-between gap-4">
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-display-xl-emphasized text-foreground">
            Calm mornings. Warm ovens. Real bread.
          </h1>
          <p className="text-body-md text-foreground">
            Ovenelle brings timeless baking into modern hands.
          </p>
        </div>

        <div className="w-full lg:w-[65%] h-auto">
          <div className="grid gap-2 grid-cols-1 sm:grid-cols-4 md:grid-rows-3">
            <div className="bg-highlight rounded-3xl px-10 py-8 md:px-12 md:py-14 sm:col-span-2 sm:row-span-2 flex flex-col justify-between gap-4">
              <h2 className="text-display-xl text-foreground">
                Sourdough, butter-soft and golden.
              </h2>
              <Image
                src="https://olxwzgxszqzlanhykudq.supabase.co/storage/v1/object/public/products/product/hero-img-1.jpg"
                alt="Sourdough bread"
                width={500}
                height={500}
                priority
                className="w-full h-auto object-cover flex-1 rounded-3xl"
              />
            </div>

            <div className="bg-highlight rounded-3xl px-10 py-8 md:px-12 md:py-14 sm:col-span-2 flex flex-col gap-4">
              <h3 className="text-heading-md-emphasized text-foreground">
                Discover what&apos;s fresh today
              </h3>
              <p className="text-caption text-foreground">
                Every loaf tells a story.
              </p>
              <Button
                className="btn-default w-fit text-caption-emphasized bg-foreground hover:bg-black"
                asChild
              >
                <Link href="/products">Order Now</Link>
              </Button>
            </div>

            <div className="bg-highlight rounded-3xl px-10 py-8 md:px-12 md:py-14 sm:col-span-2 sm:row-span-2 flex flex-col justify-between gap-4">
              <Image
                src="https://olxwzgxszqzlanhykudq.supabase.co/storage/v1/object/public/products/product/hero-img-2.jpg"
                alt="Sourdough bread"
                width={500}
                height={500}
                priority
                className="size-full object-cover rounded-3xl"
              />
              <h3 className="text-heading-md-emphasized text-foreground mb-2">
                Honest baking, no shortcuts
              </h3>
              <p className="text-body-sm text-foreground">
                Minimal ingredients, maximum comfort.
              </p>
            </div>

            <div className="bg-highlight rounded-3xl px-10 py-8 md:px-12 md:py-14 sm:col-span-2 flex flex-col gap-4">
              <h3 className="text-heading-md-emphasized text-foreground">
                Open Daily
              </h3>
              <p className="text-body-md text-foreground">
                7 AM - 6 PM • Bogor, Indonesia
              </p>
              <Button
                variant="outline"
                className="w-fit bg-transparent hover:bg-foreground border border-foreground py-2 px-4 rounded-md text-caption text-foreground hover:text-surface"
                asChild
              >
                <Link href={'/#'}> Find Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
