import { QuoteIcon } from "lucide-react";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  avatarUrl: string;
}

function Testimonial({ quote, author, role, avatarUrl }: TestimonialProps) {
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
          <p className="text-sm text-gray-400">{role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Built a weekend MVP with Claude + Back4App. Zero backend headaches.",
      author: "Jane C.",
      role: "SaaS founder",
      avatarUrl: "https://github.com/yusufhilmi.png",
    },
    {
      quote:
        "Our hackathon team saved two days by letting Cursor drive the backend.",
      author: "Mohit S.",
      role: "MLH participant",
      avatarUrl: "https://github.com/furkanksl.png",
    },
    {
      quote:
        "Finally a backend my design students can deploy without touching servers.",
      author: "Kat L.",
      role: "Bootcamp mentor",
      avatarUrl: "https://github.com/kdrnp.png",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#0f2942] to-[#0a1929] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-2 text-3xl font-bold text-white md:text-4xl">
            What Our Users Say
          </h2>
          <p className="mb-12 text-lg text-gray-400">
            Join thousands of developers who are building faster with Back4app
            MCP
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              avatarUrl={testimonial.avatarUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
