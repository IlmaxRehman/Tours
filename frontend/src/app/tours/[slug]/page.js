async function getTour(slug) {
  const res = await fetch(`http://127.0.0.1:8000/api/tours/${slug}/`, {
    cache: "no-store",
  })

  return res.json()
}

export default async function TourPage({ params }) {

  const { slug } = await params   // ✅ FIXED (IMPORTANT)

  const tour = await getTour(slug)

  const message = `Hi, I'm interested in the ${tour.name}`
  const whatsappLink =
    `https://wa.me/917409970085?text=${encodeURIComponent(message)}`

  return (
    <div className="bg-gray-50">

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

      <section className="max-w-5xl mx-auto px-6 py-16">

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Tour Overview</h2>
          <p className="text-gray-700">{tour.description}</p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Itinerary</h2>
          <p className="text-gray-700 whitespace-pre-line">
            {tour.itinerary}
          </p>
        </div>

        <div className="bg-orange-50 p-6 rounded-xl text-center">
          <a
            href={whatsappLink}
            className="bg-orange-500 text-white px-6 py-3 rounded-lg"
          >
            Book on WhatsApp
          </a>
        </div>

      </section>

    </div>
  )
}