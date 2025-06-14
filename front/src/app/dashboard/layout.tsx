import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-2 bg-gradient-to-tr from-tertiary to-primary shadow-md">
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold text-white tracking-tight">DevRUSH</span>
        </div>
      </header>
      {/* Main content */}
      <main className="flex-1 px-2 md:px-12 flex justify-start items-center bg-[#F4F4F4]">
        <div className="w-full py-4 px-2 md:px-8">{children}</div>
      </main>
    </div>
  );
}
