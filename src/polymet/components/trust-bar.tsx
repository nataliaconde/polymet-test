export default function TrustBar() {
  // Mock company logos (in a real implementation, these would be actual logos)
  const companies = [
    { name: "YCombinator", logo: "YC" },
    { name: "Indie Hackers", logo: "IH" },
    { name: "ProductHunt", logo: "PH" },
    { name: "TechCrunch", logo: "TC" },
    { name: "Startup School", logo: "SS" },
  ];

  return (
    <div className="border-y border-gray-800 bg-[#081420] py-8">
      <div className="container mx-auto px-4">
        <p className="mb-6 text-center text-sm font-medium text-gray-400">
          Trusted by indie hackers, YC startups and 12,000+ AI builders
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex h-8 items-center justify-center opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
            >
              {/* In a real implementation, this would be an actual logo image */}
              <div className="flex h-8 w-16 items-center justify-center rounded bg-gray-700/30">
                <span className="text-sm font-bold text-gray-400">
                  {company.logo}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
