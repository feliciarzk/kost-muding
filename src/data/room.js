import garden from "../assets/garden.jpg";
import garden2 from "../assets/garden2.jpg";
import bed from "../assets/bed.jpg";
import deskWardrobe from "../assets/desk-wardrobe.jpg";
import kitchenTvFridge from "../assets/kitchen-tv-fridge.jpg";
import stove from "../assets/stove.jpg";
import gas from "../assets/gas.jpg";
import roomFull from "../assets/room-full.jpg";

export const room = {
  name: "Muding Kerobokan Room",
  location: "Muding, Kerobokan, Bali",
  price: 3700000,
  whatsapp: "628981223780",
  heroImage: garden,
  mapEmbedUrl: "https://www.google.com/maps?q=-8.6423051,115.1754676&hl=en&z=16&output=embed",
  mapLink: "https://maps.app.goo.gl/zr59vjz63Cia4dwm9",
  description:
    "A self-contained, fully furnished room with its own kitchen and bathroom, plus a garden path at your door that kept clean every day. Minutes from Canggu and Seminyak.",
  tour: [
    {
      step: "01",
      label: "At your door",
      title: "A private garden, tended daily",
      image: garden2,
      text: "A stone path lined with greenery leads straight to your room. Quiet, shaded, and cleaned every day.",
    },
    {
      step: "02",
      label: "Sleeping area",
      title: "King-size bed with bedside tables",
      image: bed,
      text: "Solid teak bed frame and nightstands, fresh linen included. AC remote sits right on the nightstand.",
    },
    {
      step: "03",
      label: "Work & storage",
      title: "Desk, chair, and mirrored wardrobe",
      image: deskWardrobe,
      text: "A desk by the window with natural light. Good for remote work. Two-door wardrobe with a mirror and four drawers.",
    },
    {
      step: "04",
      label: "Kitchenette",
      title: "Fridge, TV, and kitchen cabinet",
      image: kitchenTvFridge,
      text: "Your own kitchenette inside the room, fridge and TV on the same wall. Wooden cabinet above the sink for dishes and supplies.",
    },
    {
      step: "05",
      label: "Cook at home",
      title: "Gas stove and sink",
      image: stove,
      text: "Make coffee or a late-night meal without leaving your room. Gas tank is tucked neatly under the sink cabinet.",
    },
  ],
  facilities: {
    Room: ["King-size bed", "Bedside tables", "Work desk and chair", "Wardrobe with mirror", "Air conditioning", "TV"],
    "Private bathroom": ["Sit-down toilet", "Shower", "Water heater"],
    "Private kitchen": ["Gas stove + tank", "Sink", "Storage cabinet", "Fridge"],
  },
  gallery: [roomFull, gas, deskWardrobe, garden],
};