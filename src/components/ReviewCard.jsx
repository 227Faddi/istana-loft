import { FaStar } from "react-icons/fa"

const ReviewCard = ({ author, comment}) => {
    return (
        <div className="flex flex-col justify-between rounded-3xl border-2 border-neutral-800 bg-white text-gray-700 p-8 shadow-sm max-w-sm mx-auto">
            <div className=" flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </div>
                <p className="my-4 mb-0 text-base font-normal leading-relaxed tracking-wide">
                    {comment}
                </p>
                <div className="mt-6 flex items-center gap-6 ">
                    <div className="h-10 w-10 overflow-hidden rounded-full shadow-sm outline-neutral-800">
                        <div className="relative inline-block overflow-hidden rounded-lg border-neutral-800">
                            <img
                            alt=""
                            src="https://placehold.co/400"
                            width={50}
                            height={50}
                            decoding="async"
                            data-nimg={1}
                            className="inline-block "
                            loading="lazy"
                            style={{ color: "transparent" }}
                            />
                        </div>
                    </div>
                <div>
                    <p className="leading-relaxed tracking-wide text-black-200">
                        {author}
                    </p>
                    <a href="https://www.airbnb.ca/rooms/1160767419216237462/reviews" className="text-xs leading-relaxed tracking-wide text-gray-400">
                        From Airbnb
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ReviewCard