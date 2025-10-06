import Header from "@/components/Header";
import Footer from "@/components/Footer";
import certifiedImage from "@/assets/certified-therapist.jpg";
import luxuryImage from "@/assets/luxury-experience.jpg";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-soft py-20">
          <div className="container mx-auto px-4 text-center space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold font-playfair text-foreground">
              About SHARMORIA
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Where elegance meets relaxation
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed">
                SHARMORIA was founded to bring a luxurious, peaceful massage and
                waxing experience into the homes of busy people who still want
                only the best. Our therapists are certified, vetted, and trained
                in both relaxation and remedial techniques. We prioritise
                hygiene, comfort, and the art of relaxation.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold font-playfair text-center mb-12">
              Meet the Team
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <div className="text-center space-y-4 animate-fade-in-up">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-medium">
                  <img
                    src={certifiedImage}
                    alt="Sharmaine - Senior Therapist"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold font-playfair text-foreground">
                  Sharmaine
                </h3>
                <p className="text-primary font-semibold">Senior Therapist</p>
                <p className="text-muted-foreground">
                  10+ years experience, specialising in therapeutic and deep
                  tissue massage.
                </p>
              </div>

              <div className="text-center space-y-4 animate-fade-in-up">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-medium">
                  <img
                    src={luxuryImage}
                    alt="Lebohang - Aromatherapy Specialist"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold font-playfair text-foreground">
                  Lebohang
                </h3>
                <p className="text-primary font-semibold">
                  Aromatherapy Specialist
                </p>
                <p className="text-muted-foreground">
                  Passionate about essential oils and calming rituals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Promises Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-4xl font-bold font-playfair text-center mb-12">
              Our Promises
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-soft animate-fade-in-up">
                <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Professional, Fully-Vetted Therapists
                  </h3>
                  <p className="text-muted-foreground">
                    All our therapists are certified professionals with extensive
                    experience and background checks.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-soft animate-fade-in-up">
                <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    High Hygiene Standards and Clean Linens
                  </h3>
                  <p className="text-muted-foreground">
                    We maintain the highest standards of cleanliness and use only
                    fresh, premium linens for every appointment.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-soft animate-fade-in-up">
                <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Transparent Pricing and Friendly Service
                  </h3>
                  <p className="text-muted-foreground">
                    No hidden fees, no surprises. Just honest, caring service
                    focused on your wellbeing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
