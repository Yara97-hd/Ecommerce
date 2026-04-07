const sections = [
  {
    title: "1. Who We Are",
    content: `Revibe FZE ("Revibe", "we", "us", or "our") operates the e-commerce platform at revibe.me and related mobile applications. We are registered in Dubai, UAE. For privacy enquiries, contact us at privacy@revibe.me.`,
  },
  {
    title: "2. Information We Collect",
    content: `We collect information you provide directly (name, email address, phone number, delivery address, payment details) and information collected automatically when you use our platform (IP address, browser type, pages visited, device identifiers, cookies). We do not collect payment card numbers directly — these are processed by our PCI-DSS compliant payment partners.`,
  },
  {
    title: "3. How We Use Your Information",
    content: `We use your data to process and fulfil orders, send order confirmations and shipping updates, handle returns and warranty claims, respond to customer support enquiries, personalise your browsing experience, send promotional emails (only with your consent), and improve our platform and services. We do not sell your personal data to third parties.`,
  },
  {
    title: "4. Legal Basis for Processing",
    content: `We process your data on the following legal bases: contract performance (to fulfil your orders), legitimate interests (to improve our services and prevent fraud), legal obligation (to comply with UAE law and regulations), and consent (for marketing communications, which you may withdraw at any time).`,
  },
  {
    title: "5. Data Sharing",
    content: `We share your data only as necessary: with logistics partners to deliver your order, with payment processors to complete transactions, with cloud hosting providers who store our data under strict data processing agreements, and with authorities where legally required. All third parties are contractually obligated to protect your data and use it only for the specified purpose.`,
  },
  {
    title: "6. Cookies",
    content: `We use essential cookies (required for the site to function), analytics cookies (to understand how visitors use our site — you may opt out), and preference cookies (to remember your language and cart). You can control non-essential cookies through your browser settings or our cookie consent banner.`,
  },
  {
    title: "7. Data Retention",
    content: `We retain personal data for as long as necessary to provide our services and comply with legal obligations. Order records are kept for 7 years in accordance with UAE commercial law. You may request deletion of your account data at any time (subject to legal retention requirements).`,
  },
  {
    title: "8. Your Rights",
    content: `You have the right to access the personal data we hold about you, request correction of inaccurate data, request deletion of your data (where no legal obligation requires us to retain it), withdraw consent for marketing at any time, and lodge a complaint with the UAE Data Protection Authority. To exercise any of these rights, email privacy@revibe.me.`,
  },
  {
    title: "9. Data Security",
    content: `We use industry-standard security measures including TLS encryption for data in transit, encrypted storage for sensitive data, regular security audits, and strict internal access controls. Despite these measures, no internet transmission is 100% secure. Please use a strong, unique password for your Revibe account.`,
  },
  {
    title: "10. Children",
    content: `Our services are not directed at children under 13. We do not knowingly collect personal data from children. If you believe a child has provided us with personal data, contact us and we will delete it promptly.`,
  },
  {
    title: "11. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. Material changes will be communicated by email or a prominent notice on the site at least 14 days before they take effect. The date at the top of this page shows when the policy was last updated.`,
  },
  {
    title: "12. Contact Us",
    content: `For any privacy-related questions or requests, contact our Data Protection Team at privacy@revibe.me or write to: Revibe FZE, Dubai Internet City, Dubai, UAE.`,
  },
];

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-400">Last updated: 1 January 2025</p>
      </div>

      <p className="text-gray-600 leading-relaxed mb-10 text-lg">
        At Revibe, your privacy matters. This policy explains what personal
        information we collect, how we use it, and your rights in relation to
        it. Please read it carefully before using our platform.
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
