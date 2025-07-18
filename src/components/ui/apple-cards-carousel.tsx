'use client';
import React, { useEffect, useState, createContext, JSX } from 'react';
import { IconArrowNarrowLeft, IconArrowNarrowRight } from '@tabler/icons-react';
import { cn } from '../../lib/utils';
import { motion } from 'motion/react';
import { ImageProps } from 'next/image';
import Image from 'next/image';

interface CarouselProps {
  items: JSX.Element[];
  initialScroll?: number;
}

type Card = {
  id: string;
  title: string;
  descriptionShort: string;
  src: string;
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384; // (md:w-96)
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth [scrollbar-width:none] py-10"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          {/* <div
            className={cn(
              'absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l'
            )}
          ></div> */}
          <div
            className={cn(
              'flex flex-row justify-start gap-4 pl-2',
              'mx-auto max-w-7xl' // remove max-w-4xl if you want the carousel to span the full width of its container
            )}
          >
            {items.map((item, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 * index,
                    ease: 'easeOut',
                  },
                }}
                key={'card' + index}
                className="rounded-3xl last:pr-[5%] md:last:pr-[33%]"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex justify-center md:justify-end gap-2">
          <button
            className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
          </button>
          <button
            className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50"
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({
  card,
  layout = false,
}: {
  card: Card;
  index: number;
  layout?: boolean;
}) => {
  return (
    <motion.div
      layoutId={layout ? `card-${card.title}` : undefined}
      className="relative z-10 flex h-auto w-56 md:w-96 flex-col items-start justify-start overflow-hidden rounded-3xl bg-highlight"
    >
      {/* <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-gradient-to-b from-black/50 via-transparent to-transparent" /> */}
      <div className="relative z-40 p-8">
        <motion.p
          layoutId={layout ? `category-${card.id}` : undefined}
          className="text-left text-heading-md-emphasized text-foreground"
        >
          {card.title}
        </motion.p>
        <motion.p
          layoutId={layout ? `title-${card.title}` : undefined}
          className="mt-2 max-w-xs text-left text-body-sm text-foreground"
        >
          {card.descriptionShort}
        </motion.p>
      </div>
      <Image
        className="w-full h-full object-cover"
        src={card.src}
        width={500}
        height={500}
        loading="lazy"
        decoding="async"
        blurDataURL={typeof card.src === 'string' ? card.src : undefined}
        alt={card.title ? card.title : 'Background of a beautiful view'}
      />
      {/* <BlurImage
        src={card.src}
        alt={card.title}
        width={500}
        height={500}
        fill
        className="w-full h-auto object-cover"
      /> */}
    </motion.div>
  );
};

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
}: ImageProps) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      className={cn(
        'h-full w-full transition duration-300',
        isLoading ? 'blur-sm' : 'blur-0',
        className
      )}
      onLoad={() => setLoading(false)}
      src={src as string}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      blurDataURL={typeof src === 'string' ? src : undefined}
      alt={alt ? alt : 'Background of a beautiful view'}
    />
  );
};
