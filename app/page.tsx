'use client'

import Footer from "@/Components/Footer";
import Nav from "@/Components/Nav";
import 'swiper/css';
import 'swiper/css/navigation';
import FeaturedNews from '@/Components/ui/client/featuredNews';
import WeeklyNews from '@/Components/ui/client/weeklyNews';
import Show from "@/Components/ui/client/show";
import Shop from "@/Components/ui/client/shop";
import Hero from "@/Components/ui/client/hero";




export default function Home() {


  return (
    <div className="bg-white w-full flex flex-col text-black min-h-screen">
      <Nav />

      {/* Hero Section */}
      <Hero />
      <div className="mb-[300px]"></div>
      <div className="px-4 md:px-[60px] xl:px-[120px] py-[14px] w-full max-w-[1400px] mx-auto">
        <FeaturedNews />
        <WeeklyNews />
        <Show />
        <Shop />
      </div>

      <div className="pt-[40px]">
        <Footer />
      </div>
    </div>
  );
}
