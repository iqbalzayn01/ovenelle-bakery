import Header from '@/components/shared/Header';
import HeroSection from './components/HeroSection';
import SignatureProductSection from './components/SignatureProductSection';
import OurStorySection from './components/OurStorySection';
import TestimonialSection from './components/TestimonialSection';
import CallToAction from './components/CallToAction';
import Footer from '@/components/shared/Footer';
import React from 'react';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-[100px]">
        <HeroSection />
        <SignatureProductSection />
        <OurStorySection />
        <TestimonialSection />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
