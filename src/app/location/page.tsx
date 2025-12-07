"use client";

export default function Location() {
  const churchName = "Living Word Assemblies of God Church";
  const address = "Kwashieman, Accra, Ghana";
  const googleMapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Living+Word+Assemblies+of+God+Church+Kwashieman+Accra+Ghana";
  const appleMapsUrl =
    "https://maps.apple.com/?q=Living+Word+Assemblies+of+God+Church+Kwashieman+Accra+Ghana";

  return (
    <div className="min-h-screen bg-off-white relative overflow-hidden">
      <section className="md:pt-28 pt-20 text-center">
        <img
          src="/plant-17.png"
          alt="Plant 17"
          className="absolute md:-top-8 -top-18 md:-right-16 -right-12 w-48 h-48 md:w-84 md:h-84 object-contain opacity-100"
        />

        <img
          src="/plant-17.png"
          alt="Plant 17"
          className="absolute md:-top-8 -top-18 md:-left-16 -left-12 w-48 h-48 md:w-72 md:h-72 md:w-84 md:h-84 object-contain opacity-100"
        />

        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white border-1 border-navy shadow-lg p-8">
            <h2 className="text-2xl sm:text-3xl font-semibold text-navy mb-4 md:pt-0 pt-4">
              {churchName}
            </h2>
            <p className="text-lg text-navy/80 mb-8">{address}</p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-burgundy text-off-white hover:bg-burgundy/90 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 font-medium"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                Open in Google Maps
              </a>
              <a
                href={appleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-burgundy text-burgundy hover:bg-navy hover:text-off-white transition-all font-medium"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                Open in Apple Maps
              </a>
            </div>

            <div className="w-full h-96 rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.821689825946!2d-0.2716108!3d5.593347800000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf985aabad5217%3A0xeb7886eebc6cd90c!2sLiving%20Word%20Assembly%20of%20God!5e0!3m2!1sen!2sus!4v1764738951498!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Wedding Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center bg-off-white md:py-16 py-8">
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
