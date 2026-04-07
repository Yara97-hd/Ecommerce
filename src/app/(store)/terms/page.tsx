const sections = [
  {
    title: "1. Acceptance of Terms",
    content: `By accessing or purchasing from revibe.me, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our platform. These terms are governed by the laws of the United Arab Emirates.`,
  },
  {
    title: "2. Products and Listings",
    content: `All products listed on Revibe are used or refurbished electronics. Each product page clearly states the condition grade (Excellent, Good, or Fair), storage capacity, colour, and any relevant cosmetic or functional notes. Images are representative and individual devices may vary slightly in appearance. We reserve the right to remove or modify listings at any time without notice.`,
  },
  {
    title: "3. Pricing and Payment",
    content: `All prices are displayed in UAE Dirhams (AED) and are inclusive of VAT where applicable. Prices may change without notice, but the price you see at the time of checkout is the price you pay. Payment must be completed in full before an order is dispatched. We accept major credit/debit cards, digital wallets, and approved buy-now-pay-later providers. We reserve the right to cancel orders where payment cannot be verified.`,
  },
  {
    title: "4. Orders and Fulfilment",
    content: `An order confirmation email does not constitute our acceptance of your order — acceptance occurs when we dispatch your item and send a dispatch confirmation. In the event a product becomes unavailable after you place an order, we will notify you and offer a full refund or an alternative product. We aim to dispatch all orders within 1 business day of payment confirmation.`,
  },
  {
    title: "5. Delivery",
    content: `We deliver to addresses across the UAE. Delivery timelines (standard 1–3 business days, express same/next day) are estimates and may vary due to factors outside our control. Revibe is not liable for delays caused by logistics partners, weather, or force majeure events. Risk of loss passes to you upon delivery to the specified address.`,
  },
  {
    title: "6. Returns and Exchanges",
    content: `You may return a device within 10 days of delivery, provided it is in the same condition as received (factory reset, no additional damage, original accessories included). To initiate a return, contact support@revibe.me with your order number. Refunds are processed within 2–5 business days of receiving the returned device. We reserve the right to refuse a return if the device has been damaged after delivery or shows signs of tampering.`,
  },
  {
    title: "7. Warranty",
    content: `All Revibe devices carry a 12-month warranty against manufacturing and hardware defects. This warranty does not cover accidental damage, liquid damage, theft, loss, or damage caused by unauthorised repair or modification. To make a warranty claim, contact warranty@revibe.me. We will repair or replace the device at no cost. The warranty is non-transferable and applies to the original purchaser only.`,
  },
  {
    title: "8. Device Trade-Ins and Sales",
    content: `When selling a device to Revibe through our trade-in programme, you confirm that you are the legal owner of the device, the device is not reported lost or stolen, the device is not subject to any finance or lease agreement, and all personal data has been erased. Revibe is not liable for any data remaining on a device after a trade-in. Quotes are valid for 7 days and may be revised upon physical inspection.`,
  },
  {
    title: "9. Limitation of Liability",
    content: `To the maximum extent permitted by UAE law, Revibe's total liability to you for any claim arising from your use of our platform or purchase of a product is limited to the amount you paid for the specific product giving rise to the claim. We are not liable for indirect, consequential, or punitive damages.`,
  },
  {
    title: "10. Intellectual Property",
    content: `All content on revibe.me — including text, images, logos, and software — is the property of Revibe FZE or its licensors and is protected by UAE and international copyright law. You may not reproduce, redistribute, or create derivative works without our written permission.`,
  },
  {
    title: "11. User Accounts",
    content: `You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. Notify us immediately at contact@revibe.me if you suspect unauthorised use. We reserve the right to suspend or terminate accounts that violate these terms.`,
  },
  {
    title: "12. Changes to Terms",
    content: `We may update these Terms and Conditions at any time. Material changes will be communicated via email or a site notice at least 14 days before they take effect. Continued use of our platform after changes take effect constitutes acceptance of the new terms.`,
  },
  {
    title: "13. Governing Law and Disputes",
    content: `These terms are governed by the laws of the UAE. Any dispute arising from these terms or your use of our platform will be subject to the exclusive jurisdiction of the courts of Dubai, UAE. We encourage you to contact us first at contact@revibe.me to resolve any issue amicably.`,
  },
];

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Terms &amp; Conditions
        </h1>
        <p className="text-sm text-gray-400">Last updated: 1 January 2025</p>
      </div>

      <p className="text-gray-600 leading-relaxed mb-10 text-lg">
        Please read these Terms and Conditions carefully before using the
        Revibe platform or placing an order. By using our services, you agree
        to be bound by these terms.
      </p>

      <div className="space-y-8">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              {section.title}
            </h2>
            <p className="text-gray-600 leading-relaxed">{section.content}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
