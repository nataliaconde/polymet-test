import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

export default function HeroMCP() {
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
        <h1 className="mb-4 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-4xl font-extrabold text-transparent md:text-5xl lg:text-6xl">
          Let Your AI Build the Backend
        </h1>
        <h2 className="mx-auto mb-6 max-w-3xl text-xl font-medium text-gray-300 md:text-2xl">
          Connect Cursor, Claude or any MCP agent to a scalable backend in 5
          minutes
        </h2>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="bg-gradient-to-r from-emerald-500 to-teal-500 px-8 text-base font-medium hover:from-emerald-600 hover:to-teal-600"
          >
            Get Started Free
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-gray-500 bg-transparent px-8 text-base font-medium text-white hover:bg-gray-800/30"
          >
            View Documentation <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Code preview mockup */}
        <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-lg border border-gray-700 bg-gray-900/60 shadow-lg">
          <div className="flex items-center border-b border-gray-700 bg-gray-900/80 px-4 py-2">
            <div className="flex space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
            </div>
            <div className="ml-4 text-xs text-gray-400">
              AI Agent Interaction
            </div>
          </div>
          <div className="p-4 text-left">
            <div className="mb-4 flex items-start">
              <div className="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                You
              </div>
              <div className="rounded-lg bg-gray-800 p-3">
                <p className="text-sm text-gray-300">
                  Create a Task class with title, description, and status fields
                </p>
              </div>
            </div>
            <div className="mb-4 flex items-start">
              <div className="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-purple-600 text-white">
                AI
              </div>
              <div className="rounded-lg bg-gray-800 p-3">
                <p className="mb-2 text-sm text-gray-300">
                  I'll create a Task class with those fields using Back4app:
                </p>
                <pre className="overflow-x-auto rounded bg-gray-900 p-2 text-xs text-green-400">
                  <code>
                    {`// Creating Task class with Back4app
const Back4app = require('back4app-mcp');
const client = new Back4app.Client('YOUR_ACCOUNT_KEY');

// Define the Task class schema
await client.createClass('Task', {
  title: { type: 'String', required: true },
  description: { type: 'String' },
  status: { type: 'String', defaultValue: 'pending' }
});

console.log('Task class created successfully!');`}
                  </code>
                </pre>
                <p className="mt-2 text-sm text-gray-300">
                  The Task class has been created! You can now create, query,
                  update, and delete tasks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
