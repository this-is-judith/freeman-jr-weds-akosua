export default function ProgramOutline() {
  const ceremonyEvents = [
    {
      time: "11:00 AM",
      title: "Guest Arrival & Seating",
      description: "Welcome and pre-ceremony music",
    },
    {
      time: "11:30 AM",
      title: "Processional",
      description: "Entrance of the wedding party",
    },
    {
      time: "11:45 AM",
      title: "Ceremony Begins",
      description: "Exchange of vows and rings",
    },
    {
      time: "12:15 PM",
      title: "Unity Ceremony",
      description: "Symbolic union ritual",
    },
    {
      time: "12:30 PM",
      title: "Pronouncement",
      description: "You may kiss the bride!",
    },
  ];

  const receptionEvents = [
    {
      time: "1:00 PM",
      title: "Cocktail Hour",
      description: "Drinks and photo opportunities",
    },
    {
      time: "2:00 PM",
      title: "Grand Entrance",
      description: "Introduction of Mr. & Mrs. Osei-Tete",
    },
    {
      time: "2:30 PM",
      title: "Dinner Service",
      description: "Meal and refreshments",
    },
    {
      time: "4:00 PM",
      title: "Toasts & Speeches",
      description: "Words from family and friends",
    },
    {
      time: "4:30 PM",
      title: "First Dance",
      description: "The newlyweds' special moment",
    },
    {
      time: "5:00 PM",
      title: "Cake Cutting",
      description: "Sweet celebration",
    },
    { time: "5:30 PM", title: "Open Dancing", description: "Let's celebrate!" },
  ];

  const allEvents = [...ceremonyEvents, ...receptionEvents];

  return (
    <div className="min-h-screen bg-off-white">
      <section className="py-16 pt-32">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-xl p-8 sm:p-12">
            <div className="text-center mb-12 pb-8 border-b-2 border-navy/10">
              <h1 className="text-4xl sm:text-5xl font-bold text-navy mb-3">
                Order of Events
              </h1>
              <p className="text-lg text-navy/70">December 27, 2025</p>
              <p className="text-sm text-navy/60 mt-2">
                Living Word Assemblies of God Church
              </p>
            </div>

            <div className="space-y-1">
              {allEvents.map((event, idx) => (
                <div
                  key={idx}
                  className="py-4 border-b border-navy/5 last:border-0"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-navy mb-1">
                        {event.title}
                      </h3>
                      <p className="text-sm text-navy/60">
                        {event.description}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-sm font-semibold text-burgundy whitespace-nowrap">
                        {event.time}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t-2 border-navy/10 text-center">
              <p className="text-sm text-navy/60 italic">
                We look forward to celebrating with you!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-20 bg-off-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">
            Important Information
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-navy font-semibold text-xl mb-4">
                Dress Code
              </h3>
              <p className="text-navy/70 mb-3">
                <strong>Formal Attire</strong>
              </p>
              <ul className="text-sm text-navy/70 space-y-2">
                <li>• Ladies: Elegant dresses or traditional wear</li>
                <li>• Gentlemen: Suits or traditional formal wear</li>
                <li>• Colors: Burgundy, navy, or neutral tones preferred</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-navy font-semibold text-xl mb-4">
                RSVP Details
              </h3>
              <p className="text-navy/70 mb-3">
                Please confirm your attendance
              </p>
              <ul className="text-sm text-navy/70 space-y-2">
                <li>• Include dietary restrictions or allergies</li>
                <li>• Indicate number of guests attending</li>
                <li>• Contact through the website</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-navy font-semibold text-xl mb-4">
                Photography
              </h3>
              <p className="text-navy/70 mb-3">
                Capture and share your memories!
              </p>
              <ul className="text-sm text-navy/70 space-y-2">
                <li>
                  • Share photos using <strong>#TeteNyame</strong>
                </li>
                <li>• Professional photos will be shared post-wedding</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-navy font-semibold text-xl mb-4">Parking</h3>
              <p className="text-navy/70 mb-3">Parking information</p>
              <ul className="text-sm text-navy/70 space-y-2">
                <li>• Parking available at the venue</li>
                <li>• Please arrive early for best parking</li>
              </ul>
            </div>
          </div>
        </div>

        <section className="text-center mt-16 bg-off-white">
          <a
            href="/"
            className="inline-block px-8 py-4 text-burgundy hover:text-navy transition-all font-medium"
          >
            ← Back to Home
          </a>
        </section>
      </section>
    </div>
  );
}
