import { Button } from "@/components/ui/button";

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Create your free Back4App account",
      description:
        "Sign up in seconds and get immediate access to your scalable backend environment.",
      code: "// No code needed for this step!",
    },
    {
      number: 2,
      title: "Paste your Account Key into your agent",
      description:
        "Connect your AI agent to Back4App with a simple authentication key.",
      code: `// In your AI agent's conversation
const Back4app = require('back4app-mcp');
const client = new Back4app.Client('YOUR_ACCOUNT_KEY');`,
    },
    {
      number: 3,
      title: 'Ask your AI: "Create a Task class" — watch it ship',
      description:
        "Your AI agent can now create and manage your backend infrastructure.",
      code: `// AI generated code running on Back4App
await client.createClass('Task', {
  title: { type: 'String', required: true },
  description: { type: 'String' },
  status: { type: 'String', defaultValue: 'pending' }
});

// Create a new task
const task = await client.create('Task', {
  title: 'Build an awesome app',
  description: 'Using Back4App MCP'
});`,
    },
  ];

  return (
    <div className="bg-[#081420] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-2 text-3xl font-bold text-white md:text-4xl">
            How It Works
          </h2>
          <p className="mb-12 text-lg text-gray-400">
            Get your AI-powered backend up and running in minutes
          </p>
        </div>

        <div className="mx-auto max-w-4xl space-y-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col rounded-lg border border-gray-700 bg-gray-900/40 md:flex-row"
            >
              {/* Step number */}
              <div className="absolute -left-4 -top-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-teal-600 text-xl font-bold text-white">
                {step.number}
              </div>

              {/* Step content */}
              <div className="p-6 md:w-1/2">
                <h3 className="mb-2 text-xl font-bold text-white">
                  {step.title}
                </h3>
                <p className="text-gray-400">{step.description}</p>
              </div>

              {/* Code example */}
              <div className="border-t border-gray-700 bg-gray-900/60 p-6 md:w-1/2 md:border-l md:border-t-0">
                <pre className="overflow-x-auto rounded bg-black/50 p-4 text-xs text-green-400">
                  <code>{step.code}</code>
                </pre>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-emerald-500 to-teal-500 px-8 text-base font-medium hover:from-emerald-600 hover:to-teal-600"
          >
            Get Started Free
          </Button>
        </div>
      </div>
    </div>
  );
}
