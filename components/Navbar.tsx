"use client";

import React from "react";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Navbar = () => {
  const auth = useAuth();
  const loggedIn = auth?.loggedIn;
  const logOut = auth?.logOut;
  const logIn = auth?.logIn;
  const user = auth?.user;

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Image
              src="/car.svg"
              alt="SkillSwap Logo"
              width={40}
              height={40}
              className="mr-3"
            />
            <span className="text-xl md:block hidden font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Carpool
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900">
              Features
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900">
              Pricing
            </a>
            <a href="#about" className="text-gray-600 hover:text-gray-900">
              About
            </a>
          </div>

          {/* Auth Button */}
          <div>
            {loggedIn ? (
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">
                  {user?.addr?.slice(0, 6)}...{user?.addr?.slice(-4)}
                </span>
                <Button
                  variant="outline"
                  onClick={logOut}
                  className="border-purple-600 text-purple-600 hover:bg-purple-50"
                >
                  Disconnect
                </Button>
              </div>
            ) : (
              <Button
                onClick={logIn}
                className="bg-gradient-to-r from-purple-600 to-btn text-white hover:opacity-90"
              >
                Connect Wallet
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
