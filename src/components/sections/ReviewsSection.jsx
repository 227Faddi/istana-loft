import ReviewCard from '../ReviewCard';

const ReviewsSection = () => {
    const content = [
        {
            author: 'Vanessa',
            comment: `Giulios loft is super cute with some bali vibes :) we had a great time in Porto Istana! But keep in mind that you definitely need a car. We would come back ☺️`,
            photo: 'https://a0.muscache.com/im/pictures/user/User-139798183/original/b1f5fa64-c021-4d85-b9c4-7f961d138dcb.jpeg?im_w=240'
        },
        {
            author: 'Kevin',
            comment: `This loft is wonderful. Very stylish with a beach-tropical theme. Amazing shower and bath sink. You will love this place!`,
            photo: 'https://a0.muscache.com/im/pictures/user/44e9dcf4-0458-48d7-9879-e2ba50d525f5.jpg?im_w=240'
        },
        {
            author: 'Sébastien',
            comment: `Great studio ideally located to explore the region. Giulio was great and even sorted out the logistics to pick up a parcel we got sent to his place. Recommend it!`,
            photo: 'https://a0.muscache.com/im/pictures/user/59cedcdb-a4c1-470c-9d91-92b47e7d6b0c.jpg?im_w=240'
        }
    ]
    return (
        <section className="bg-white py-10 md:py-16" id='reviews'>
            <div className="container max-w-screen-xl mx-auto px-4 xl:relative">
                <p className="font-normal text-gray-600 text-lg md:text-xl text-center uppercase mb-6">
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
                            photo={item.photo}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ReviewsSection