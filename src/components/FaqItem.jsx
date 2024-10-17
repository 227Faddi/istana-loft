const FaqItem = ({ title, text }) => {
    return (
        <div className="flex items-start">
            <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-green-700 rounded-full">
                <span className="text-lg font-semibold text-white">?</span>
            </div>
            <div className="ml-4">
                <p className="text-xl font-semibold">
                    {title}
                </p>
                <p className="mt-4 text-base text-gray-400">
                    {text}
                </p>
            </div>
        </div>
    ) 
}

export default FaqItem