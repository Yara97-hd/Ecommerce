import { features } from "@/data/siteContent";
import { CheckCircle, Shield, Award, Headphones } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  checkCircle: <CheckCircle size={28} />,
  shield: <Shield size={28} />,
  award: <Award size={28} />,
  headphones: <Headphones size={28} />,
};

export default function Features() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
          All our devices are original and verified by experts
        </h2>
        <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
          Every device goes through a rigorous inspection process to ensure quality
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-2xl p-6 text-center border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                {iconMap[feature.icon]}
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
