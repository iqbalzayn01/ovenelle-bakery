import { Button } from '../ui/button';
import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <div className="container mx-auto px-6 py-6 md:px-10 xl:px-24 flex items-center">
      <div className="w-full flex items-center justify-between">
        <Link href="/" className="text-heading-xl-emphasized text-brand">
          Ovenelle
        </Link>
        <div className="flex items-center justify-end gap-10">
          <div className="flex items-start gap-2">
            <Link href="/cart" className="text-caption text-foreground">
              Cart
            </Link>
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="4" cy="4" r="4" fill="#D4716A" />
            </svg>
          </div>
          <Button size="icon" className="size-8 cursor-pointer bg-foreground">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              className="fill-surface"
            >
              <path d="M400-240q-17 0-28.5-11.5T360-280q0-17 11.5-28.5T400-320h400q17 0 28.5 11.5T840-280q0 17-11.5 28.5T800-240H400Zm0-200q-17 0-28.5-11.5T360-480q0-17 11.5-28.5T400-520h400q17 0 28.5 11.5T840-480q0 17-11.5 28.5T800-440H400ZM160-640q-17 0-28.5-11.5T120-680q0-17 11.5-28.5T160-720h640q17 0 28.5 11.5T840-680q0 17-11.5 28.5T800-640H160Z" />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
}
