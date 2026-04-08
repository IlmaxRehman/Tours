import Hero from "@/components/Hero"
import PopularTours from "@/components/PopularTours"
import DestinationSection from "@/components/DestinationSection"
import WhyChoose from "@/components/WhyChoose"
import ReviewSection from "@/components/ReviewSection"
import FAQSection from "@/components/FAQSection"



export default function Home() {
  return (
    <>
      <Hero />
      <PopularTours />
      <DestinationSection />
      <WhyChoose />
      <ReviewSection />
      <FAQSection />
    </>
  )
}