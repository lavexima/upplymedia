import React from "react";
import SiteHeader from "../components/site-header";
import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <SiteHeader />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-4xl font-bold text-center mb-6">Welcome to Easy Tailwind</h1>
        <p className="text-lg text-center mb-4">
          This is a simple Next.js application styled with Tailwind CSS.
        </p>
        <div className="flex justify-center">
          <Link href="/documentation" className="text-blue-500 hover:underline">
            View Documentation
          </Link>
        </div>
      </main>
    </div>
  );
};

export default HomePage;