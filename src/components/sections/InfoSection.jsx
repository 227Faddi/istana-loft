import { LuHeartHandshake } from "react-icons/lu";
import { FaKey } from "react-icons/fa";
import { TbBeach } from "react-icons/tb";
import InfoItem from "../InfoItem";

const InfoSection = () => {
    const content = [
        {
            icon: <FaKey size={25} />,
            title: 'Self check-in',
            text1: 'Enjoy quick and easy arrivals with our simple',
            text2: 'self check-in process.',
        },
        {
            icon: <TbBeach size={25} />,
            title: 'Just a Step from the Beach',
            text1: 'Enjoy easy access to the wonderful',
            text2: 'Porto Istana beach.',
        },
        {
            icon: <LuHeartHandshake size={25} />,
            title: 'Relax in Comfort',
            text1: 'Perfect for two, it features a double bed, indoor and',
            text2: 'outdoor showers, and essentials',
        },
    ]
    return (
        <section className="bg-white py-10 px-4 md:py-16 xl:relative">
            <div className="container max-w-screen-xl mx-auto">
                <div className="flex flex-col xl:flex-row justify-end">
                    <div className="hidden xl:block xl:absolute left-0 bottom-0 rounded-tr-3xl rounded-br-3xl overflow-hidden w-[650px] h-[798px] xl:max-w-[45%]">
                        <img
                            alt="Feature img"
                            src="assets/image/info.webp"
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div className="flex flex-col items-center xl:max-w-[55%]">
                        <h1 className="font-semibold text-gray-900 text-xl md:text-4xl text-center leading-normal mb-6 italic">
                            Everything You Need for{' '}
                            <br />
                            {' '}a Perfect Stay
                        </h1>
                        <p className="font-normal text-gray-400 text-md md:text-xl text-center mb-16">
                            Inspired by Bali’s relaxed vibes, located on the hill{' '}
                            <br />
                            {' '}just above the enchanting beach of Porto Istana.
                        </p>
                        <div>
                            { content.map((item, index) =>(
                                <InfoItem
                                    key={index}
                                    icon={item.icon}
                                    title={item.title}
                                    text1={item.text1}
                                    text2={item.text2}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InfoSection