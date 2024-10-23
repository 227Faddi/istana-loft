import { FaStar } from "react-icons/fa"
import { motion } from "framer-motion"
const airbnbURL = import.meta.env.VITE_AIRBNB_URL;


const ReviewCard = ({ author, comment, photo, from, index}) => {

    const key = index

    const variants = {
        initial: {
          opacity: 0,
          y: 100
        },
        animate: (y) => ({
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.1 * key,
          }
        })
    }

    return (
        <motion.div 
            className="flex flex-col justify-between rounded-3xl border-2 border-neutral-800 bg-white text-gray-700 p-8 shadow-sm max-w-sm mx-auto"
            variants={variants}
            initial='initial'
            whileInView='animate'
            viewport={{
            once: true,
            }}
            custom={index}
        >
            <div className=" flex gap-2">
                <FaStar className="text-yellow-300" />
                <FaStar className="text-yellow-300" />
                <FaStar className="text-yellow-300" />
                <FaStar className="text-yellow-300" />
                <FaStar className="text-yellow-300" />
            </div>
                <p className="my-4 mb-0 text-base font-normal leading-relaxed tracking-wide">
                    {comment}
                </p>
                <div className="mt-6 flex items-center gap-6 ">
                    <div className="h-10 w-10 overflow-hidden rounded-full shadow-sm outline-neutral-800">
                        <div className="relative inline-block overflow-hidden rounded-lg border-neutral-800 w-10 h-10">
                            <img
                                alt="review card"
                                src={photo}
                                className="inline-block object-cover w-full h-full"
                                style={{ color: "transparent" }}
                            />
                        </div>
                    </div>
                <div>
                    <p className="leading-relaxed tracking-wide text-black-200">
                        {author}
                    </p>
                    <a 
                        href={`${airbnbURL}/reviews`}
                        className="text-xs leading-relaxed tracking-wide text-green-700"
                        target="_blank"
                    >
                        {from}
                    </a>
                </div>
            </div>
        </motion.div>
    )
}

export default ReviewCard