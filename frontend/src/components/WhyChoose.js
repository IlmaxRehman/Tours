import Image from "next/image"

export default function WhyChoose() {

  const features = [
    {
      title: "Licensed Local Guides",
      desc: "Explore with certified experts across Agra, Delhi and Jaipur.",
      icon: "/images/icons/guide.png"
    },
    {
      title: "Comfortable AC Vehicles",
      desc: "Travel safely with private air-conditioned cars and drivers.",
      icon: "/images/icons/car.png"
    },
    {
      title: "Sunrise Taj Mahal Access",
      desc: "Experience the Taj Mahal at the most beautiful time of the day.",
      icon: "/images/icons/sunrise.png"
    },
    {
      title: "24/7 WhatsApp Support",
      desc: "We are always available for help, bookings and quick queries.",
      icon: "/images/icons/support.png"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Why Choose Trivoya
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          We provide premium travel experiences with expert guides, comfortable transport
          and seamless service across Delhi, Agra and Jaipur.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-4 gap-8">

          {features.map((item, i) => (

            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-[1.03] transition duration-300"
            >

              {/* Icon */}
              <div className="flex justify-center mb-4">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={50}
                  height={50}
                />
              </div>

              {/* Title */}
              <h3 className="font-semibold text-lg mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm">
                {item.desc}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}