import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
}

export default function HeroSection({
  title,
  subtitle,
  description,
  primaryButtonText,
  secondaryButtonText,
}: HeroSectionProps) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#0a1929] to-[#0f2942] py-16 md:py-24">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      ></div>

      {/* Glowing orbs */}
      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl"></div>
      <div className="absolute -right-20 bottom-20 h-64 w-64 rounded-full bg-teal-500/20 blur-3xl"></div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <h1 className="mb-2 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-4xl font-extrabold text-transparent md:text-5xl lg:text-6xl">
          {title}
        </h1>
        <h2 className="mb-6 text-2xl font-bold text-white md:text-3xl">
          {subtitle}
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
          {description}
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="bg-gradient-to-r from-emerald-500 to-teal-500 px-8 text-base font-medium hover:from-emerald-600 hover:to-teal-600"
          >
            {primaryButtonText}
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-gray-500 bg-transparent px-8 text-base font-medium text-white hover:bg-gray-800/30"
          >
            {secondaryButtonText} <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
