import Hero from "../sections/Hero";
import About from "../sections/About";
import Highlights from "../sections/Highlights";
import Gallery from "../sections/Gallery";
import Facilities from "../sections/Facilities";
import Price from "../sections/Price";
import Contact from "../sections/Contact";
import { room } from "../data/room";

export default function Home() {
  return (
    <>
      <Hero room={room} />
      <About />
      <Highlights room={room} />
      <Gallery room={room} />
      <Facilities room={room} />
      <Price room={room} />
      <Contact room={room} />
    </>
  );
}
