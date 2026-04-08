import Image from "next/image"

export default function Navbar() {
  return (
    <header className="shadow-sm bg-white sticky top-0 z-50">

      <nav className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center">

          <div className="relative h-12 w-40">

            <Image
              src="/images/trivoya_logo.png"
              alt="Trivoya Travels Logo"
              fill
              priority
              className="object-contain"
            />

          </div>

        </a>

        {/* Navigation */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li><a href="/" className="hover:text-orange-500 transition">Home</a></li>
          <li><a href="/tours" className="hover:text-orange-500 transition">Tours</a></li>
          <li><a href="/about" className="hover:text-orange-500 transition">About</a></li>
          <li><a href="/contact" className="hover:text-orange-500 transition">Contact</a></li>
        </ul>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/911234567890"
          className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-600 transition"
        >
          WhatsApp Us
        </a>

      </nav>

    </header>
  )
}