import Contact from "@/Components/Contact/Contact";
import Featured from "@/Components/Featured/Featured";
import Footer from "@/Components/Footer/Footer";
import Hero from "@/Components/Hero/Hero";
import Navbar from "@/Components/Navbar/Navbar";
import Vision from "@/Components/Vision/Vision";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Featured/>
    <Vision/>
    <Contact/>
    <Footer/>
    </>
  );
}
