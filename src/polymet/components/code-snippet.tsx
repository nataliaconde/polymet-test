import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CopyIcon } from "lucide-react";
import { useState } from "react";

interface CodeSnippetProps {
  title: string;
  description: string;
  snippets: {
    language: string;
    code: string;
    label: string;
  }[];
}

export default function CodeSnippet({
  title,
  description,
  snippets,
}: CodeSnippetProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-lg border border-gray-700 bg-gray-900/40 p-6">
      <div className="mb-6">
        <h3 className="mb-2 text-2xl font-bold text-white">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>

      <Tabs defaultValue={snippets[0].language} className="w-full">
        <div className="flex items-center justify-between">
          <TabsList className="bg-gray-800/50">
            {snippets.map((snippet) => (
              <TabsTrigger
                key={snippet.language}
                value={snippet.language}
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                {snippet.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleCopy(snippets[0].code)}
            className="text-gray-400 hover:text-white"
          >
            {copied ? "Copied!" : <CopyIcon className="h-4 w-4" />}
          </Button>
        </div>

        {snippets.map((snippet) => (
          <TabsContent
            key={snippet.language}
            value={snippet.language}
            className="mt-4 rounded-lg bg-gray-950 p-4"
          >
            <pre className="overflow-x-auto text-sm text-gray-300">
              <code>{snippet.code}</code>
            </pre>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
