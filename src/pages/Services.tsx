import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import fullBodyImage from "@/assets/full-body-massage.jpg";
import BodyImage from "@/assets/full-body-massage2.jpeg";
import massageImage from "@/assets/full-body-massage3.jpeg";
import relaxationImage from "@/assets/relaxation-body.jpeg";
import headImage from "@/assets/head-neck.jpeg";
import stonesImage from "@/assets/stones-massage.jpeg";
import deepTissueImage from "@/assets/deep-tissue.jpg";
import hotStoneImage from "@/assets/hot-stone.jpg";
import facialImage from "@/assets/facial-treatment.jpg";
import footMassageImage from "@/assets/foot-massage.jpg";
import neckShoulderImage from "@/assets/neck-shoulder.jpg";
import handArmImage from "@/assets/hand-arm.jpg";
import waxingImage from "@/assets/waxing-service.jpg";
import couplesImage from "@/assets/couples-massage.jpg";
import faceWaxImage from "@/assets/face-wax.png";
import armpitWaxImage from "@/assets/armpit-wax.jpeg";
import brazilImage from "@/assets/brazillian-wax.jpeg";
import hollywoodImage from "@/assets/hollywood-wax.jpeg";
import legImage from "@/assets/leg-wax.jpeg";
import armImage from "@/assets/arm-wax.jpeg";
import bodyWaxImage from "@/assets/full-body-wax.jpeg";
import facialCImage from "@/assets/facial-cleanse.jpeg";
import deepImage from "@/assets/deep.jpeg";
import backImage from "@/assets/back-wax.webp";
const Services = () => {
  const packageBundles = [
    {
      title: "Quick Refresh",
      duration: "60 mins",
      price: "R500",
      description:
        "Head, Neck & Shoulder Massage (30 mins) + Hand & Arm Massage (30 mins)",
      image: headImage,
      serviceId: "Quick Refresh",
    },
    {
      title: "Feet & Glow",
      duration: "1 hr 45 mins",
      price: "R850",
      description:
        "Foot Scrub & Massage (45 mins) + Deep Cleanse Facial + Facial Massage (60 mins)",
      image: footMassageImage,
      serviceId: "Feet & Glow",
    },
    {
      title: "Stress Melt",
      duration: "90 mins",
      price: "R850",
      description:
        "Full-Body Relaxation Massage (60 mins) + Head, Neck & Shoulder (30 mins)",
      image: fullBodyImage,
      serviceId: "Stress Melt",
    },
    {
      title: "Total Indulgence",
      duration: "3 hrs 15 mins",
      price: "R2,100",
      description:
        "Full-Body Relaxation Massage (90 mins) + Deep Cleanse Facial (60 mins) + Foot Scrub & Massage (45 mins)",
      image: facialImage,
      serviceId: "Total Indulgence",
    },
    {
      title: "Deep Healing",
      duration: "2 hrs 30 mins",
      price: "R1,700",
      description: "Deep Tissue Massage (90 mins) + Cupping Therapy (60 mins)",
      image: deepTissueImage,
      serviceId: "Deep Healing",
    },
    {
      title: "Hot Stone Bliss",
      duration: "1 hr 50 mins",
      price: "R1,250",
      description:
        "Hot Stone Massage (90 mins) + Aromatherapy / Scalp Add-on (20 mins)",
      image: hotStoneImage,
      serviceId: "Hot Stone Bliss",
    },
    {
      title: "Couple's Escape",
      duration: "2 hrs total",
      price: "R1,500",
      description:
        "2 × Full-Body Relaxation Massages (60 mins) + 2 × Aromatherapy / Scalp Add-ons (60 mins)",
      image: couplesImage,
      serviceId: "Couple's Escape",
    },
    {
      title: "Signature Sharmoria",
      duration: "2 hrs 45 mins",
      price: "R1,850",
      description:
        "Deep Tissue (60 mins) + Deep Cleanse Facial (60 mins) + Foot Scrub & Massage (45 mins)",
      image: BodyImage,
      serviceId: "Signature Sharmoria",
    },
  ];

  const waxingPackages = [
    {
      title: "Facial Glow",
      duration: "~30 mins",
      price: "R250",
      description:
        "Lip + Chin + Brow Wax (all small facial areas). Full face option upgrade available.",
      image: faceWaxImage,
      serviceId: "Facial Glow",
    },
    {
      title: "Underarm & Bikini Essentials",
      duration: "~40-45 mins",
      price: "R400",
      description: "Underarms Wax + Bikini Wax (classic line).",
      image: armpitWaxImage,
      serviceId: "Underarm & Bikini Essentials",
    },
    {
      title: "Brazilian Bliss",
      duration: "~55-60 mins",
      price: "R550",
      description: "Brazilian Wax + Underarms Wax.",
      image: brazilImage,
      serviceId: "Brazilian Bliss",
    },
    {
      title: "Hollywood Experience",
      duration: "~1 hr",
      price: "R650",
      description: "Hollywood Wax (front + back intimate) + Underarms Wax.",
      image: hollywoodImage,
      serviceId: "Hollywood Experience",
    },
    {
      title: "Legs & Glow",
      duration: "~55 mins - 1 hr 30 mins",
      price: "R450 - R700",
      description:
        "Half Leg + Bikini (R450) or Full Leg + Underarms + Bikini (R700)",
      image: legImage,
      serviceId: "Legs & Glow",
    },
    {
      title: "Arms & Torso",
      duration: "~40-50 mins",
      price: "R450 - R500",
      description:
        "Full Arm + Shoulders (R450) or Chest + Abdomen (R500)",
      image: armImage,
      serviceId: "Arms & Torso",
    },
    {
      title: "Back & Booty Package",
      duration: "~1 hr 10 mins",
      price: "R700",
      description: "Full Back Wax + Buttocks Wax / Butt-Crack Area.",
      image: backImage,
      serviceId: "Back & Booty Package",
    },
    {
      title: "Ultimate Full-Body Wax",
      duration: "~3 hrs",
      price: "R2,300",
      description:
        "Full legs, arms, underarms, bikini/brazilian, full back, buttocks, chest, abdomen — complete hair removal.",
      image: bodyWaxImage,
      serviceId: "Ultimate Full-Body Wax",
    },
  ];

  const individualTreatments = [
    {
      title: "Head, Neck & Shoulder Massage",
      duration: "30 mins",
      price: "R300",
      description: "Targeted relief for upper body tension and stress.",
      image: neckShoulderImage,
      serviceId: "Head, Neck & Shoulder Massage",
    },
    {
      title: "Hand & Arm Massage",
      duration: "30 mins",
      price: "R250",
      description: "Soothing massage for tired hands and arms.",
      image: handArmImage,
      serviceId: "Hand & Arm Massage",
    },
    {
      title: "Foot Scrub & Massage",
      duration: "45 mins",
      price: "R400",
      description: "Exfoliating scrub followed by relaxing foot massage.",
      image: footMassageImage,
      serviceId: "Foot Scrub & Massage",
    },
    {
      title: "Full-Body Relaxation",
      duration: "60 mins",
      price: "R650",
      description: "Complete relaxation massage for your entire body.",
      image: massageImage,
      serviceId: "Full-Body Relaxation (60)",
    },
    {
      title: "Full-Body Relaxation",
      duration: "90 mins",
      price: "R900",
      description: "Extended full-body massage for deeper relaxation.",
      image: relaxationImage,
      serviceId: "Full-Body Relaxation (90)",
    },
    {
      title: "Deep Tissue",
      duration: "60 mins",
      price: "R750",
      description: "Therapeutic deep tissue work for muscle tension.",
      image: deepImage,
      serviceId: "Deep Tissue (60)",
    },
    {
      title: "Deep Tissue",
      duration: "90 mins",
      price: "R1,100",
      description: "Extended deep tissue therapy for chronic tension.",
      image: deepTissueImage,
      serviceId: "Deep Tissue (90)",
    },
    {
      title: "Hot Stone",
      duration: "60 mins",
      price: "R800",
      description: "Heated stones for deep muscle relaxation.",
      image: hotStoneImage,
      serviceId: "Hot Stone (60)",
    },
    {
      title: "Hot Stone",
      duration: "90 mins",
      price: "R1,150",
      description: "Extended hot stone treatment for ultimate relaxation.",
      image: stonesImage,
      serviceId: "Hot Stone (90)",
    },
    {
      title: "Deep Cleanse Facial",
      duration: "60 mins",
      price: "R550",
      description: "Professional facial with cleansing and massage.",
      image: facialCImage,
      serviceId: "Deep Cleanse Facial",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-soft py-20">
          <div className="container mx-auto px-4 text-center space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold font-playfair text-foreground">
              Our Services & Pricing
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              All sessions are mobile — therapist arrives with table, linens,
              oils and warm towels. Travel charges apply if more than 5km from city center.
            </p>
          </div>
        </section>

        {/* Package Bundles */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold font-playfair text-center mb-12">
              Package Bundles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {packageBundles.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </section>

        {/* Waxing Packages */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold font-playfair text-center mb-12">
              Waxing & Hair Removal Packages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {waxingPackages.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </section>

        {/* Individual Treatments */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold font-playfair text-center mb-12">
              Individual Treatments
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {individualTreatments.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </section>

        {/* Important Notes */}
        <section className="py-12 gradient-hero text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-4">
              <h3 className="text-2xl font-bold font-playfair mb-6">
                Important Information
              </h3>
              <ul className="space-y-3 text-white/90">
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>
                        Travel charges apply if more than 5km from city center of Pretoria or Johannesburg.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>
                    Quiet, private space required (or private room). Therapist
                    will bring a folding massage table and linens.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>
                      We accept Cash and Card payments on arrival.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
