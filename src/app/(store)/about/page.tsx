import { Leaf, ShieldCheck, Zap, Users } from "lucide-react";
import Link from "next/link";

const stats = [
  { value: "50,000+", label: "Happy Customers" },
  { value: "100,000+", label: "Devices Sold" },
  { value: "12 Months", label: "Warranty on Every Device" },
  { value: "95%", label: "Customer Satisfaction" },
];

const steps = [
  {
    icon: ShieldCheck,
    title: "Rigorous Inspection",
    description:
      "Every device goes through a 72-point quality check. We test hardware, software, battery health, and cosmetic condition before it reaches you.",
  },
  {
    icon: Zap,
    title: "Grade & Price",
    description:
      "Devices are graded Excellent, Good, or Fair — and priced honestly. You always know exactly what you're getting.",
  },
  {
    icon: Leaf,
    title: "Extend Device Life",
    description:
      "Choosing refurbished keeps electronics out of landfill. Each Revibe purchase saves up to 70 kg of CO₂ compared to buying new.",
  },
  {
    icon: Users,
    title: "Backed by Support",
    description:
      "Our team is based in the UAE and ready to help via chat, email, or phone. Every order includes a 12-month warranty and 10-day returns.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-linear-to-br from-primary/10 to-primary/5 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            About Revibe
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Revibe is the UAE&apos;s leading marketplace for certified renewed
            electronics. We make premium devices accessible — without the
            premium price tag.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 border-b border-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">
                {stat.value}
              </p>
              <p className="text-gray-600 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
            <p>
              Revibe was founded in Dubai with a simple idea: buying a great
              smartphone shouldn&apos;t require spending a month&apos;s salary. We saw
              millions of perfectly functional devices sitting in drawers while
              people stretched budgets to afford the latest model new.
            </p>
            <p>
              So we built a platform that puts trust at the centre. Every device
              is sourced, inspected, graded, and sold with a warranty — because
              &quot;refurbished&quot; should mean confidence, not compromise.
            </p>
            <p>
              Today Revibe serves customers across the UAE with same-day express
              delivery, buy-now-pay-later options, and a customer support team
              that actually picks up the phone.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            How We Certify Devices
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to shop smarter?
          </h2>
          <p className="text-gray-600 mb-8">
            Browse thousands of certified refurbished devices — with free
            delivery and a 12-month warranty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/category/iphones"
              className="bg-primary text-white px-8 py-3 rounded-xl font-semibold hover:bg-primary-dark transition-colors"
            >
              Shop Now
            </Link>
            <Link
              href="/contact"
              className="border border-gray-200 text-gray-700 px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
