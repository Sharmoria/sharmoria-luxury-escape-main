import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import FeatureCard from "@/components/FeatureCard";
import heroImage from "@/assets/hero-massage.jpg";
import fullBodyImage from "@/assets/full-body-massage.jpg";
import deepTissueImage from "@/assets/deep-tissue.jpg";
import hotStoneImage from "@/assets/hot-stone.jpg";
import flexibleImage from "@/assets/flexible-timing.jpg";
import certifiedImage from "@/assets/certified-therapist.jpg";
import luxuryImage from "@/assets/luxury-experience.jpg";

const Home = () => {
  const featuredServices = [
    {
      title: "Quick Refresh",
      duration: "60 mins",
      price: "R500",
      description:
        "Head, Neck & Shoulder Massage (30 mins) + Hand & Arm Massage (30 mins)",
      image: fullBodyImage,
      serviceId: "Quick Refresh",
    },
    {
      title: "Stress Melt",
      duration: "90 mins",
      price: "R850",
      description:
        "Full-Body Relaxation Massage (60) + Head, Neck & Shoulder (30)",
      image: deepTissueImage,
      serviceId: "Stress Melt",
    },
    {
      title: "Total Indulgence",
      duration: "3 hrs 15 mins",
      price: "R2,100",
      description:
        "Full-Body Relaxation Massage (90) + Deep Cleanse Facial + Foot Scrub & Massage",
      image: hotStoneImage,
      serviceId: "Total Indulgence",
    },
  ];

  const features = [
    {
      image: flexibleImage,
      title: "Flexible Timing",
      description:
        "Evening and weekend visits — we come when it's convenient for you.",
    },
    {
      image: certifiedImage,
      title: "Certified Therapists",
      description:
        "Experienced, vetted professionals with high hygiene standards.",
    },
    {
      image: luxuryImage,
      title: "Luxury Experience",
      description:
        "Premium oils, warm towels, and a soothing ambiance for complete relaxation.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[90vh] min-h-[600px] flex items-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl space-y-6 animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl font-bold text-white font-playfair">
                SHARMORIA
              </h1>
              <p className="text-xl md:text-2xl text-white/90 font-playfair italic">
                Where elegance meets relaxation
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                Experience luxurious mobile massage, waxing and facial services
                in the comfort of your home. Professional therapists, premium
                products, and a calming experience delivered to your door.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/booking">
                  <Button
                    size="lg"
                    className="gradient-hero text-white text-lg hover:opacity-90 transition-opacity shadow-strong"
                  >
                    Book an Appointment
                  </Button>
                </Link>
                <Link to="/services">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20"
                  >
                    View Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 gradient-soft">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold font-playfair text-foreground">
                Featured Packages
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Discover our most popular treatment packages, carefully curated
                for your ultimate relaxation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {featuredServices.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>

            <div className="text-center">
              <Link to="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white transition-all"
                >
                  See Full Services & Pricing →
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold font-playfair text-center mb-12">
              What Our Clients Say
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-soft animate-fade-in-up">
                <p className="text-foreground leading-relaxed mb-4">
                  "Amazing! Therapist arrived on time and the massage was
                  heavenly — my back feels brand new."
                </p>
                <p className="text-primary font-semibold">— Thando</p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-soft animate-fade-in-up">
                <p className="text-foreground leading-relaxed mb-4">
                  "Luxurious experience, and booking was so easy. Will book
                  again."
                </p>
                <p className="text-primary font-semibold">— Priya</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 gradient-hero text-white">
          <div className="container mx-auto px-4 text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold font-playfair">
              Ready to Feel Relaxed?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Book your appointment today and experience the luxury of mobile
              spa services
            </p>
            <Link to="/booking">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 text-lg shadow-strong"
              >
                Book Now — Cash & Card Payments Accepted
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
