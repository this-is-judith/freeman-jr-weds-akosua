"use client";

import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <header className="md:bg-navy sticky top-0 left-0 right-0 md:py-3.5 py-2 md:pl-4 pl-2 z-50">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <a
            href="/"
            className="md:text-off-white text-navy text-lg hover:text-gold transition-colors font-mediums"
          >
            #TeteNyame
          </a>

          <div className="hidden md:flex items-center gap-10">
            <nav className="text-off-white flex text-lg items-center gap-12">
              <a href="/" className="hover:text-gold transition-colors">
                Home
              </a>
              <a href="/location" className="hover:text-gold transition-colors">
                Location
              </a>
              <a
                href="/program-outline"
                className="hover:text-gold transition-colors"
              >
                Program
              </a>
              <a
                href="/our-story"
                className="hover:text-gold transition-colors"
              >
                Our Story
              </a>
              <a
                href="/support-us"
                className="hover:text-gold transition-colors"
              >
                Support Us
              </a>
            </nav>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeeNSv_qwW1VjnVttcrXQkKNjX45sboA6ebJBYLP6ok1rwt4g/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-burgundy text-off-white hover:scale-105 transform transition-all font-medium"
            >
              RSVP
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="text-navy p-2"
              aria-label="Open menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="h-screen bg-navy flex flex-col items-center justify-center p-8">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 right-6 text-off-white p-2"
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="flex flex-col items-center gap-8 text-center">
              <a
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="text-off-white text-3xl hover:text-gold transition-colors"
              >
                Home
              </a>
              <a
                href="/location"
                onClick={() => setMobileMenuOpen(false)}
                className="text-off-white text-3xl hover:text-gold transition-colors"
              >
                Location
              </a>
              <a
                href="/program-outline"
                onClick={() => setMobileMenuOpen(false)}
                className="text-off-white text-3xl hover:text-gold transition-colors"
              >
                Program
              </a>
              <a
                href="/our-story"
                onClick={() => setMobileMenuOpen(false)}
                className="text-off-white text-3xl hover:text-gold transition-colors"
              >
                Our Story
              </a>
              <a
                href="/support-us"
                onClick={() => setMobileMenuOpen(false)}
                className="text-off-white text-3xl hover:text-gold transition-colors"
              >
                Support Us
              </a>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeeNSv_qwW1VjnVttcrXQkKNjX45sboA6ebJBYLP6ok1rwt4g/viewform"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 px-8 py-4 bg-burgundy text-off-white hover:bg-burgundy/80 transition-all text-xl font-medium"
              >
                RSVP
              </a>
            </div>

            <div className="absolute bottom-8">
              <span className="text-gold text-2xl">#TeteNyame</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
