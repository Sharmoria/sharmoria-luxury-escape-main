import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-5xl font-bold font-playfair text-foreground mb-8">
            Privacy Policy
          </h1>
          
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
            </p>

            <p className="text-muted-foreground leading-relaxed">
              At SHARMORIA, we are committed to protecting your privacy and ensuring the security of your personal information.
              This Privacy Policy outlines how we collect, use, store, and protect your data when you use our mobile spa services.
              By booking our services, you consent to the practices described in this policy.
            </p>

            <h2 className="text-3xl font-bold font-playfair text-foreground mt-12 mb-4">
              1. Information We Collect
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              To provide you with exceptional service, we collect the following personal information:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Contact Information:</strong> Full name, email address, phone number</li>
              <li><strong>Service Details:</strong> Service address, preferred appointment dates and times, selected services</li>
              <li><strong>Payment Information:</strong> Preferred payment method (cash or card)</li>
              <li><strong>Health Information:</strong> Any health conditions, allergies, or medical concerns relevant to your treatment (collected with your consent)</li>
              <li><strong>Communication Records:</strong> Records of correspondence between you and SHARMORIA</li>
            </ul>

            <h2 className="text-3xl font-bold font-playfair text-foreground mt-12 mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Your personal information is used exclusively for the following purposes:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Processing and confirming your service bookings</li>
              <li>Communicating with you regarding appointments, cancellations, or rescheduling</li>
              <li>Delivering personalized spa services tailored to your needs and preferences</li>
              <li>Maintaining records for business operations and legal compliance</li>
              <li>Improving our service quality and customer experience</li>
              <li>Sending promotional offers and updates (only with your explicit consent)</li>
            </ul>

            <h2 className="text-3xl font-bold font-playfair text-foreground mt-12 mb-4">
              3. Data Security and Storage
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We take data security seriously and implement appropriate technical and organizational measures to protect your information:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>All personal data is stored securely and encrypted</li>
              <li>Access to personal information is restricted to authorized personnel only</li>
              <li>We retain your information for up to 3 years for business and legal purposes</li>
              <li>After the retention period, your data is securely deleted or anonymized</li>
            </ul>

            <h2 className="text-3xl font-bold font-playfair text-foreground mt-12 mb-4">
              4. Sharing Your Information
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              SHARMORIA does not sell, rent, or trade your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Service Providers:</strong> With our certified therapists who provide services to you</li>
              <li><strong>Legal Obligations:</strong> When required by law, court order, or governmental authority</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets</li>
            </ul>

            <h2 className="text-3xl font-bold font-playfair text-foreground mt-12 mb-4">
              5. Your Rights and Choices
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Under applicable data protection laws, you have the following rights:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Right to Access:</strong> Request a copy of the personal data we hold about you</li>
              <li><strong>Right to Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Right to Deletion:</strong> Request deletion of your personal data (subject to legal obligations)</li>
              <li><strong>Right to Object:</strong> Object to processing of your data for marketing purposes</li>
              <li><strong>Right to Data Portability:</strong> Request transfer of your data to another service provider</li>
              <li><strong>Right to Withdraw Consent:</strong> Withdraw your consent at any time for data processing based on consent</li>
            </ul>

            <h2 className="text-3xl font-bold font-playfair text-foreground mt-12 mb-4">
              6. Cookies and Tracking Technologies
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website uses cookies and similar technologies to enhance your browsing experience. You can control cookie preferences through your browser settings.
            </p>

            <h2 className="text-3xl font-bold font-playfair text-foreground mt-12 mb-4">
              7. Changes to This Privacy Policy
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements.
              Any updates will be posted on this page with a revised effective date. We encourage you to review this policy regularly.
            </p>

            <h2 className="text-3xl font-bold font-playfair text-foreground mt-12 mb-4">
              8. Contact Us
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact us:
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong>SHARMORIA Mobile Spa Services</strong><br />
              Phone: <a href="tel:+27762935665" className="text-primary hover:underline">+27 76 293 5665</a><br />
              Service Area: Johannesburg & Pretoria
            </p>

            <p className="text-muted-foreground leading-relaxed mt-8">
              By using our services, you acknowledge that you have read and understood this Privacy Policy.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
