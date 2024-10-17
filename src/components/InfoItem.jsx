import React from 'react'

const InfoItem = ({ icon, title, text1, text2}) => {
    return (
        <div className="flex flex-col md:flex-row justify-center md:justify-start space-x-4 mb-20">
            <div className="hover:animate-spin px-8 h-20 mx-auto md:mx-0 bg-gray-200 rounded-lg flex items-center justify-center mb-5 md:mb-0">
                {icon}
            </div>
            <div className="text-center md:text-left">
                <h4 className="font-semibold text-gray-900 text-2xl mb-2">
                    {title}
                </h4>
                <p className="font-normal text-gray-400 text-xl leading-relaxed">
                    {text1}{' '}
                    <br />
                    {' '}{text2}
                </p>
            </div>
        </div>
    )
}

export default InfoItem 