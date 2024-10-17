import ReviewCard from '../ReviewCard';

const ReviewsSection = () => {
    const content = [
        {
            author: 'Vanessa',
            comment: `Giulios loft is super cute with some bali vibes :) we had a great time in Porto Istana! But keep in mind that you definitely need a car. We would come back ☺️`
        },
        {
            author: 'Kevin',
            comment: `This loft is wonderful. Very stylish with a beach-tropical theme. Amazing shower and bath sink. You will love this place!`
        },
        {
            author: 'Sébastien',
            comment: `Great studio ideally located to explore the region. Giulio was great and even sorted out the logistics to pick up a parcel we got sent to his place. Recommend it!`
        }
    ]
    return (
        <section className="bg-white py-10 md:py-16" id='reviews'>
            <div className="container max-w-screen-xl mx-auto px-4 xl:relative">
                <p className="font-normal text-gray-400 text-lg md:text-xl text-center uppercase mb-6">
                    Reviews
                </p>
                <h1 className="font-semibold text-gray-900 text-2xl md:text-4xl text-center leading-normal mb-14 italic">
                    What Our Guests{' '}
                    <br />
                    {' '}Are Saying
                </h1>
                <div className='flex flex-col lg:flex-row gap-10'>
                    { content.map((item, index) =>(
                        <ReviewCard
                            key={index}
                            author={item.author}
                            comment={item.comment}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ReviewsSection