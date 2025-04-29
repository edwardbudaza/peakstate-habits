"use client";

import { signOut } from "next-auth/react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function UserMenu({
  user,
}: {
  user: { name?: string; email?: string; image?: string };
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 focus:outline-none"
      >
        {user.image ? (
          <Image
            width={40}
            height={40}
            src={user.image}
            alt="User Avatar"
            className="w-8 h-8 rounded-full object-cover"
          />
        ) : (
          <div className="w-8 h-8 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold">
            {user.name?.[0] ?? "U"}
          </div>
        )}
        <ChevronDown className="w-4 h-4 text-gray-600" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
          <div className="px-4 py-2 text-sm text-gray-700">
            <div className="font-medium">{user.name ?? "User"}</div>
            <div className="text-xs text-gray-500 truncate">
              {user.email ?? ""}
            </div>
          </div>
          <button
            onClick={() => signOut()}
            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}
