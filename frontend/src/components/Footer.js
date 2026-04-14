import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">

      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">

        {/* Logo + About */}

        <div>

          <div className="relative h-12 w-40 mb-4">

            <Image
              src="/images/logo.png"
              alt="Trivoya Travels Logo"
              fill
              sizes="160px"
              className="object-contain"
            />

          </div>

          <p className="text-sm text-gray-300">
            Explore India with Trivoya Travels. Experience Taj Mahal tours,
            Golden Triangle packages and private guided journeys across
            Agra, Delhi and Jaipur.
          </p>

        </div>

        {/* Quick Links */}

        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>

          <ul className="space-y-2 text-sm text-gray-300">

            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/tours" className="hover:text-white">Tours</a></li>
            <li><a href="/blog" className="hover:text-white">Travel Blog</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>

          </ul>
        </div>

        {/* Destinations (SEO Boost) */}

        <div>
          <h4 className="font-semibold mb-4">Top Destinations</h4>

          <ul className="space-y-2 text-sm text-gray-300">

            <li><a href="/tours/agra" className="hover:text-white">Agra Tours</a></li>
            <li><a href="/tours/delhi" className="hover:text-white">Delhi Tours</a></li>
            <li><a href="/tours/jaipur" className="hover:text-white">Jaipur Tours</a></li>

          </ul>
        </div>

        {/* Contact */}

        <div>
          <h4 className="font-semibold mb-4">Contact</h4>

          <p className="text-sm text-gray-300">
            Email: trivoyatravelss@gmail.com
          </p>

          <p className="text-sm text-gray-300 mt-2">
            WhatsApp: +91 7409970085
          </p>

        </div>

      </div>

      {/* Bottom Bar */}

      <div className="text-center text-sm border-t border-gray-700 py-4 text-gray-400">
        © {new Date().getFullYear()} Trivoya Travels. All rights reserved.
      </div>

    </footer>
  )
}