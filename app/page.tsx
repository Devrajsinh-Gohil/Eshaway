"use client"
import Cars from "@/components/Cars";
import ContactUs from "@/components/ContactUs";
import LandingHero from "@/components/LandingHero";
import Nav from "@/components/Nav";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <main>
      <Nav/>
      <LandingHero />
      <Cars/>
      <Timeline/>
      <ContactUs/>
    </main>
  );
}