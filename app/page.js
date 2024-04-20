import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import Skill from "@/Components/Skill";
import Projects from "@/Components/Projects";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="w-full h-1 bg-white my-20"></div>
      <Skill/>
      <Projects/>
      <Script
        src="https://kit.fontawesome.com/2f91ad583c.js"
        crossorigin="anonymous"
      ></Script>
    </>
  );
}
