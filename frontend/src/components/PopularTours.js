"use client"

import { useEffect, useState } from "react"
import TourCard from "./TourCard"

export default function PopularTours() {

  const [tours, setTours] = useState([])

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/tours/")
      .then(res => res.json())
      .then(data => setTours(data.slice(0, 3))) // only 3
  }, [])

  return (

    <section className="py-20 bg-white">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Popular Tours
        </h2>

        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Discover our most booked and highly rated tour experiences across India.
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