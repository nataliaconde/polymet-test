interface StatItemProps {
  value: string;
  label: string;
}

function StatItem({ value, label }: StatItemProps) {
  return (
    <div className="text-center">
      <div className="mb-2 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
        {value}
      </div>
      <div className="text-sm text-gray-400 md:text-base">{label}</div>
    </div>
  );
}

interface StatsSectionProps {
  stats: StatItemProps[];
}

export default function StatsSection({ stats }: StatsSectionProps) {
  return (
    <div className="relative overflow-hidden rounded-lg border border-gray-700 bg-gradient-to-r from-blue-900/30 to-teal-900/30 py-10">
      <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl"></div>
      <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-teal-500/20 blur-3xl"></div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <StatItem key={index} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </div>
  );
}
