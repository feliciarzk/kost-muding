import { Routes, Route } from "react-router-dom";
import IntroLoader from "./components/IntroLoader";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";
import RoomDetail from "./pages/RoomDetail";
import { room } from "./data/Room";

export default function App() {
  return (
    <>
      <IntroLoader />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room/:roomId" element={<RoomDetail />} />
      </Routes>
      <Footer />
      <WhatsAppButton phone={room.whatsapp} floating />
    </>
  );
} 