import React from "react";
import Image from "next/image";
import { NavLinks } from "@/constants";
import Link from "next/link";
import AuthProviders from "./AuthProviders";

const Navbar = () => {
  const session = null; // Assuming this is where your session information is obtained

  return (
    <div className="flex justify-between items-center py-4 px-6">
      {/* Logo */}
      <div className="flex items-center">
        <div className="w-32">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={130}
            height={34}
            className="object-contain"
          />
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex gap-4">
        {NavLinks.map((link) => (
          <div key={link.key}>
            <Link href={link.href}>
              <h1 className="text-lg font-bold">{link.text}</h1>
            </Link>
          </div>
        ))}
      </div>

      {/* Conditional Rendering based on session */}
      <div className="flex gap-3">
        {session ? (
          <>
            UserPhoto
            <Link href={"/create-project"}>Share Work</Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </div>
  );
};

export default Navbar;
