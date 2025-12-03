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
    <div className="min-h-screen bg-off-white">
      {/* Title */}
      <section className="pt-32 text-center">
        <h1 className="max-w-4xl mx-auto px-4 text-4xl sm:text-5xl font-bold text-navy mb-4">
          How To Give
        </h1>
      </section>

      {/* Gift Options */}
      <section className="pt-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-[1fr_1.5fr] md:grid-cols-2 gap-8">
            {/* Mobile Money */}
            <div className="bg-navy shadow-lg p-8">
              <h2 className="text-2xl font-bold text-off-white text-center mb-6">
                Mobile Money
              </h2>
              <div className="space-y-6">
                <div className="bg-off-white p-6">
                  <h3 className="font-semibold text-burgundy mb-4">
                    MTN Mobile Money
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-navy/60">Name:</span>
                      <span className="font-medium text-navy">
                        Freeman Osei-Tete
                      </span>
                    </div>
                    <div className="flex justify-between items-center gap-2">
                      <span className="text-navy/60">Number:</span>
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-navy font-mono">
                          0557331091
                        </span>
                        <button
                          onClick={() => copyToClipboard("0557331091", "mtn")}
                          className="px-3 py-1 text-xs bg-burgundy text-white hover:bg-burgundy/90 transition-all"
                        >
                          {copiedField === "mtn" ? "Copied!" : "Copy"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-off-white p-6">
                  <h3 className="font-semibold text-burgundy mb-4">
                    Vodafone Cash
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-navy/60">Name:</span>
                      <span className="font-medium text-navy">
                        Akosua Ndwaa Nyamekye
                      </span>
                    </div>
                    <div className="flex justify-between items-center gap-2">
                      <span className="text-navy/60">Number:</span>
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-navy font-mono">
                          0XXXXXXXXX
                        </span>
                        <button
                          onClick={() =>
                            copyToClipboard("0XXXXXXXXX", "vodafone")
                          }
                          className="px-3 py-1 text-xs bg-burgundy text-white hover:bg-burgundy/90 transition-all"
                        >
                          {copiedField === "vodafone" ? "Copied!" : "Copy"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bank Transfer */}
            <div className="bg-navy shadow-lg p-8">
              <h2 className="text-2xl font-bold text-offw-white text-center mb-6">
                Bank Transfer
              </h2>
              <div className="bg-off-white p-4 lg:py-8 lg:px-8">
                <h3 className="font-semibold text-burgundy mb-4 text-center">
                  Bank Account Details
                </h3>
                <div className="space-y-3 lg:space-y-6">
                  <div className="flex justify-between">
                    <span className="text-navy/60">Bank Name:</span>
                    <span className="font-medium text-navy">GCB Bank</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-navy/60">Account Name:</span>
                    <span className="font-medium text-navy">
                      Freeman & Akua Wedding
                    </span>
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <span className="text-navy/60">Account Number:</span>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-navy font-mono">
                        XXXXXXXXXXXXXXXX
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
                    <span className="text-navy/60">Branch:</span>
                    <span className="font-medium text-navy">Accra</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 text-center bg-off-white">
        <a
          href="/"
          className="inline-block text-burgundy hover:text-navy transition-all font-medium"
        >
          ← Back to Home
        </a>
      </section>
    </div>
  );
}
