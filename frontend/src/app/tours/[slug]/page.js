async function getTour(slug) {
  const res = await fetch(`http://127.0.0.1:8000/api/tours/${slug}/`, {
    cache: "no-store",
  })

  return res.json()
}

export default async function TourPage({ params }) {

  const { slug } = params

  const tour = await getTour(slug)

  const message = `Hi, I'm interested in the ${tour.name}`
  const whatsappLink =
    `https://wa.me/917409970085?text=${encodeURIComponent(message)}`

  return (
    <div className="bg-gray-50">

      {/* HERO */}

      <section className="relative h-[70vh] w-full">

        <img
          src={tour.hero_image}
          alt={tour.name}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">

          <div className="text-center text-white px-6">

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {tour.name}
            </h1>

            <p className="text-lg">
              {tour.duration} • From ${tour.price}
            </p>

          </div>

        </div>

      </section>

      {/* CONTENT */}

      <section className="max-w-5xl mx-auto px-6 py-16">

        {/* Overview */}

        <div className="mb-12">

          <h2 className="text-2xl font-semibold mb-4">
            Tour Overview
          </h2>

          <p className="text-gray-700 leading-relaxed">
            {tour.description}
          </p>

        </div>

        {/* Highlights */}

        <div className="mb-12 bg-white p-6 rounded-xl shadow">

          <h2 className="text-xl font-semibold mb-4">
            Tour Highlights
          </h2>

          <ul className="space-y-2 text-gray-700">

            <li>✔ Private air-conditioned car</li>
            <li>✔ Professional guide</li>
            <li>✔ Hotel pickup & drop</li>
            <li>✔ Skip-the-line experience</li>

          </ul>

        </div>

        {/* Itinerary */}

        <div className="mb-12">

          <h2 className="text-2xl font-semibold mb-4">
            Itinerary
          </h2>

          <p className="text-gray-700 whitespace-pre-line">
            {tour.itinerary}
          </p>

        </div>

        {/* CTA */}

        <div className="bg-orange-50 border border-orange-200 p-6 rounded-xl text-center">

          <h3 className="text-xl font-semibold mb-3">
            Book This Tour
          </h3>

          <p className="text-gray-600 mb-5">
            Contact us directly on WhatsApp for best price and instant confirmation.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            className="bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition"
          >
            Chat on WhatsApp
          </a>

        </div>

      </section>

    </div>
  )
}