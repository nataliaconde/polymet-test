import { Button } from "@/components/ui/button";
import { CodeIcon, KeyIcon, UserPlusIcon } from "lucide-react";

export default function GetStartedSection() {
  return (
    <div className="bg-[#081420] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold text-white md:text-4xl mb-4">
            Get Started <span className="text-gray-400">(MCP Setup)</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-600/20 to-teal-600/20 text-blue-400 border border-blue-500/30">
              <UserPlusIcon className="h-8 w-8" strokeWidth={1.5} />
            </div>
            <div className="flex items-center mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white font-bold mr-2">
                1
              </div>
              <h3 className="text-xl font-bold text-white">Sign Up</h3>
            </div>
            <p className="text-gray-300 text-center">Free, no card needed.</p>
            <Button className="mt-6 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600">
              Create Account
            </Button>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <div className="mb-6 relative">
              <div className="h-16 w-64 rounded-md bg-[#0a1929] border border-gray-700 overflow-hidden">
                <div className="h-8 bg-[#0f2942] border-b border-gray-700 flex items-center px-3">
                  <div className="text-xs text-gray-400">Account Keys</div>
                </div>
                <div className="p-3 flex items-center">
                  <KeyIcon
                    className="h-5 w-5 text-blue-400 mr-2"
                    strokeWidth={1.5}
                  />

                  <div className="text-xs text-gray-300 truncate">
                    YOUR_ACCOUNT_KEY
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white font-bold mr-2">
                2
              </div>
              <h3 className="text-xl font-bold text-white">Grab Your Key</h3>
            </div>
            <p className="text-gray-300 text-center">From your dashboard.</p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-600/20 to-teal-600/20 text-blue-400 border border-blue-500/30">
              <CodeIcon className="h-8 w-8" strokeWidth={1.5} />
            </div>
            <div className="flex items-center mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white font-bold mr-2">
                3
              </div>
              <h3 className="text-xl font-bold text-white">Connect</h3>
            </div>
            <p className="text-gray-300 text-center">
              Paste it into your AI's MCP settings.
            </p>
            <div className="mt-6 w-full max-w-xs">
              <div className="rounded-md bg-gray-900 p-3 text-xs text-green-400 font-mono overflow-x-auto">
                <pre>
                  {`"mcpServers": {
  "back4app": {
    "command": "npx",
    "args": ["@back4app/mcp-server-back4app", 
      "--account-key", "<YOUR_KEY>"]
  }
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
