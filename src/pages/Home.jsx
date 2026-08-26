import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Room from "../sections/Room";
import Gallery from "../sections/Gallery";
import Contact from "../sections/Contact";
import Map from "../sections/Map";
import { room } from "../data/Room";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    // Prevent the browser from auto-restoring scroll position on refresh
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const targetId = location.state?.scrollTo;
    if (targetId) {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "instant", block: "start" });
      }
      // clear state so refresh/back doesn't re-trigger the scroll
      window.history.replaceState({}, document.title);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.state]);

  return (
    <>
      <Hero room={room} />
      <About />
      <Room />
      <Gallery room={room} />
      <Contact room={room} />
      <Map room={room} />
    </>
  );
}