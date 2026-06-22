import { useState, useEffect } from "react";

function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  const heroImages = [
    "/images/exterior.jpeg",
    "/images/living-room.jpeg",
    "/images/bedroom1.jpeg",
    "/images/kitchen.jpeg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const facilities = [
    "4 Bedrooms",
    "Up to 8 Guests",
    "Free WiFi",
    "Complete Kitchen Set",
    "Free Parking",
    "65'' Smart TV",
    "Air Conditioning",
    "Family Friendly",
    "Washing Machine & Drying Area",
    "Iron Board & Hair Dryer",
    "Water Dispenser",
    "Refrigerator",
  ];

  return (
    <div className="min-h-screen bg-[#fbf6ef] text-[#2f241b]">
      {/* Navbar */}
      <nav className="fixed top-0 z-50 flex w-full items-center justify-between bg-black/35 px-8 py-5 text-white backdrop-blur-md">
        <h1 className="text-xl font-bold tracking-wide">
          Kota Seribong Homestay
        </h1>

        <div className="hidden gap-7 text-sm font-medium md:flex">
          <a href="#gallery" className="hover:text-[#d8b98c]">Gallery</a>
          <a href="#facilities" className="hover:text-[#d8b98c]">Facilities</a>
          <a href="#location" className="hover:text-[#d8b98c]">Location</a>
          <a href="#contact" className="hover:text-[#d8b98c]">Book Now</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen overflow-hidden md:h-screen">
        <img
          src={heroImages[currentImage]}
          alt="Kota Seribong Homestay"
          className="absolute inset-0 h-full w-full object-cover transition-all duration-1000"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black/40 md:bg-gradient-to-r md:from-black md:via-black/70 md:to-black/20"></div>

        <div className="relative z-10 flex min-h-screen items-center px-5 pt-36 pb-28 text-white md:h-screen md:px-14 md:pt-20 md:pb-0">
          <div className="w-full max-w-4xl">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[3px] text-[#d8b98c] md:mb-3 md:text-xs md:tracking-[4px]">
              Premium Family Stay in Kota Bharu
            </p>

            <h2 className="max-w-3xl text-4xl font-black leading-tight md:text-7xl">
              Kota Seribong Homestay
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-100 md:mt-4 md:text-lg md:leading-7">
              Comfortable, clean and spacious homestay near Bandar Baru Tunjong,
              perfect for families, groups, wedding stays and short vacations.
            </p>

            <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium md:mt-5 md:gap-3 md:text-sm">
              <span className="rounded-full border border-[#d8b98c]/40 bg-black/50 px-3 py-2 backdrop-blur md:px-4">
                🛏 4 Bedrooms
              </span>

              <span className="rounded-full border border-[#d8b98c]/40 bg-black/50 px-3 py-2 backdrop-blur md:px-4">
                👨‍👩‍👧‍👦 8 Guests
              </span>

              <span className="rounded-full border border-[#d8b98c]/40 bg-black/50 px-3 py-2 backdrop-blur md:px-4">
                📍 Tunjong
              </span>

              <span className="rounded-full bg-[#b99162] px-3 py-2 font-bold text-white shadow-lg md:px-4">
                RM350/night
              </span>
            </div>

            <div className="mt-4 grid max-w-3xl grid-cols-2 gap-2 md:mt-5 md:grid-cols-4 md:gap-3">
              {[
                ["RM300", "Per Night"],
                ["4", "Bedrooms"],
                ["8", "Guests"],
                ["3PM", "Check In"],
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-[#d8b98c]/50 bg-black/65 p-3 text-center shadow-xl backdrop-blur-xl md:p-4"
                >
                  <h3 className="text-2xl font-black text-[#f7d6a3] md:text-3xl">
                    {item[0]}
                  </h3>
                  <p className="mt-1 text-xs text-gray-200 md:text-sm">
                    {item[1]}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap gap-3 md:mt-6">
              <a
                href="https://wa.me/60169306966"
                target="_blank"
                className="rounded-full bg-[#b99162] px-5 py-3 text-sm font-bold text-white shadow-xl hover:bg-[#8c6d49] duration-300 md:px-7"
              >
                📞 Book Now
              </a>

              <a
                href="#gallery"
                className="rounded-full border border-white/70 bg-black/20 px-5 py-3 text-sm font-bold text-white backdrop-blur hover:bg-white hover:text-[#2f241b] duration-300 md:px-7"
              >
                👨‍👩‍👧‍👦 Photos
              </a>
            </div>

            <div className="mt-4 flex gap-3 md:mt-5">
              {heroImages.map((_, index) => (
                <div
                  key={index}
                  className={`h-2.5 w-2.5 rounded-full transition-all md:h-3 md:w-3 ${currentImage === index ? "bg-[#d8b98c]" : "bg-white/50"
                    }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trusted */}
      <section className="bg-[#2f241b] px-8 py-16 text-white">
        <div className="mx-auto max-w-6xl text-center">
          <p className="font-semibold uppercase tracking-[4px] text-[#d8b98c]">
            Guest Favourite
          </p>
          <h2 className="mt-3 text-4xl font-bold">
            Trusted by Families & Groups
          </h2>
          <div className="mt-5 text-2xl text-[#f7d6a3]">★★★★★</div>
          <p className="mt-3 text-gray-300">
            Comfortable, spacious and perfect for short vacations, wedding stays and family gatherings.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="bg-white px-8 py-24">
        <h2 className="mb-6 text-center text-4xl font-bold md:text-5xl">
          See the homestay before you book.
        </h2>

        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-4 md:grid-rows-2">
          {[
            ["Living Room", "/images/living-room.jpeg", "md:col-span-2 md:row-span-2 h-full min-h-[500px]"],
            ["Kitchen", "/images/kitchen.jpeg", "h-60"],
            ["Bedroom 1", "/images/bedroom1.jpeg", "h-60"],
            ["Bedroom 2", "/images/bedroom2.jpeg", "h-60"],
            ["Bathroom", "/images/bathroom.jpeg", "h-60"],
          ].map((photo, index) => (
            <div
              key={index}
              className={`group relative cursor-pointer overflow-hidden rounded-3xl ${photo[2]}`}
              onClick={() => setSelectedImage(photo[1])}
            >
              <img
                src={photo[1]}
                alt={photo[0]}
                className="h-full w-full object-cover duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20"></div>
              <p className="absolute bottom-4 left-4 rounded-full bg-black/60 px-4 py-2 text-sm text-white backdrop-blur">
                {photo[0]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Facilities */}
      <section id="facilities" className="bg-[#fbf6ef] px-8 py-20">
        <p className="mb-3 text-center font-semibold text-[#9b6b3d]">
          Complete Facilities
        </p>
        <h2 className="mb-12 text-center text-4xl font-bold">
          What is included?
        </h2>

        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-4">
          {facilities.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white p-6 text-center font-semibold shadow-md hover:-translate-y-1 duration-300"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-white px-8 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <div>
            <p className="mb-3 font-semibold text-[#9b6b3d]">Simple Pricing</p>
            <h2 className="mb-6 text-4xl font-bold">From RM350 per night.</h2>
            <p className="text-lg leading-8 text-gray-600">
              Suitable for families and groups up to 8 guests. Contact us on WhatsApp to check available dates and confirm your booking.
            </p>
          </div>

          <div className="rounded-3xl bg-[#2f241b] p-10 text-center text-white shadow-xl">
            <p className="mb-3 text-[#d8b98c]">Starting From</p>
            <h3 className="mb-4 text-6xl font-bold">RM350</h3>
            <p className="mb-8 text-xl">Per Night</p>

            <a
              href="https://wa.me/60169306966"
              target="_blank"
              className="inline-block rounded-full bg-[#b99162] px-8 py-4 font-bold text-white hover:bg-[#8c6d49] duration-300"
            >
              Check Availability
            </a>
          </div>
        </div>
      </section>

      {/* Location */}
      <section id="location" className="bg-white px-8 py-20">
        <p className="mb-3 text-center font-semibold text-[#9b6b3d]">
          Location
        </p>
        <h2 className="mb-12 text-center text-4xl font-bold">
          Near Bandar Baru Tunjong, Kota Bharu.
        </h2>
        <div className="mx-auto max-w-5xl">
          <div className="overflow-hidden rounded-3xl shadow-xl">
            <iframe
              title="Kota Seribong Homestay Location"
              src="https://maps.google.com/maps?q=6.079738,102.252075&z=17&output=embed"
              className="h-96 w-full"
              loading="lazy"
            ></iframe>
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://www.google.com/maps?q=6.079738,102.252075"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-[#b99162] px-8 py-4 font-bold text-white shadow-lg hover:bg-[#8c6d49] duration-300"
            >
              📍 Open in Google Maps
            </a>
          </div>
        </div>
      </section>
      {/* Nearby Attractions */}
      <section className="bg-[#fbf6ef] px-8 py-20">
        <p className="mb-3 text-center font-semibold text-[#9b6b3d]">
          Nearby Attractions
        </p>

        <h2 className="mb-12 text-center text-4xl font-bold">
          Everything Within Reach
        </h2>

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-4">

          <div className="rounded-3xl bg-white p-8 text-center shadow-md">
            <div className="mb-4 text-4xl">🛒</div>
            <h3 className="font-bold">Mydin Tunjong</h3>
            <p className="text-gray-600">2km</p>
          </div>

          <div className="rounded-3xl bg-white p-8 text-center shadow-md">
            <div className="mb-4 text-4xl">🏬</div>
            <h3 className="font-bold">AEON Mall Kota Bharu</h3>
            <p className="text-gray-600">10km</p>
          </div>

          <div className="rounded-3xl bg-white p-8 text-center shadow-md">
            <div className="mb-4 text-4xl">🌙</div>
            <h3 className="font-bold">Wakaf Che Yeh</h3>
            <p className="text-gray-600">8km</p>
          </div>

          <div className="rounded-3xl bg-white p-8 text-center shadow-md">
            <div className="mb-4 text-4xl">✈️</div>
            <h3 className="font-bold">Sultan Ismail Petra Airport</h3>
            <p className="text-gray-600">14km</p>
          </div>

        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-[#fbf6ef] px-8 py-20">
        <div className="mx-auto max-w-4xl rounded-3xl bg-white p-10 text-center shadow-xl">
          <p className="mb-3 font-semibold text-[#9b6b3d]">Book Your Stay</p>

          <h2 className="mb-6 text-4xl font-bold">
            Ready to book Kota Seribong Homestay?
          </h2>

          <div className="mb-8 space-y-4 text-lg text-gray-600">
            <p>📍 Bandar Baru Tunjong, Kota Bharu, Kelantan</p>
            <p>👨‍👩‍👧‍👦 4 Bedrooms • Up to 8 Guests</p>
            <p>🕒 Check In: 3 PM | Check Out: 12 PM</p>
            <p>💰 From RM300/night</p>
          </div>

          <a
            href="https://wa.me/60169306966"
            target="_blank"
            className="inline-block rounded-full bg-green-600 px-9 py-4 text-xl font-bold text-white shadow-lg hover:bg-green-700 duration-300"
          >
            📞 Book via WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1f1711] px-8 py-16 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <h2 className="mb-4 text-3xl font-bold">
              Kota Seribong Homestay
            </h2>

            <p className="max-w-md leading-7 text-gray-300">
              Comfortable family homestay in Kota Bharu, Kelantan. Perfect for family
              trips, wedding stays, short vacations and group gatherings.
            </p>

            <p className="mt-6 text-sm uppercase tracking-[4px] text-[#b99162]">
              Designed by @jpweb_studio
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-bold text-[#d8b98c]">Quick Links</h3>
            <div className="space-y-3 text-gray-300">
              <p><a href="#gallery" className="hover:text-white">Gallery</a></p>
              <p><a href="#facilities" className="hover:text-white">Facilities</a></p>
              <p><a href="#location" className="hover:text-white">Location</a></p>
              <p><a href="#contact" className="hover:text-white">Book Now</a></p>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-bold text-[#d8b98c]">Contact</h3>
            <div className="space-y-3 text-gray-300">
              <p>📍 Bandar Baru Tunjong</p>
              <p>🏙 Kota Bharu, Kelantan</p>
              <p>💰 From RM350/night</p>
              <p>
                <a
                  href="https://wa.me/60169306966"
                  target="_blank"
                  className="text-[#d8b98c] hover:text-white"
                >
                  📞 WhatsApp Booking
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-6xl border-t border-white/10 pt-6 text-center text-sm text-gray-400">
          © 2026 Kota Seribong Homestay. All rights reserved.
        </div>
      </footer>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 px-6"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute right-8 top-8 text-5xl text-white hover:text-[#d8b98c]">
            ×
          </button>

          <img
            src={selectedImage}
            alt=""
            className="max-h-[90vh] max-w-[90vw] rounded-3xl object-contain shadow-2xl"
          />
        </div>
      )}

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/60169306966"
        target="_blank"
        className="fixed bottom-6 right-6 z-50 hidden rounded-full bg-green-500 px-5 py-4 text-2xl text-white shadow-xl hover:bg-green-600 duration-300 md:block"
      >
        💬
      </a>

      {/* Watermark */}
      <div className="fixed bottom-6 left-6 z-50 hidden rounded-full border border-[#d8b98c]/40 bg-black/70 px-5 py-3 text-sm font-medium text-white shadow-xl backdrop-blur-md md:block">
        🌐 @jpweb_studio
      </div>
    </div>
  );
}

export default App;