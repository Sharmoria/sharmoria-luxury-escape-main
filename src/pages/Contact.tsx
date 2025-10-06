import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const contactData = {
      ...formData,
      createdAt: new Date().toISOString(),
    };

    // Save to localStorage
    const existingContacts = JSON.parse(
      localStorage.getItem("sharmoria_contacts") || "[]"
    );
    existingContacts.push(contactData);
    localStorage.setItem(
      "sharmoria_contacts",
      JSON.stringify(existingContacts)
    );

    toast.success("Message saved. We will reply within 24 hours.");

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const handleChange = (
    field: string,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h1 className="text-5xl font-bold font-playfair text-foreground">
              Get in Touch
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Questions? Group bookings? Corporate events? Send us a message.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-medium p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    type="tel"
                    id="phone"
                    placeholder="+27 76 293 5665"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    rows={5}
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full gradient-hero text-white hover:opacity-90 transition-opacity"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-soft p-8 space-y-6">
                <h2 className="text-2xl font-bold font-playfair text-foreground mb-6">
                  Contact Information
                </h2>

                <div className="space-y-4">
                  <a
                    href="tel:+27762935665"
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Phone
                      </h3>
                      <p className="text-primary group-hover:underline">
                        +27 76 293 5665
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/27762935665"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        WhatsApp
                      </h3>
                      <p className="text-primary group-hover:underline">
                        Chat with us
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-4">
                    <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Service Area
                      </h3>
                      <p className="text-muted-foreground">
                        Johannesburg & Pretoria
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Travel charges apply if more than 5km from city center.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 rounded-lg p-8 border border-primary/20">
                <h3 className="text-xl font-bold font-playfair text-foreground mb-4">
                  Operating Hours
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>Every day: 9:00 AM - 6:00 PM</p>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Book your appointment during our operating hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
