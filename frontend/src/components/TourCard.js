import Image from "next/image"
import Link from "next/link"

export default function TourCard({ tour }) {

  if (!tour) return null

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 border group">

      {/* IMAGE */}

      <div className="relative h-56 w-full overflow-hidden">

        <Image
          src={
            tour.hero_image?.includes("http")
              ? decodeURIComponent(tour.hero_image.replace("/media/", ""))
              : "/images/placeholder.jpg"
          }
          alt={tour.name}
          fill
          sizes="(max-width:768px) 100vw, 33vw"
          className="object-cover group-hover:scale-110 transition duration-500"
        />

        {/* CITY BADGE */}

        {tour.city && (
          <span className="absolute top-3 left-3 bg-white/90 text-xs font-semibold px-3 py-1 rounded-full shadow">
            {tour.city.toUpperCase()}
          </span>
        )}

      </div>

      {/* CONTENT */}

      <div className="p-5 flex flex-col justify-between">

        {/* TITLE */}

        <h3 className="text-lg font-semibold mb-2 leading-snug group-hover:text-orange-500 transition">
          {tour.name}
        </h3>

        {/* DURATION */}

        {tour.duration && (
          <p className="text-sm text-gray-500 mb-2">
            ⏱ {tour.duration}
          </p>
        )}

        {/* DESCRIPTION */}

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {tour.description}
        </p>

        {/* FOOTER */}

        <div className="flex items-center justify-between mt-auto">

          {/* PRICE */}

          <span className="text-orange-500 font-bold text-lg">
            From {tour.price}
          </span>

          {/* CTA */}

          <Link
            href={`/tours/${tour.slug}`}
            className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-orange-600 transition"
          >
            View Tour
          </Link>

        </div>

      </div>

    </div>
  )
}