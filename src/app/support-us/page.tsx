"use client";

import { useState } from "react";

export default function SupportUs() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div className="bg-off-white">
      {/* Gift Options */}
      <section className="md:pt-28 pt-20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-[1fr_1.5fr] md:grid-cols-2 gap-12">
            {/* Mobile Money */}
            <div className="bg-white border-1 border-navy shadow-lg p-8">
              <h2 className="text-2xl font-bold text-navy text-center mb-6">
                Mobile Money
              </h2>

              <div className="space-y-8 align-items">
                <div className="bg-white border-1 border-navy shadow-lg p-6">
                  <h3 className="font-semibold text-burgundy mb-4">Telecel</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-navy/70">Name:</span>
                      <span className="font-medium text-navy">
                        Freeman Kofi Pabi Osei-Tete
                      </span>
                    </div>
                    <div className="flex justify-between items-center gap-2">
                      <span className="text-navy/70">Number:</span>
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-navy font-mono">
                          0204490324
                        </span>
                        <button
                          onClick={() =>
                            copyToClipboard("0204490324", "telecel")
                          }
                          className="px-3 py-1 text-xs bg-burgundy text-white hover:bg-burgundy/90 transition-all"
                        >
                          {copiedField === "telecel" ? "Copied!" : "Copy"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-1 border-navy shadow-lg p-6">
                  <h3 className="font-semibold text-burgundy mb-4">MTN</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-navy/70">Name:</span>
                      <span className="font-medium text-navy">
                        Akosua Ndwaa Nyamekye
                      </span>
                    </div>
                    <div className="flex justify-between items-center gap-2">
                      <span className="text-navy/70">Number:</span>
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-navy font-mono">
                          0545093092
                        </span>
                        <button
                          onClick={() => copyToClipboard("0545093092", "mtn")}
                          className="px-3 py-1 text-xs bg-burgundy text-white hover:bg-burgundy/90 transition-all"
                        >
                          {copiedField === "mtn" ? "Copied!" : "Copy"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bank Transfer */}
            <div className="bg-white border-1 border-navy shadow-lg p-8">
              <h2 className="text-2xl font-bold text-navy text-center mb-6">
                Bank Transfer
              </h2>
              <div className="bg-white border-1 border-navy p-4 lg:py-8 lg:px-8">
                <h3 className="font-semibold text-burgundy mb-4 text-center">
                  Bank Account Details
                </h3>
                <div className="space-y-3 lg:space-y-8.5">
                  <div className="flex justify-between">
                    <span className="text-navy/70">Bank Name:</span>
                    <span className="font-medium text-navy">Ecobank</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-navy/70">Account Name:</span>
                    <span className="font-medium text-navy">
                      Freeman Kofi Pabi Osei-Tete
                    </span>
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <span className="text-navy/70">Account Number:</span>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-navy font-mono">
                        1441004938914
                      </span>
                      <button
                        onClick={() => copyToClipboard("XXXXXXXXXXXX", "bank")}
                        className="px-3 py-1 text-xs bg-burgundy text-white hover:bg-burgundy/90 transition-all"
                      >
                        {copiedField === "bank" ? "Copied!" : "Copy"}
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-navy/70">Branch:</span>
                    <span className="font-medium text-navy">McCarthy Hill</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center bg-off-white py-16 pb-32 relative overflow-hidden">
        <a
          href="/"
          className="inline-block text-burgundy hover:text-navy transition-all font-medium relative z-10"
        >
          ← Back to Home
        </a>

        <img
          src="/grass.png"
          alt="Grass"
          className="absolute -bottom-28 left-0 w-72 h-72 md:w-84 md:h-84 object-contain opacity-60 z-0"
        />
        <img
          src="/grass.png"
          alt="Grass"
          className="absolute -bottom-28 left-84 w-72 h-72 md:w-84 md:h-84 object-contain opacity-60 z-0"
        />
        <img
          src="/grass.png"
          alt="Grass"
          className="absolute -bottom-28 left-168 w-72 h-72 md:w-84 md:h-84 object-contain opacity-60 z-0"
        />
        <img
          src="/grass.png"
          alt="Grass"
          className="absolute -bottom-28 left-252 w-72 h-72 md:w-84 md:h-84 object-contain opacity-60 z-0"
        />
      </section>
    </div>
  );
}
