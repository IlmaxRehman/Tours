"use client"

import { useState } from "react"

export default function FAQSection() {

  const faqs = [
    {
      question: "Is the Taj Mahal closed on Fridays?",
      answer:
        "Yes, the Taj Mahal remains closed every Friday for prayers. It is open to visitors from Saturday to Thursday.",
    },
    {
      question: "What is the best time to visit the Taj Mahal?",
      answer:
        "The best time to visit the Taj Mahal is early morning at sunrise when the crowds are smaller and the lighting is perfect for photography.",
    },
    {
      question: "How many days are needed for the Golden Triangle tour?",
      answer:
        "The classic Golden Triangle tour covering Delhi, Agra and Jaipur usually takes 4 to 5 days.",
    },
    {
      question: "Do your tours include entry tickets?",
      answer:
        "Most of our tour packages include monument entry tickets, licensed guides and private transport. Details are mentioned on each tour page.",
    },
  ]

  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 bg-white">

      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="border rounded-lg p-5 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >

              <h3 className="font-semibold text-lg flex justify-between items-center">

                {faq.question}

                <span className="text-orange-500">
                  {openIndex === index ? "−" : "+"}
                </span>

              </h3>

              {openIndex === index && (
                <p className="text-gray-600 mt-3 text-sm">
                  {faq.answer}
                </p>
              )}

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}