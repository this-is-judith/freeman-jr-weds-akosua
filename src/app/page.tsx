"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [displayedText, setDisplayedText] = useState("");
  const fullText =
    "Dear Sir or Madam, Join Freeman and Akosua as they get married on December 27. Click the button below to fill a form that let's us know how many people are coming";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    // Wedding date - December 27, 2025
    const weddingDate = new Date("2025-12-27T11:00:00Z").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Picture Background Section */}
      <section className="overflow-hidden min-h-[100vh] flex items-start relative">
        <div className="absolute inset-0 -z-10">
          <img
            src="/freeman-and-akosua-p2-new.jpeg"
            alt="Wedding background"
            className="w-full h-full object-cover object-[center_5%]"
          />
          <div className="absolute inset-0" />
        </div>
        <div className="max-w-7xl mx-auto text-center"></div>
      </section>

      {/* Main Info Section */}
      <section className="bg-off-white text-navy text-center md:py-16 md:pt-16 py-36 pt-42 relative overflow-hidden">
        {/* Decorative Plants */}
        <img
          src="/plant-11-left.png"
          alt="Plant 11"
          className="absolute md:top-0 -top-4 md:-left-15 -left-18 w-72 md:w-108 md:h-108 object-contain opacity-30"
        />
        <img
          src="/plant-11-right.png"
          alt="Plant 11"
          className="absolute top-0 md:-right-18 -right-21 w-72 md:w-108 md:h-108 object-contain opacity-30"
        />

        <img
          src="/plant-1.png"
          alt="Plant 1"
          className="absolute -bottom-1 md:left-0 -left-20 w-48 h-48 md:w-64 md:h-64 object-contain opacity-30 -rotate-12"
        />
        <img
          src="/plant-1-mirrored.png"
          alt="Plant 1"
          className="absolute -bottom-1 md:right-0 -right-20 w-48 h-48 md:w-64 md:h-64 object-contain opacity-30 rotate-12"
        />

        <div className="relative z-10">
          <h2 className="md:text-7xl text-5xl font-carattere md:mb-8 mb-6 max-w-4xl mx-auto">
            Freeman Osei-Tete Jr.
          </h2>

          <p className="text-2xl max-w-3xl mx-auto md:mb-8 mb-6 md:text-[1.5rem] text-[1.25rem]">
            and
          </p>

          <h2 className="md:text-7xl text-5xl font-carattere md:mb-8 mb-6 max-w-4xl mx-auto">
            Dr. Akosua Ndwaa Nyamekye
          </h2>

          <p className="text-2xl max-w-3xl mx-auto mb-8 md:text-[1.5rem] text-[1.25rem]">
            are getting married in
          </p>

          {/* Countdown Timer */}
          <div className="flex justify-center gap-4 sm:gap-8 md:mb-16 mb-12">
            {[
              { value: timeLeft.days, label: "Days" },
              { value: timeLeft.hours, label: "Hours" },
              { value: timeLeft.minutes, label: "Minutes" },
              { value: timeLeft.seconds, label: "Seconds" },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="border-navy bg-off-white p-4 sm:p-6 border shadow-lg min-w-[70px] sm:min-w-[90px]">
                  <p className="text-3xl sm:text-5xl font-bold text-navy font-mono">
                    {item.value.toString().padStart(2, "0")}
                  </p>
                </div>
                <p className="mt-2 text-xs sm:text-sm text-navy uppercase tracking-wider">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row justify-center md:gap-12 gap-8 max-w-4xl mx-auto px-6 mb-8">
            <div className="flex-1 text-center">
              <h3 className="text-xs uppercase tracking-widest text-burgundy mb-3 font-light">
                Date
              </h3>
              <p className="text-2xl text-navy font-light">December 27, 2025</p>
            </div>

            <div className="flex-1 text-center border-l border-r border-navy/50 md:block hidden">
              <h3 className="text-xs uppercase tracking-widest text-burgundy mb-3 font-light">
                Time
              </h3>
              <p className="text-2xl text-navy font-light">11:00 AM</p>
            </div>

            <div className="flex-1 text-center md:hidden">
              <h3 className="text-xs uppercase tracking-widest text-burgundy mb-3 font-light">
                Time
              </h3>
              <p className="text-2xl text-navy font-light">11:00 AM</p>
            </div>

            <div className="flex-1 text-center">
              <h3 className="text-xs uppercase tracking-widest text-burgundy mb-3 font-light">
                Location
              </h3>
              <p className="text-2xl text-navy font-light">Living Word AG</p>
              <p className="text-sm text-navy/60 mt-1 font-light">
                Kwashieman, Accra
              </p>
            </div>
          </div>

          <div className="md:mt-12 mt-10 flex flex-col sm:flex-row justify-center gap-4 [@media(max-width:640px)]:px-16">
            <a
              href="/location"
              className="px-8 py-4 bg-burgundy text-off-white transition-all shadow-lg hover:shadow-xl transform hover:scale-105 font-medium text-lg"
            >
              Find Location
            </a>
            <a
              href="/program-outline"
              className="px-8 py-4 border-burgundy border-2 text-burgundy transition-all shadow-lg hover:shadow-xl transform hover:scale-105 transition-all font-medium text-lg"
            >
              View Program
            </a>
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section className="md:py-20 py-16 text-center bg-navy">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="md:text-4xl text-3xl font-bold text-off-white mb-6">
            Will You Join Us?
          </h2>
          <p className="md:text-2xl text-xl font-light text-off-white leading-relaxed md:mb-12 mb-8">
            We would be honored to celebrate this special day with you. Please
            let us know if you can attend by RSVPing below.
          </p>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeeNSv_qwW1VjnVttcrXQkKNjX45sboA6ebJBYLP6ok1rwt4g/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg inline-block px-8 md:py-4 py-3 bg-burgundy text-off-white shadow-lg hover:shadow-xl transform hover:scale-105 font-medium"
          >
            RSVP
          </a>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="md:py-20 py-16 text-center bg-off-white relative overflow-hidden">
        <img
          src="/plant-12-mirrored.png"
          alt="Plant 12"
          className="absolute -bottom-6 md:-right-10 -right-28 w-72 h-72 md:w-84 md:h-84 object-contain opacity-30"
        />

        <img
          src="/plant-12.png"
          alt="Plant 12"
          className="absolute -bottom-8 md:-left-10 -left-28 w-72 h-72 md:w-84 md:h-84 object-contain opacity-30"
        />

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="md:text-4xl text-3xl font-bold text-navy mb-6">
            Our Story
          </h2>
          <p className="md:text-2xl text-xl font-light text-navy leading-relaxed md:mb-16 mb-12">
            Our story officially began in March 2024, but God had been preparing
            the way long before then. Follow our journey, and see how
            beautifully He guided our steps toward each other.
          </p>

          {/* Scattered Polaroid Photos */}
          <div className="relative md:h-80 h-[40rem] [@media(max-width:430px)]:h-[48rem] mb-12 max-w-6xl mx-auto">
            <div className="absolute md:top-0 top-0 md:left-[2%] left-[18%] [@media(max-width:430px)]:left-[4%] w-48 h-56 bg-white shadow-xl transform -rotate-6">
              <div className="w-full h-48 bg-gray-200 overflow-hidden">
                <img
                  src="/first-friend-picture.jpg"
                  alt="First picture as friends"
                  className="w-full h-full object-cover object-[center_60%]"
                />
              </div>
              <div className="text-sm bg-white h-10 text-black flex items-center justify-center">
                First picture as friends
              </div>
            </div>
            <div className="absolute md:top-16 top-32 [@media(max-width:430px)]:top-[28%] md:left-[26%] right-[18%] [@media(max-width:430px)]:right-[0%] w-48 h-56 bg-white shadow-xl transform rotate-3">
              <div className="w-full h-48 bg-gray-200 overflow-hidden">
                <img
                  src="/first-date.jpg"
                  alt="First date"
                  className="w-full h-full object-cover object-[40%_10%]"
                />
              </div>
              <div className="text-sm bg-white h-10 text-black flex items-center justify-center">
                First date
              </div>
            </div>
            <div className="absolute md:top-0 top-64 [@media(max-width:430px)]:top-[56%] md:left-[50%] left-[15%] [@media(max-width:430px)]:left-[4%] w-48 h-56 bg-white shadow-xl transform -rotate-8">
              <div className="w-full h-48 bg-gray-200 overflow-hidden">
                <img
                  src="/akosuas-graduation.jpg"
                  alt="Akosua's Graduation"
                  className="w-full h-full object-cover object-[center_50%]"
                />
              </div>
              <div className="text-sm bg-white h-10 text-black flex items-center justify-center">
                Akosua's Graduation
              </div>
            </div>
            <div className="absolute md:top-16 top-96 [@media(max-width:430px)]:top-[84%] md:right-[4%] right-[20%] [@media(max-width:430px)]:right-[2%] w-48 h-56 bg-white shadow-xl transform rotate-12">
              <div className="w-full h-48 bg-gray-200 overflow-hidden">
                <img
                  src="/freeman-and-akosua-p1.jpg"
                  alt="Wedding Photoshoot picture"
                  className="w-full h-full object-cover object-[center_15%]"
                />
              </div>
              <div className="bg-white h-10 text-black text-sm flex items-center justify-center">
                Our Engagement!
              </div>
            </div>
          </div>

          <a
            href="/our-story"
            className="text-lg inline-block px-8 py-4 [@media(max-width:430px)]:mt-32 bg-burgundy text-off-white transition-all shadow-lg hover:shadow-xl transform hover:scale-105 font-medium"
          >
            Read Our Love Story
          </a>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 text-center bg-navy">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="md:text-4xl text-3xl font-bold text-off-white mb-6">
            Support Us
          </h2>

          <p className="md:text-2xl text-xl font-light text-off-white leading-relaxed mb-12">
            Your presence at our wedding is the greatest gift we could ask for.
            However, if you wish to bless us financially, there are some ways
            you can support our wedding and marriage.
          </p>

          <a
            href="/support-us"
            className="text-lg inline-block px-8 py-4 bg-burgundy text-off-white transition-all shadow-lg hover:shadow-xl transform hover:scale-105 font-medium"
          >
            View Giving Options
          </a>
        </div>
      </section>

      {/* Extra Info */}
      <section className="md:py-20 py-16 pb-12 text-center bg-off-white relative overflow-hidden">
        <img
          src="/plant-13.png"
          alt="Plant 13"
          className="absolute -bottom-6 md:-left-10 -left-18 md:w-60 md:h-60 w-48 md:w-72 md:h-72 object-contain opacity-30"
        />

        <img
          src="/plant-13-mirrored.png"
          alt="Plant 13"
          className="absolute -bottom-6 md:-right-10 -right-18 md:w-60 md:h-60 w-48 md:w-72 md:h-72 object-contain opacity-30"
        />

        <div className="max-w-4xl mx-auto px-4">
          <h2 className="md:text-4xl text-3xl font-bold text-navy mb-6">
            Extra Info
          </h2>

          <p className="md:text-2xl text-xl font-light text-navy leading-relaxed mb-12">
            Find extra info in the digital invite below and in the other pages
            of this website. Please wear jewel tones in any of these colors:
          </p>

          <div className="flex flex-col gap-8 mb-12">
            {/* Top row - 4 circles */}
            <div className="flex justify-center gap-6">
              <div className="md:w-24 md:h-24 w-18 h-18 rounded-full bg-w-burgundy shadow-md"></div>
              <div className="md:w-24 md:h-24 w-18 h-18 rounded-full bg-w-gold shadow-md"></div>
              <div className="md:w-24 md:h-24 w-18 h-18 rounded-full bg-w-green shadow-md"></div>
              <div className="md:w-24 md:h-24 w-18 h-18 rounded-full bg-w-blue shadow-md"></div>
            </div>

            {/* Bottom row - 3 circles */}
            <div className="flex justify-center gap-6">
              <div className="md:w-24 md:h-24 w-18 h-18 rounded-full bg-w-silver shadow-md"></div>
              <div className="md:w-24 md:h-24 w-18 h-18 rounded-full bg-w-pink shadow-md"></div>
              <div className="md:w-24 md:h-24 w-18 h-18 rounded-full bg-w-purple shadow-md"></div>
            </div>
          </div>

          <a
            href="/digital-wedding-invite.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg inline-block my-4 px-8 py-4 bg-burgundy text-off-white transition-all shadow-lg hover:shadow-xl transform hover:scale-105 font-medium"
          >
            View Digital Invite
          </a>
        </div>
      </section>
    </>
  );
}
