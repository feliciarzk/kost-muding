// ============================================
// KOS MUDING DATA
// Put this file in src/data/room.js
// Photos are in the assets/room-a, room-b, room-c, room-d folders
// (copy to src/assets/rooms/, then adjust the import paths below)
// ============================================

import a1 from "../assets/room-a/1.jpg";
import a2 from "../assets/room-a/2.jpg";
import a3 from "../assets/room-a/3.jpg";
import a4 from "../assets/room-a/4.jpg";
import a5 from "../assets/room-a/5.jpg";
import a6 from "../assets/room-a/6.jpg";
import a7 from "../assets/room-a/7.jpg";
import a8 from "../assets/room-a/8.jpg";

import b1 from "../assets/room-b/1.jpg";
import b2 from "../assets/room-b/2.jpg";
import b3 from "../assets/room-b/3.jpg";
import b4 from "../assets/room-b/4.jpg";
import b5 from "../assets/room-b/5.jpg";

import c1 from "../assets/room-c/1.jpg";
import c2 from "../assets/room-c/2.jpg";
import c3 from "../assets/room-c/3.jpg";
import c4 from "../assets/room-c/4.jpg";
import c5 from "../assets/room-c/5.jpg";

import d1 from "../assets/room-d/1.jpg";
import d2 from "../assets/room-d/2.jpg";
import d3 from "../assets/room-d/3.jpg";
import d4 from "../assets/room-d/4.jpg";

import buildingPhoto from "../assets/build.jpeg";

// ============================================
// GENERAL KOS INFO — used by App.jsx, RoomDetail.jsx, WhatsAppButton
// ============================================
export const room = {
  name: "Kos Muding Kerobokan",
  location: "Muding Kerobokan, Bali",
  whatsapp: "628981223780",
  mapLink: "https://maps.google.com/?q=Muding+Kerobokan+Bali",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=REPLACE_WITH_YOUR_EMBED_LINK",
  gallery: [buildingPhoto, a7, a5, a4],
};

// ============================================
// ROOM TYPE DATA
// ============================================
export const roomTypes = [
  {
    id: "a",
    label: "Type A",
    price: 4500000,
    description: "Our most spacious & stylish room, with a private garden right at the entrance.",
    heroImage: a1,
    gallery: [a1, a8, a2, a3, a4, a5, a6, a7],
    facilities: {
      Kamar: [
        "Wardrobe with mirror",
        "Desk with chair",
        "Terrace with table & lounge chairs",
        "Garden at the front serving as the room's entrance",
        "King size bed",
        "Sofa + table",
        "AC",
        "TV",
        "Refrigerator",
        "Fan",
        "Full decorations & ornaments",
        "Decorative lighting",
      ],
      "Dapur Pribadi": ["Sink", "Kitchen cabinet", "Stove + gas"],
      "Kamar Mandi Dalam": ["Sit-down toilet", "Shower", "Water heater"],
    },
  },
  {
    id: "b",
    label: "Type B",
    price: 4200000,
    description: "As spacious as Type A, with adjustable warm/white mood lighting.",
    heroImage: b1,
    gallery: [b1, b2, b3, b4, b5],
    facilities: {
      Kamar: [
        "King size bed",
        "Sofa + table",
        "Work desk + chair",
        "Wardrobe with mirror",
        "AC",
        "TV",
        "Decorative lighting (adjustable white/warm)",
      ],
      "Dapur Pribadi": ["Sink", "Kitchen cabinet", "Stove + gas", "Refrigerator"],
      "Kamar Mandi Dalam": ["Sit-down toilet", "Shower", "Water heater"],
    },
  },
  {
    id: "c",
    label: "Type C",
    price: 3700000,
    description: "Comfortable and functional, with a fully equipped private kitchen.",
    heroImage: c4,
    gallery: [c4, c3, c1, c2, c5],
    facilities: {
      Kamar: [
        "King size bed",
        "Bedside table",
        "Work desk + chair",
        "AC",
        "Wardrobe with mirror",
        "TV",
        "Refrigerator",
      ],
      "Dapur Pribadi": ["Sink", "Kitchen cabinet"],
      "Kamar Mandi Dalam": ["Sit-down toilet", "Shower", "Water heater"],
    },
  },
  {
    id: "d",
    label: "Type D",
    price: 3000000,
    description: "A budget-friendly option with all the essential facilities included.",
    heroImage: d3,
    gallery: [d3, d4, d1, d2],
    facilities: {
      Kamar: ["King size bed", "Work desk + chair", "Wardrobe + mirror", "AC", "TV", "Refrigerator"],
      "Dapur Pribadi": ["Sink"],
      "Kamar Mandi Dalam": ["Sit-down toilet", "Shower", "Water heater"],
    },
  },
];