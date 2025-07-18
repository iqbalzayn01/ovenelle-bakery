import Header from '@/components/shared/Header';
import HeroSection from './components/HeroSection';
import SignatureProductSection from './components/SignatureProductSection';
import React from 'react';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-[100px]">
        <HeroSection />
        <SignatureProductSection />
      </main>
    </>
  );
}
