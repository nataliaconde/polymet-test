import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

interface CTASectionProps {
  title: string;
  subtitle: string;
  primaryButtonText: string;
  secondaryButtonText?: string;
}

export default function CTASection({
  title,
  subtitle,
  primaryButtonText,
  secondaryButtonText,
}: CTASectionProps) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#0a1929] to-[#0f2942] py-16">
      {/* Background effects */}
      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl"></div>
      <div className="absolute -right-20 bottom-20 h-64 w-64 rounded-full bg-teal-500/10 blur-3xl"></div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
          {subtitle}
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="bg-gradient-to-r from-emerald-500 to-teal-500 px-8 text-base font-medium hover:from-emerald-600 hover:to-teal-600"
          >
            {primaryButtonText}
          </Button>
          {secondaryButtonText && (
            <Button
              variant="outline"
              size="lg"
              className="border-gray-500 bg-transparent px-8 text-base font-medium text-white hover:bg-gray-800/30"
            >
              {secondaryButtonText} <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
