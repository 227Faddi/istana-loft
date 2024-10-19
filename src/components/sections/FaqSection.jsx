import { Link } from "react-router-dom"
import FaqItem from "../FaqItem"

const FaqSection = () => {
  const content = [
    {
      title: 'What amenities are included?',
      text: `The property includes air conditioning, free WiFi, a hair dryer, in and outdoor shower, hot water, shower gel, cotton linens, hangers, a Klarstein refrigerator, and an espresso machine.`
    },
    {
      title: 'Is there public transportation nearby?',
      text: `Yes, buses run from Porto Istana to Olbia, but they are infrequent. For a better beach experience along the coast, we recommend renting a car.`
    },
    {
      title: 'How can I make a reservation?',
      text: `To make a reservation, simply visit our listing on the Airbnb site. Select your desired dates, check availability, and follow the prompts to complete your booking.`
    },
    {
      title: 'How far is the beach from the loft?',
      text: `It’s approximately a 16-minute walk or a 4-minute drive. We're also planning to offer electric bikes for a more convenient ride!`
    },
  ]

  return (
    <section className="py-10 px-4" id="faq">
      <div className="max-w-5xl mx-auto sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-normal text-gray-600 text-lg md:text-xl text-center uppercase mb-6">
            FAQ
          </p>
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Questions &amp; Answers
          </h2>
        </div>
        <div className="grid grid-cols-1 mt-12 md:mt-20 md:grid-cols-2 gap-y-16 gap-x-20">
          {content.map((item, index) =>(
            <FaqItem 
              key={index} 
              title={item.title} 
              text={item.text}
            />
          ))}
        </div>
        <div className="flex items-center justify-center mt-12 md:mt-20">
          <div className="px-8 py-4 text-center bg-green-700 rounded-full">
            <p className="text-gray-50">
              Didn’t find the answer you are looking for?{" "}
              <a
                href="/contact"
                title=""
                className="underline"
              >
                Contact Us!
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>

  )
}

export default FaqSection