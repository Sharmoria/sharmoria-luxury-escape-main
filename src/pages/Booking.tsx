import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import { CircleAlert as AlertCircle, CircleCheck as CheckCircle2, Plus, X } from "lucide-react";
import { services, getServiceByName, MINIMUM_BOOKING_AMOUNT, type Service } from "@/data/services";

const Booking = () => {
  const [searchParams] = useSearchParams();
  const preselectedServiceName = searchParams.get("service") || "";
  
  const [selectedServices, setSelectedServices] = useState<Service[]>([]);
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    idDocument: null as File | null,
    paymentMethod: "cash",
  });

  // Pre-select service from URL if exists
  useEffect(() => {
    if (preselectedServiceName) {
      const service = getServiceByName(preselectedServiceName);
      if (service && !selectedServices.find(s => s.id === service.id)) {
        setSelectedServices([service]);
      }
    }
  }, [preselectedServiceName]);

  const totalAmount = selectedServices.reduce((sum, service) => sum + service.price, 0);
  const meetsMinimum = totalAmount >= MINIMUM_BOOKING_AMOUNT;
  const amountNeeded = MINIMUM_BOOKING_AMOUNT - totalAmount;

  const toggleService = (service: Service) => {
    const isSelected = selectedServices.find(s => s.id === service.id);
    
    if (isSelected) {
      setSelectedServices(selectedServices.filter(s => s.id !== service.id));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const removeService = (serviceId: string) => {
    setSelectedServices(selectedServices.filter(s => s.id !== serviceId));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (selectedServices.length === 0) {
      toast.error("Please select at least one service");
      return;
    }

    if (!meetsMinimum) {
      toast.error(`Minimum booking amount is R${MINIMUM_BOOKING_AMOUNT}. Please add more services.`);
      return;
    }

    const bookingData = {
      id: `bk_${Date.now()}`,
      services: selectedServices.map(s => ({ name: s.name, price: s.price })),
      totalAmount,
      ...formData,
      createdAt: new Date().toISOString(),
    };

    // Save to localStorage
    const existingBookings = JSON.parse(
      localStorage.getItem("sharmoria_bookings") || "[]"
    );
    existingBookings.push(bookingData);
    localStorage.setItem(
      "sharmoria_bookings",
      JSON.stringify(existingBookings)
    );

    toast.success(
      "Booking received! We will contact you to confirm. Thank you!"
    );

    // Reset form
    setSelectedServices([]);
    setFormData({
      date: "",
      time: "",
      name: "",
      email: "",
      phone: "",
      address: "",
      idDocument: null,
      paymentMethod: "cash",
    });
  };

  const handleChange = (field: string, value: string | File | null) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const groupedServices = {
    package: services.filter(s => s.category === "package"),
    waxing: services.filter(s => s.category === "waxing"),
    massage: services.filter(s => s.category === "massage"),
    facial: services.filter(s => s.category === "facial"),
    "waxing-single": services.filter(s => s.category === "waxing-single"),
    addon: services.filter(s => s.category === "addon"),
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12 space-y-4">
            <h1 className="text-5xl font-bold font-playfair text-foreground">
              Book an Appointment
            </h1>
            <p className="text-muted-foreground">
              Select your services and preferred appointment time
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Service Selection */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-lg shadow-medium p-6">
                <h2 className="text-2xl font-bold font-playfair mb-4">
                  Select Services
                </h2>
                
                {/* Minimum booking notice */}
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-6">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">
                        Minimum Booking: R{MINIMUM_BOOKING_AMOUNT}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        For clients located more than 5km from the city center of Pretoria or Johannesburg,
                        we require a minimum booking of R{MINIMUM_BOOKING_AMOUNT}. Feel free to combine multiple services to meet this amount.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Package Bundles */}
                <div className="mb-6">
                  <h3 className="font-semibold text-lg mb-3 text-foreground">Package Bundles</h3>
                  <div className="space-y-2">
                    {groupedServices.package.map((service) => (
                      <div
                        key={service.id}
                        className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted transition-colors cursor-pointer"
                        onClick={() => toggleService(service)}
                      >
                        <Checkbox
                          checked={!!selectedServices.find(s => s.id === service.id)}
                          onCheckedChange={() => toggleService(service)}
                        />
                        <div className="flex-1">
                          <p className="font-medium">{service.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {service.duration}
                          </p>
                        </div>
                        <p className="font-bold text-primary">R{service.price}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Massage Services */}
                <div className="mb-6">
                  <h3 className="font-semibold text-lg mb-3 text-foreground">Massage Services</h3>
                  <div className="space-y-2">
                    {groupedServices.massage.map((service) => (
                      <div
                        key={service.id}
                        className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted transition-colors cursor-pointer"
                        onClick={() => toggleService(service)}
                      >
                        <Checkbox
                          checked={!!selectedServices.find(s => s.id === service.id)}
                          onCheckedChange={() => toggleService(service)}
                        />
                        <div className="flex-1">
                          <p className="font-medium">{service.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {service.duration}
                          </p>
                        </div>
                        <p className="font-bold text-primary">R{service.price}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Waxing Packages */}
                <div className="mb-6">
                  <h3 className="font-semibold text-lg mb-3 text-foreground">Waxing Packages</h3>
                  <div className="space-y-2">
                    {groupedServices.waxing.map((service) => (
                      <div
                        key={service.id}
                        className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted transition-colors cursor-pointer"
                        onClick={() => toggleService(service)}
                      >
                        <Checkbox
                          checked={!!selectedServices.find(s => s.id === service.id)}
                          onCheckedChange={() => toggleService(service)}
                        />
                        <div className="flex-1">
                          <p className="font-medium">{service.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {service.duration}
                          </p>
                        </div>
                        <p className="font-bold text-primary">R{service.price}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Individual Waxing */}
                <div className="mb-6">
                  <h3 className="font-semibold text-lg mb-3 text-foreground">Individual Waxing Services</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {groupedServices["waxing-single"].map((service) => (
                      <div
                        key={service.id}
                        className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted transition-colors cursor-pointer"
                        onClick={() => toggleService(service)}
                      >
                        <Checkbox
                          checked={!!selectedServices.find(s => s.id === service.id)}
                          onCheckedChange={() => toggleService(service)}
                        />
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-sm truncate">{service.name}</p>
                        </div>
                        <p className="font-bold text-primary text-sm">R{service.price}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Facial & Add-ons */}
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-foreground">Facial & Add-ons</h3>
                  <div className="space-y-2">
                    {[...groupedServices.facial, ...groupedServices.addon].map((service) => (
                      <div
                        key={service.id}
                        className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted transition-colors cursor-pointer"
                        onClick={() => toggleService(service)}
                      >
                        <Checkbox
                          checked={!!selectedServices.find(s => s.id === service.id)}
                          onCheckedChange={() => toggleService(service)}
                        />
                        <div className="flex-1">
                          <p className="font-medium">{service.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {service.duration}
                          </p>
                        </div>
                        <p className="font-bold text-primary">R{service.price}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Summary & Form */}
            <div className="space-y-6">
              {/* Selected Services Summary */}
              <div className="bg-white rounded-lg shadow-medium p-6 lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto">
                <h2 className="text-xl font-bold font-playfair mb-4">
                  Booking Summary
                </h2>

                {selectedServices.length === 0 ? (
                  <p className="text-muted-foreground text-center py-8">
                    No services selected yet
                  </p>
                ) : (
                  <div className="space-y-3 mb-4">
                    {selectedServices.map((service) => (
                      <div
                        key={service.id}
                        className="flex items-start gap-2 p-3 bg-muted rounded-lg"
                      >
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-sm">{service.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {service.duration}
                          </p>
                        </div>
                        <p className="font-bold text-primary text-sm whitespace-nowrap">
                          R{service.price}
                        </p>
                        <button
                          onClick={() => removeService(service.id)}
                          className="text-muted-foreground hover:text-destructive transition-colors"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                <div className="border-t pt-4 space-y-3">
                  <div className="flex justify-between items-center">
                    <p className="font-semibold">Total:</p>
                    <p className="text-2xl font-bold text-primary">
                      R{totalAmount}
                    </p>
                  </div>

                  {!meetsMinimum && selectedServices.length > 0 && (
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                      <div className="flex items-start gap-2">
                        <AlertCircle className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
                        <div className="text-sm">
                          <p className="font-semibold text-amber-900">
                            Add R{amountNeeded} more
                          </p>
                          <p className="text-amber-700">
                            to meet the R{MINIMUM_BOOKING_AMOUNT} minimum
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {meetsMinimum && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        <p className="text-sm font-semibold text-green-900">
                          Minimum booking met!
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Booking Form */}
              {selectedServices.length > 0 && (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-lg shadow-medium p-6 space-y-4"
                >
                  <h3 className="font-semibold text-lg mb-4">Your Details</h3>

                  <div className="space-y-2">
                    <Label htmlFor="date">Date *</Label>
                    <Input
                      type="date"
                      id="date"
                      value={formData.date}
                      onChange={(e) => handleChange("date", e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time">Time *</Label>
                    <Input
                      type="time"
                      id="time"
                      value={formData.time}
                      onChange={(e) => handleChange("time", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      type="text"
                      id="name"
                      placeholder="Your full name"
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
                    <Label htmlFor="phone">Phone *</Label>
                    <Input
                      type="tel"
                      id="phone"
                      placeholder="+27 76 293 5665"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Service Address *</Label>
                    <Input
                      type="text"
                      id="address"
                      placeholder="Street, Suburb, City"
                      value={formData.address}
                      onChange={(e) => handleChange("address", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="idDocument">ID/Passport Document *</Label>
                    <Input
                      type="file"
                      id="idDocument"
                      accept="image/*,.pdf"
                      onChange={(e) => handleChange("idDocument", e.target.files?.[0] || null)}
                      required
                      className="cursor-pointer"
                    />
                    <p className="text-xs text-muted-foreground">
                      Please upload a clear photo or scan of your ID or passport
                    </p>
                  </div>

                  <div className="space-y-3">
                    <Label>Payment Method *</Label>
                    <RadioGroup
                      value={formData.paymentMethod}
                      onValueChange={(value) => handleChange("paymentMethod", value)}
                      className="space-y-2"
                    >
                      <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-muted transition-colors cursor-pointer">
                        <RadioGroupItem value="cash" id="cash" />
                        <Label htmlFor="cash" className="cursor-pointer flex-1">
                          Cash on Arrival
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-muted transition-colors cursor-pointer">
                        <RadioGroupItem value="card" id="card" />
                        <Label htmlFor="card" className="cursor-pointer flex-1">
                          Card on Arrival
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <Button
                    type="submit"
                    className="w-full gradient-hero text-white hover:opacity-90 transition-opacity"
                    disabled={!meetsMinimum}
                  >
                    {meetsMinimum ? "Confirm Booking" : `Add R${amountNeeded} More to Book`}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    We'll confirm your booking within 24 hours
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Booking;

