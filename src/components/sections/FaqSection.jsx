import { Link } from "react-router-dom"
import FaqItem from "../FaqItem"

const FaqSection = () => {
  const content = [
    {
      title: 'How to create an account?',
      text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do ametsint. Velit officia consequat duis enim velit mollit.'
    },
    {
      title: 'How to create an account?',
      text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do ametsint. Velit officia consequat duis enim velit mollit.'
    },
    {
      title: 'How to create an account?',
      text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do ametsint. Velit officia consequat duis enim velit mollit.'
    },
    {
      title: 'How to create an account?',
      text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do ametsint. Velit officia consequat duis enim velit mollit.'
    },
  ]

  return (
    <section className="py-10 px-4" id="faq">
      <div className="max-w-5xl mx-auto sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-normal text-gray-400 text-lg md:text-xl text-center uppercase mb-6">
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
                className="text-blue-300 transition-all duration-200 focus:underline hover:underline"
              >
                Contact me
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>

  )
}

export default FaqSection