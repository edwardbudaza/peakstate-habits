"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useSession, signIn } from "next-auth/react";
import UserMenu from "./user-menu"; // Import the UserMenu component

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session } = useSession();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-2 rounded-md flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
            </div>
            <div className="ml-3">
              <span className="text-2xl font-light flex items-center">
                <span className="font-bold text-cyan-600">PeakState</span>
                <span className="font-light text-gray-700 ml-1">Habits</span>
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-cyan-600 text-sm font-medium transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-cyan-600 text-sm font-medium transition-colors duration-300"
            >
              Features
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-cyan-600 text-sm font-medium transition-colors duration-300"
            >
              Pricing
            </a>
            <div className="relative group">
              <button className="text-gray-700 group-hover:text-cyan-600 text-sm font-medium flex items-center transition-colors duration-300">
                Resources
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Documentation
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Tutorials
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Blog
                </a>
              </div>
            </div>
          </nav>

          {/* Authentication / User Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {session?.user ? (
              <UserMenu
                user={{
                  name: session?.user?.name ?? undefined,
                  email: session?.user?.email ?? undefined,
                  image: session?.user?.image ?? undefined,
                }}
              />
            ) : (
              <>
                <button
                  onClick={() => signIn()}
                  className="px-6 py-2 rounded-lg text-sm font-medium border border-cyan-600 text-cyan-600 hover:bg-gray-50 transition-colors duration-300"
                >
                  Log in
                </button>
                <button
                  onClick={() => signIn()}
                  className="px-6 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:opacity-90 transition-opacity duration-300 shadow-md"
                >
                  Sign up
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="text-gray-700 hover:text-cyan-600 focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-cyan-600 hover:bg-gray-50"
            >
              Home
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-cyan-600 hover:bg-gray-50"
            >
              Features
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-cyan-600 hover:bg-gray-50"
            >
              Pricing
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-cyan-600 hover:bg-gray-50"
            >
              Resources
            </a>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center justify-center gap-4 px-4">
              {session?.user ? (
                <UserMenu
                  user={{
                    name: session?.user?.name ?? undefined,
                    email: session?.user?.email ?? undefined,
                    image: session?.user?.image ?? undefined,
                  }}
                />
              ) : (
                <>
                  <button
                    onClick={() => signIn()}
                    className="w-full px-4 py-2 rounded-lg text-sm font-medium border border-cyan-600 text-cyan-600 hover:bg-gray-50 transition-colors duration-300"
                  >
                    Log in
                  </button>
                  <button
                    onClick={() => signIn()}
                    className="w-full px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:opacity-90 transition-opacity duration-300 shadow-md"
                  >
                    Sign up
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
