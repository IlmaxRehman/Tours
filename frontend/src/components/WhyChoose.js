export default function WhyChoose() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Why Choose Trivoya for Your Golden Triangle Tour
        </h2>

        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-14">
          We specialize in Taj Mahal and Golden Triangle tours with experienced
          guides, comfortable transport and personalized travel experiences
          across Delhi, Agra and Jaipur.
        </p>

        {/* Features Grid */}

        <div className="grid md:grid-cols-4 gap-10 text-center">

          {/* Guide */}

          <div className="p-6 rounded-xl shadow-sm bg-gray-50 hover:shadow-md transition">

            <div className="text-4xl mb-4">🧭</div>

            <h3 className="font-semibold mb-2">
              Licensed Local Guides
            </h3>

            <p className="text-gray-600 text-sm">
              Explore the Taj Mahal, Agra Fort and Jaipur palaces with
              knowledgeable certified guides.
            </p>

          </div>

          {/* Transport */}

          <div className="p-6 rounded-xl shadow-sm bg-gray-50 hover:shadow-md transition">

            <div className="text-4xl mb-4">🚗</div>

            <h3 className="font-semibold mb-2">
              Comfortable AC Vehicles
            </h3>

            <p className="text-gray-600 text-sm">
              Travel safely between Delhi, Agra and Jaipur in private
              air-conditioned vehicles with professional drivers.
            </p>

          </div>

          {/* Sunrise */}

          <div className="p-6 rounded-xl shadow-sm bg-gray-50 hover:shadow-md transition">

            <div className="text-4xl mb-4">🌅</div>

            <h3 className="font-semibold mb-2">
              Sunrise Taj Mahal Access
            </h3>

            <p className="text-gray-600 text-sm">
              Experience the Taj Mahal at sunrise — the most beautiful
              and less crowded time to visit.
            </p>

          </div>

          {/* Support */}

          <div className="p-6 rounded-xl shadow-sm bg-gray-50 hover:shadow-md transition">

            <div className="text-4xl mb-4">💬</div>

            <h3 className="font-semibold mb-2">
              24/7 WhatsApp Support
            </h3>

            <p className="text-gray-600 text-sm">
              Our travel experts are always available to help with itinerary
              changes, questions and booking assistance.
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}