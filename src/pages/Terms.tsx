import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-5xl font-bold font-playfair text-foreground mb-8">
            Terms & Conditions
          </h1>
          
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              By booking with SHARMORIA, you agree to our service terms.
              Cancellations within 24 hours may be charged.
            </p>

            <h2 className="text-3xl font-bold font-playfair text-foreground mt-12 mb-4">
              Booking & Cancellation Policy
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              All bookings must be made at least 24 hours in advance.
              Cancellations or rescheduling requests made less than 24 hours
              before the appointment may be subject to a cancellation fee of up
              to 50% of the service price.
            </p>

            <h2 className="text-3xl font-bold font-playfair text-foreground mt-12 mb-4">
              Service Requirements
            </h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>
                Clients must provide a quiet, private space for the treatment
              </li>
              <li>A clean, flat surface area of at least 2m x 2m is required</li>
              <li>Adequate lighting and room temperature control</li>
              <li>Access to water and bathroom facilities</li>
              <li>Parking or drop-off area for our therapist</li>
            </ul>

            <h2 className="text-3xl font-bold font-playfair text-foreground mt-12 mb-4">
              Payment Terms
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Payment is due at the time of service. We currently accept cash
              payments. Full payment is required before the therapist leaves
              your premises.
            </p>

            <h2 className="text-3xl font-bold font-playfair text-foreground mt-12 mb-4">
              Travel Fees
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Services within 20km of Johannesburg or Pretoria city centers are
              included in the service price. Additional travel beyond 20km will
              be charged at R2 per kilometer.
            </p>

            <h2 className="text-3xl font-bold font-playfair text-foreground mt-12 mb-4">
              Health & Safety
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Clients must disclose any health conditions, allergies, or
              injuries that may affect the treatment. SHARMORIA reserves the
              right to refuse service if we believe it may be unsafe or
              inappropriate.
            </p>

            <h2 className="text-3xl font-bold font-playfair text-foreground mt-12 mb-4">
              Liability
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              While we take every precaution to ensure your safety and
              satisfaction, SHARMORIA is not liable for any adverse reactions,
              injuries, or damages that may occur during or after treatment,
              unless caused by negligence on our part.
            </p>

            <h2 className="text-3xl font-bold font-playfair text-foreground mt-12 mb-4">
              Code of Conduct
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We expect all clients to treat our therapists with respect and
              professionalism. Any inappropriate behavior will result in
              immediate termination of service without refund.
            </p>

            <p className="text-muted-foreground leading-relaxed mt-8">
              For questions about our terms and conditions, please contact us at{" "}
              <a
                href="tel:+27762935665"
                className="text-primary hover:underline"
              >
                +27 76 293 5665
              </a>
              .
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
