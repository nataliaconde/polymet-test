import { CheckIcon, XIcon } from "lucide-react";

export default function PainPoints() {
  const painPoints = [
    "Temporary databases vanish overnight.",
    '"Paste-bin" auth is brittle and insecure.',
    "Scaling means rewriting from scratch.",
  ];

  const solutions = [
    "Production database and file storage instantly.",
    "One-line user auth and ACL.",
    "Cloud Functions, jobs & web-hosting out of the box.",
  ];

  return (
    <div className="bg-gradient-to-b from-[#0a1929] to-[#0f2942] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
            AI prototypes die without a backend.
          </h2>

          <div className="mb-12 space-y-4">
            {painPoints.map((point, index) => (
              <div
                key={index}
                className="flex items-center justify-center space-x-3 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3"
              >
                <XIcon className="h-5 w-5 flex-shrink-0 text-red-500" />

                <span className="text-left text-gray-300">{point}</span>
              </div>
            ))}
          </div>

          <h3 className="mb-6 text-2xl font-bold text-white md:text-3xl">
            Back4App MCP fixes that.
          </h3>

          <div className="space-y-4">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="flex items-center justify-center space-x-3 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-3"
              >
                <CheckIcon className="h-5 w-5 flex-shrink-0 text-emerald-500" />

                <span className="text-left text-gray-300">{solution}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
