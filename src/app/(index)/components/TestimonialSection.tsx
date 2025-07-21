import { Marquee } from '@/components/magicui/marquee';
import testimonials from '@/data/testimonials.json';
import React from 'react';

const firstRow = testimonials.slice(0, testimonials.length / 2);

const ReviewCard = ({
  author,
  caption,
}: {
  id: string;
  author: string;
  caption: string;
}) => {
  return (
    <figure className="relative w-[400px] h-full cursor-pointer overflow-hidden flex flex-col gap-10 justify-between p-12 bg-highlight rounded-3xl">
      <blockquote className="text-heading-md-emphasized text-foreground">
        {caption}
      </blockquote>
      <div className="flex flex-row items-center gap-2">
        <div className="flex flex-col">
          <p className="text-body-sm text-foreground">{author}</p>
        </div>
      </div>
    </figure>
  );
};

export default function TestimonialSection() {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <div className="container mx-auto px-6 md:px-10 xl:px-24">
        <h2 className="self-start w-full md:w-[400px] text-display-xl-emphasized text-foreground">
          Love in Every Loaf. And Every Word.
        </h2>
      </div>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s] [--gap:40px]">
          {firstRow.map((review) => (
            <ReviewCard key={review.author} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </div>
    </div>
  );
}
