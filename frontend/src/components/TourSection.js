import Image from "next/image"

export default function TourSection() {

  const categories = [
    {
      name: "Agra Tours",
      image: "/images/destinations/agra.jpg",
      link: "/tours/agra"
    },
    {
      name: "Delhi Tours",
      image: "/images/destinations/delhi.jpg",
      link: "/tours/delhi"
    },
    {
      name: "Jaipur Tours",
      image: "/images/destinations/jaipur.jpg",
      link: "/tours/jaipur"
    }
  ]

  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Explore Tours by Destination
        </h2>

        {/* SEO Text */}

        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Choose from our curated tour packages across Agra, Delhi and Jaipur.
          Discover the Taj Mahal, historic forts and vibrant culture with expert guides.
        </p>

        {/* Grid */}

        <div className="grid md:grid-cols-3 gap-8">

          {categories.map((cat, index) => (

            <a
              key={index}
              href={cat.link}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition duration-300"
            >

              {/* Image */}

              <div className="relative h-80 w-full">

                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition duration-500"
                />

              </div>

              {/* Overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-6">

                <h3 className="text-white text-2xl font-semibold mb-2">
                  {cat.name}
                </h3>

                <span className="text-white text-sm font-medium group-hover:underline">
                  View Tours →
                </span>

              </div>

            </a>

          ))}

        </div>

      </div>

    </section>
  )
}