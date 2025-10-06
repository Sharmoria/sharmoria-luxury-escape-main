export interface Service {
  id: string;
  name: string;
  price: number;
  duration: string;
  category: string;
}

export const MINIMUM_BOOKING_AMOUNT = 500;

export const services: Service[] = [
  // Package Bundles
  { id: "quick-refresh", name: "Quick Refresh", price: 500, duration: "60 mins", category: "package" },
  { id: "feet-glow", name: "Feet & Glow", price: 850, duration: "1 hr 45 mins", category: "package" },
  { id: "stress-melt", name: "Stress Melt", price: 850, duration: "90 mins", category: "package" },
  { id: "total-indulgence", name: "Total Indulgence", price: 2100, duration: "3 hrs 15 mins", category: "package" },
  { id: "deep-healing", name: "Deep Healing", price: 1700, duration: "2 hrs 30 mins", category: "package" },
  { id: "hot-stone-bliss", name: "Hot Stone Bliss", price: 1250, duration: "1 hr 50 mins", category: "package" },
  { id: "couples-escape", name: "Couple's Escape", price: 1500, duration: "2 hrs", category: "package" },
  { id: "signature-sharmoria", name: "Signature Sharmoria", price: 1850, duration: "2 hrs 45 mins", category: "package" },
  
  // Waxing Packages
  { id: "facial-glow", name: "Facial Glow", price: 250, duration: "~30 mins", category: "waxing" },
  { id: "underarm-bikini", name: "Underarm & Bikini Essentials", price: 400, duration: "~40-45 mins", category: "waxing" },
  { id: "brazilian-bliss", name: "Brazilian Bliss", price: 550, duration: "~55-60 mins", category: "waxing" },
  { id: "hollywood-experience", name: "Hollywood Experience", price: 650, duration: "~1 hr", category: "waxing" },
  { id: "legs-glow-half", name: "Legs & Glow (Half Leg + Bikini)", price: 450, duration: "~55 mins", category: "waxing" },
  { id: "legs-glow-full", name: "Legs & Glow (Full Leg + Underarms + Bikini)", price: 700, duration: "~1 hr 30 mins", category: "waxing" },
  { id: "arms-torso-arms", name: "Arms & Torso (Full Arm + Shoulders)", price: 450, duration: "~50 mins", category: "waxing" },
  { id: "arms-torso-chest", name: "Arms & Torso (Chest + Abdomen)", price: 500, duration: "~40-50 mins", category: "waxing" },
  { id: "back-booty", name: "Back & Booty Package", price: 700, duration: "~1 hr 10 mins", category: "waxing" },
  { id: "ultimate-wax", name: "Ultimate Full-Body Wax", price: 2300, duration: "~3 hrs", category: "waxing" },
  
  // Individual Massages
  { id: "head-neck-shoulder", name: "Head, Neck & Shoulder Massage", price: 300, duration: "30 mins", category: "massage" },
  { id: "hand-arm", name: "Hand & Arm Massage", price: 250, duration: "30 mins", category: "massage" },
  { id: "foot-scrub", name: "Foot Scrub & Massage", price: 400, duration: "45 mins", category: "massage" },
  { id: "full-body-60", name: "Full-Body Relaxation (60 mins)", price: 650, duration: "60 mins", category: "massage" },
  { id: "full-body-90", name: "Full-Body Relaxation (90 mins)", price: 900, duration: "90 mins", category: "massage" },
  { id: "deep-tissue-60", name: "Deep Tissue (60 mins)", price: 750, duration: "60 mins", category: "massage" },
  { id: "deep-tissue-90", name: "Deep Tissue (90 mins)", price: 1100, duration: "90 mins", category: "massage" },
  { id: "hot-stone-60", name: "Hot Stone (60 mins)", price: 800, duration: "60 mins", category: "massage" },
  { id: "hot-stone-90", name: "Hot Stone (90 mins)", price: 1150, duration: "90 mins", category: "massage" },
  { id: "cupping-therapy", name: "Cupping Therapy", price: 800, duration: "60 mins", category: "massage" },
  
  // Facial & Add-ons
  { id: "deep-cleanse-facial", name: "Deep Cleanse Facial", price: 550, duration: "60 mins", category: "facial" },
  { id: "specialty-addon", name: "Specialty Massage Add-on", price: 150, duration: "15-20 mins", category: "addon" },
  
  // Individual Waxing
  { id: "lip-chin-brow", name: "Lip / Chin / Brow Wax", price: 100, duration: "~15 mins", category: "waxing-single" },
  { id: "full-face-wax", name: "Full Face Wax", price: 300, duration: "~30 mins", category: "waxing-single" },
  { id: "underarms-wax", name: "Underarms Wax", price: 200, duration: "~15-20 mins", category: "waxing-single" },
  { id: "bikini-wax", name: "Bikini Wax", price: 250, duration: "~25 mins", category: "waxing-single" },
  { id: "brazilian-wax", name: "Brazilian Wax", price: 400, duration: "~35-40 mins", category: "waxing-single" },
  { id: "hollywood-wax", name: "Hollywood Wax", price: 500, duration: "~45 mins", category: "waxing-single" },
  { id: "half-leg-wax", name: "Half Leg Wax", price: 250, duration: "~30 mins", category: "waxing-single" },
  { id: "full-leg-wax", name: "Full Leg Wax", price: 500, duration: "~50-60 mins", category: "waxing-single" },
  { id: "full-arm-wax", name: "Full Arm Wax", price: 300, duration: "~30 mins", category: "waxing-single" },
  { id: "chest-wax", name: "Chest Wax", price: 300, duration: "~20-30 mins", category: "waxing-single" },
  { id: "abdomen-wax", name: "Abdomen Wax", price: 250, duration: "~20-30 mins", category: "waxing-single" },
  { id: "back-wax", name: "Full Back Wax", price: 450, duration: "~45 mins", category: "waxing-single" },
  { id: "shoulders-wax", name: "Shoulders Wax", price: 200, duration: "~15-20 mins", category: "waxing-single" },
  { id: "buttocks-wax", name: "Buttocks Wax", price: 300, duration: "~25-30 mins", category: "waxing-single" },
];

export const getServiceById = (id: string): Service | undefined => {
  return services.find(s => s.id === id);
};

export const getServiceByName = (name: string): Service | undefined => {
  return services.find(s => s.name === name);
};
