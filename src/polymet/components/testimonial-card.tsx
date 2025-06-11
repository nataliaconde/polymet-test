import { QuoteIcon } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl: string;
}

export default function TestimonialCard({
  quote,
  author,
  role,
  company,
  avatarUrl,
}: TestimonialCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-gray-700 bg-gray-900/40 p-6 transition-all duration-300 hover:border-blue-500/50 hover:bg-gray-800/50">
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl transition-all duration-300 group-hover:bg-blue-500/20"></div>

      <QuoteIcon className="mb-4 h-8 w-8 text-blue-400 opacity-50" />

      <p className="mb-6 text-gray-300">{quote}</p>

      <div className="flex items-center">
        <img
          src={avatarUrl}
          alt={author}
          className="mr-4 h-12 w-12 rounded-full border border-gray-700"
        />

        <div>
          <h4 className="font-bold text-white">{author}</h4>
          <p className="text-sm text-gray-400">
            {role}, {company}
          </p>
        </div>
      </div>
    </div>
  );
}
