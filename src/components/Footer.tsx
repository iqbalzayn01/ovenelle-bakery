import { VelocityScroll } from '@/components/magicui/scroll-based-velocity';
import { Button } from '../../button';
import { Input } from './ui/input';
import { nav } from '../data/navigations';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-surface flex flex-col pt-[50px] pb-[100px]">
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <VelocityScroll defaultVelocity={2.5} numRows={1}>
          <span className="text-display-xl-emphasized text-highlight h-fit">
            Ovenelle
          </span>
        </VelocityScroll>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-surface"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-surface"></div>
      </div>

      <div className="container mx-auto px-6 py-6 md:px-10 xl:px-24 flex items-center">
        <div className="w-full flex flex-col md:flex-row justify-between gap-20">
          <Image
            src="https://olxwzgxszqzlanhykudq.supabase.co/storage/v1/object/public/products/product/newsletter-img.jpg"
            width={800}
            height={800}
            alt="Newsletter Image"
            priority={true}
            className="hidden md:block w-full h-full object-cover rounded-3xl"
          />
          <div className="flex flex-col gap-8">
            <h3 className="text-display-xl-emphasized text-foreground">
              Join the Ovenelle Family.
            </h3>
            <p className="text-body-sm text-foreground">
              Be the first to hear our stories, get news from the kitchen, and
              receive special treats reserved just for our friends.
            </p>
            <div className="flex w-full max-w-sm items-center gap-2">
              <Input type="email" placeholder="Your email address" />
              <Button
                type="submit"
                className="btn-default w-fit text-caption-emphasized bg-foreground hover:bg-black"
              >
                Join Us
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-6 md:px-10 xl:px-24">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex flex-col gap-4">
            <span className="text-display-xl-emphasized text-brand">
              Ovenelle
            </span>
            <span className="text-caption text-foreground">
              © 2025 Ovenelle. All Rights Reserved.
            </span>
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-4">
            <ul>
              {nav.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-body-sm text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <ul>
              {nav.social.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.url}
                    className="text-body-sm text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <ul>
              <li className="text-title-xl-emphasized text-foreground">
                Address
              </li>
              <li>{nav.address}</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
