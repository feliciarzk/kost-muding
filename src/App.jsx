import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";
import { room } from "./data/room";

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
      <WhatsAppButton phone={room.whatsapp} floating />
    </>
  );
}
