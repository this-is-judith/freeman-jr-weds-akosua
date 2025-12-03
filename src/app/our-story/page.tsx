export default function OurStory() {
  return (
    <div className="min-h-screen bg-off-white">
      {/* Title */}
      <section className="pt-20 pt-32 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-navy mb-4">
            The Story of Freeman & Akosua
          </h1>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-burgundy/20"></div>

            <div className="space-y-16">
              {/* First Meeting */}
              <div className="relative pl-20">
                <div className="absolute left-6 top-2 w-5 h-5 rounded-full bg-burgundy border-4 border-off-white"></div>
                <div className="mb-4">
                  <span className="text-sm font-semibold text-burgundy uppercase tracking-wider">
                    Spring 2019
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-navy mb-4">
                  When Our Paths Crossed
                </h2>
                <p className="text-navy/70 leading-relaxed mb-4">
                  Freeman and Akosua first met at a mutual friend's gathering in
                  Accra. What started as casual conversation quickly became
                  hours of deep discussion about life, dreams, and faith. There
                  was an instant connection—a sense that they had known each
                  other for far longer than just one evening.
                </p>
                <p className="text-navy/70 leading-relaxed mb-6">
                  Freeman was drawn to Akosua's infectious laughter and warmth,
                  while Akosua admired Freeman's gentle spirit and wisdom beyond
                  his years.
                </p>
                <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md h-64 w-full max-w-md">
                  <img
                    src="/freeman-and-akosua-p2.jpg"
                    alt="Freeman and Akosua"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>

              {/* Dating Years */}
              <div className="relative pl-20">
                <div className="absolute left-6 top-2 w-5 h-5 rounded-full bg-burgundy border-4 border-off-white"></div>
                <div className="mb-4">
                  <span className="text-sm font-semibold text-burgundy uppercase tracking-wider">
                    2019 - 2024
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-navy mb-4">
                  Building Our Foundation
                </h2>
                <p className="text-navy/70 leading-relaxed mb-4">
                  Through five beautiful years of dating, Freeman and Akosua
                  navigated life's ups and downs together. From late-night phone
                  calls to weekend adventures exploring Ghana's hidden gems,
                  they built a friendship as strong as their romance.
                </p>
                <p className="text-navy/70 leading-relaxed">
                  They learned each other's love languages, supported each
                  other's dreams, and discovered that love grows deeper when
                  rooted in respect, patience, and shared values.
                </p>
              </div>

              {/* The Proposal */}
              <div className="relative pl-20">
                <div className="absolute left-6 top-2 w-5 h-5 rounded-full bg-burgundy border-4 border-off-white"></div>
                <div className="mb-4">
                  <span className="text-sm font-semibold text-burgundy uppercase tracking-wider">
                    December 2024
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-navy mb-4">
                  The Perfect Yes
                </h2>
                <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md h-64 w-full max-w-md mb-6">
                  <img
                    src="/freeman-and-akosua-p2.jpg"
                    alt="The Proposal"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <p className="text-navy/70 leading-relaxed mb-4">
                  On a magical December evening at Aburi Botanical Gardens,
                  surrounded by blooming flowers and the gentle sounds of
                  nature, Freeman got down on one knee. With trembling hands and
                  a heart full of love, he asked Akosua to be his forever.
                </p>
                <p className="text-navy/70 leading-relaxed mb-4">
                  Through tears of joy, Akosua said YES! It was a moment
                  suspended in time—the culmination of years of love, laughter,
                  and unwavering commitment.
                </p>
                <p className="text-navy/60 leading-relaxed italic text-sm">
                  "I knew from the moment we met that you were the one I wanted
                  to grow old with. Will you marry me?" - Freeman
                </p>
              </div>

              {/* Wedding Day */}
              <div className="relative pl-20">
                <div className="absolute left-6 top-2 w-5 h-5 rounded-full bg-burgundy border-4 border-off-white"></div>
                <div className="mb-4">
                  <span className="text-sm font-semibold text-burgundy uppercase tracking-wider">
                    December 27, 2025
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-navy mb-4">
                  Our Forever Begins
                </h2>
                <p className="text-navy/70 leading-relaxed">
                  Today we celebrate our love with family and friends, marking
                  the beginning of our greatest adventure yet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Looking Forward */}
      <section className="pb-12 text-center bg-off-white">
        <a
          href="/"
          className="inline-block px-8 py-4 text-burgundy hover:text-navy transition-all font-medium"
        >
          ← Back to Home
        </a>
      </section>
    </div>
  );
}
