"use client";
import { React, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import HeroSection from "./_components/HeroSection";
import Page1 from "./_components/Page1";
import Page2 from "./_components/Page2";
import Page3 from "./_components/Page3";
import Page4 from "./_components/Page4";
import Page5 from "./_components/Page5";
import Page6 from "./_components/Page6";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      // once: false,
    });
  }, []);
  return (
    <>
      <div>
        <Header />
        <HeroSection />
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
        <Page5/>
        <Page6/>
        <Footer />
      </div>
    </>
  );
}
