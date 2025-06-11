import { ShapesIcon as LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function FeatureCard({
  title,
  description,
  icon: Icon,
}: FeatureCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-gray-700 bg-gray-900/40 p-6 transition-all duration-300 hover:border-blue-500/50 hover:bg-gray-800/50">
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl transition-all duration-300 group-hover:bg-blue-500/20"></div>

      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600/20 to-teal-600/20 text-blue-400">
        <Icon className="h-6 w-6" strokeWidth={1.5} />
      </div>

      <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}
