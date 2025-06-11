import { Link } from "react-router-dom";
import { GithubIcon, TwitterIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-[#081420] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          {/* Logo and Description */}
          <div className="col-span-2 mb-8 lg:col-span-2">
            <Link to="/" className="mb-4 flex items-center">
              <span className="text-xl font-bold text-white">Back4app</span>
              <span className="ml-1 rounded-md bg-gradient-to-r from-blue-500 to-teal-400 px-1.5 py-0.5 text-xs font-bold text-white">
                MCP
              </span>
            </Link>
            <p className="mb-4 text-sm text-gray-400">
              The scalable backend platform that lets your AI agents build and
              manage applications without the complexity of infrastructure.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/back4app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/back4app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div className="col-span-1">
            <h3 className="mb-3 text-sm font-semibold text-white">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/features" className="text-gray-400 hover:text-white">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-400 hover:text-white">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/docs" className="text-gray-400 hover:text-white">
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  to="/changelog"
                  className="text-gray-400 hover:text-white"
                >
                  Changelog
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className="col-span-1">
            <h3 className="mb-3 text-sm font-semibold text-white">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/tutorials"
                  className="text-gray-400 hover:text-white"
                >
                  Tutorials
                </Link>
              </li>
              <li>
                <Link
                  to="/community"
                  className="text-gray-400 hover:text-white"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-gray-400 hover:text-white">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="col-span-1">
            <h3 className="mb-3 text-sm font-semibold text-white">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/legal" className="text-gray-400 hover:text-white">
                  Legal
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="mb-4 text-sm text-gray-500 md:mb-0">
              © {new Date().getFullYear()} Back4app, Inc. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                to="/privacy"
                className="text-sm text-gray-500 hover:text-white"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-sm text-gray-500 hover:text-white"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
