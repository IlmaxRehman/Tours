export default function BlogPage() {
  return (

    <div className="max-w-5xl mx-auto py-16 px-6">

      <h1 className="text-4xl font-bold mb-10">
        Travel Blog
      </h1>

      <div className="space-y-8">

        <div>
          <a href="/blog/best-time-to-visit-taj-mahal" className="text-2xl font-semibold text-orange-600">
            Best Time to Visit Taj Mahal
          </a>

          <p className="text-gray-600">
            Discover the best season and time of day to visit the Taj Mahal.
          </p>
        </div>

        <div>
          <a href="/blog/taj-mahal-sunrise-vs-sunset" className="text-2xl font-semibold text-orange-600">
            Taj Mahal Sunrise vs Sunset
          </a>

          <p className="text-gray-600">
            Which time offers the best experience for visiting the Taj Mahal?
          </p>
        </div>

      </div>

    </div>

  )
}