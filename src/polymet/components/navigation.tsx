import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MenuIcon } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative z-50 border-b border-gray-800">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-white">Back4app</span>
            <span className="ml-1 rounded-md bg-gradient-to-r from-blue-500 to-teal-400 px-1.5 py-0.5 text-xs font-bold text-white">
              MCP
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center space-x-6 md:flex">
          <Link
            to="/features"
            className="text-sm text-gray-300 hover:text-white"
          >
            Features
          </Link>
          <Link to="/docs" className="text-sm text-gray-300 hover:text-white">
            Docs
          </Link>
          <Link
            to="/pricing"
            className="text-sm text-gray-300 hover:text-white"
          >
            Pricing
          </Link>
          <Link to="/blog" className="text-sm text-gray-300 hover:text-white">
            Blog
          </Link>
        </div>

        {/* CTA Buttons */}
        <div className="hidden items-center space-x-3 md:flex">
          <Link to="/login" className="text-sm text-gray-300 hover:text-white">
            Log In
          </Link>
          <Button
            size="sm"
            className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-600 hover:to-teal-600"
          >
            Sign Up Free
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            <MenuIcon className="h-6 w-6 text-gray-300" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute left-0 right-0 top-16 border-b border-gray-800 bg-[#0a1929] p-4 md:hidden">
          <div className="flex flex-col space-y-4">
            <Link
              to="/features"
              className="text-sm text-gray-300 hover:text-white"
              onClick={toggleMenu}
            >
              Features
            </Link>
            <Link
              to="/docs"
              className="text-sm text-gray-300 hover:text-white"
              onClick={toggleMenu}
            >
              Docs
            </Link>
            <Link
              to="/pricing"
              className="text-sm text-gray-300 hover:text-white"
              onClick={toggleMenu}
            >
              Pricing
            </Link>
            <Link
              to="/blog"
              className="text-sm text-gray-300 hover:text-white"
              onClick={toggleMenu}
            >
              Blog
            </Link>
            <div className="flex flex-col space-y-2 pt-2">
              <Link
                to="/login"
                className="text-center text-sm text-gray-300 hover:text-white"
                onClick={toggleMenu}
              >
                Log In
              </Link>
              <Button
                size="sm"
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-600 hover:to-teal-600"
                onClick={toggleMenu}
              >
                Sign Up Free
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
