import { Block, FAQs, Hero, HowItWork, InfiniteSection, Pricing, Testimonial } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <Block />
      <Testimonial />
      <HowItWork />
      <div className="mt-20 antialiased relative overflow-hidden py-8">
        <InfiniteSection
          items={infiniteData}
          direction="right"
          speed="slow"
        />
      </div>
      <Pricing />
      <FAQs />
    </main>
  );
}

const infiniteData = [
  {
    title: "Data Analytics"
  },
  {
    title: "Reservation Alerts"
  },
  {
    title: "Monthly Reports"
  },
  {
    title: "Mobile App Access"
  },
  {
    title: "Limited Restaurant Access"
  },
  {
    title: "Data Analytics"
  },
  {
    title: "Email Notifications"
  },
]
