"use client"

import { useEffect, useState } from "react"
import TourCard from "@/components/TourCard"

export default function JaipurTours() {

  const [tours, setTours] = useState([])

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/tours/?city=jaipur`)
      .then(res => res.json())
      .then(data => setTours(data))
  }, [])

  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-4xl font-bold text-center mb-4">
          Jaipur Tour Packages
        </h1>

        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Experience the royal heritage of Jaipur with our curated tours.
          Visit Amber Fort, City Palace and explore the Pink City.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {tours.map(tour => (
            <TourCard key={tour.id} tour={tour} />
          ))}

        </div>

      </div>

    </section>
  )
}