"use client"

import { useEffect, useState } from "react"
import TourCard from "@/components/TourCard"

export default function AgraTours() {

  const [tours, setTours] = useState([])

  useEffect(() => {

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/tours/?city=agra`)
      .then(res => res.json())
      .then(data => setTours(data))

  }, [])

  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-4xl font-bold text-center mb-12">
          Agra Tour Packages
        </h1>

        <div className="grid md:grid-cols-3 gap-8">

          {tours.map(tour => (
            <TourCard key={tour.id} tour={tour} />
          ))}

        </div>

      </div>

    </section>
  )
}