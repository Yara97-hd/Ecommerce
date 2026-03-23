import { trustBadges } from "@/data/siteContent";
import { Shield, Truck, RefreshCw, CreditCard } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  shield: <Shield size={24} />,
  truck: <Truck size={24} />,
  refresh: <RefreshCw size={24} />,
  creditCard: <CreditCard size={24} />,
};

export default function TrustBar() {
  return (
    <section className="bg-primary-light border-y border-primary/10">
      <div className="max-w-7xl mx-auto px-4 py-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {trustBadges.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-3 justify-center"
            >
              <div className="text-primary shrink-0">
                {iconMap[badge.icon]}
              </div>
              <span className="text-sm font-semibold text-gray-800">
                {badge.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
