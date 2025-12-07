export default function ProgramOutline() {
  // const ceremonyEvents = [
  //   {
  //     time: "11:00 AM",
  //     title: "Guest Arrival & Seating",
  //   },
  //   {
  //     time: "11:30 AM",
  //     title: "Processional",
  //   },
  //   {
  //     time: "11:45 AM",
  //     title: "Ceremony Begins",
  //   },
  //   {
  //     time: "12:15 PM",
  //     title: "Unity Ceremony",
  //   },
  //   {
  //     time: "12:30 PM",
  //     title: "Pronouncement",
  //   },
  // ];

  // const receptionEvents = [
  //   {
  //     time: "1:00 PM",
  //     title: "Cocktail Hour",
  //   },
  //   {
  //     time: "2:00 PM",
  //     title: "Grand Entrance",
  //   },
  //   {
  //     time: "2:30 PM",
  //     title: "Dinner Service",
  //   },
  //   {
  //     time: "4:00 PM",
  //     title: "Toasts & Speeches",
  //   },
  //   {
  //     time: "4:30 PM",
  //     title: "First Dance",
  //   },
  //   {
  //     time: "5:00 PM",
  //     title: "Cake Cutting",
  //   },
  //   { time: "5:30 PM", title: "Open Dancing" },
  // ];

  // const allEvents = [...ceremonyEvents, ...receptionEvents];

  return (
    <div className="min-h-screen bg-off-white">
      <section className="md:pt-28 pt-20 relative overflow-hidden">
        <img
          src="/plant-8.png"
          alt="Plant 8"
          className="absolute -top-4 -right-16 w-72 h-72 md:w-84 md:h-84 object-contain opacity-60"
        />

        <img
          src="/plant-8.png"
          alt="Plant 8"
          className="absolute -top-4 -left-16 w-72 h-72 md:w-84 md:h-84 object-contain opacity-60"
        />

        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white border-1 border-navy shadow-xl p-8 sm:p-12">
            <div className="text-center mb-12 pb-8 border-b-2 border-navy/10">
              <h1 className="text-2xl sm:text-4xl font-bold text-navy mb-3">
                Order of Events
              </h1>
              <p className="text-lg text-navy/70">December 27, 2025</p>
              <p className="text-sm text-navy/60 mt-2">
                Living Word Assemblies of God Church
              </p>
            </div>

            <div className="text-center py-12">
              <p className="text-xl text-navy/80 mb-4">
                The program outline will be released shortly.
              </p>
              <p className="text-lg text-navy/60">
                Please stay tuned for updates!
              </p>
            </div>

            {/* Commented out until program outline is finalized */}
            {/* <div className="space-y-1">
              {allEvents.map((event, idx) => (
                <div
                  key={idx}
                  className="py-4 border-b border-navy/10 last:border-0"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-navy mb-1">
                        {event.title}
                      </h3>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="font-semibold text-burgundy whitespace-nowrap">
                        {event.time}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div> */}

            <div className="mt-12 pt-8 border-t-2 border-navy/10 text-center">
              <p className="text-sm text-navy/60 italic">
                We look forward to celebrating with you!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center bg-off-white py-16">
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
