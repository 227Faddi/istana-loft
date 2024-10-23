import { useTranslation } from "react-i18next"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const clientUrl = import.meta.env.VITE_CLIENT_URL;

const ContactSection = () => {
    const navigate = useNavigate();
    const { t } = useTranslation(); 
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
      
        const myForm = event.target;
        const formData = new FormData(myForm);
      
        try{
            await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData).toString(),
            })
            navigate('/form-success')
        } catch(err){
            alert(err);
        }
    };
    
    return (
        <section className="bg-white py-6 mt-[106px] lg:mt-0" id='contact'>
            <div className="container max-w-screen-xl mx-auto px-4 xl:relative">
                <div className='bg-green-800 rounded-3xl py-14 px-6'>
                    <h1 className='text-center text-white font-semibold text-4xl mb-8 italic'>
                        {t('contactTitle')}
                    </h1>
                    <div className="flex flex-col lg:flex-row items-center justify-evenly">
                        <div className="text-center lg:text-left mb-10 lg:mb-0">
                            <div className="max-w-sm mx-auto overflow-hidden bg-white shadow-lg rounded-3xl">
                                <div className="relative">
                                    <img
                                        className="w-full h-48 object-cover"
                                        src="https://a0.muscache.com/im/pictures/user/9c01e630-923c-4471-aedf-38dfe57c3cb5.jpg?im_w=240"
                                        alt="Profile Image"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="px-6 py-4">
                                    <div className="text-xl font-semibold text-gray-800">
                                        {t('contactName')}
                                    </div>
                                    <p className="text-gray-600">
                                        {t('contactRole')}
                                    </p>
                                    <p className="px-6 py-4">
                                        {t('contactBio')}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <form 
                            className="max-w-[384px] sm:max-w-full sm:w-96 bg-white px-6 py-3 rounded-3xl"
                            name="contact" 
                            method="POST"
                            onSubmit={handleSubmit}
                        >
                            <input type="hidden" name="form-name" value="contact" />
                            <div className="py-3">
                                <h2 className="font-semibold text-gray-900 text-3xl text-center">
                                    {t('contactSubTitle')}
                                </h2>
                            </div>
                            <div className="py-3">
                                <input
                                    name="name"
                                    className="px-4 py-4 w-full bg-gray-100 placeholder-gray-400 rounded-xl outline-none"
                                    placeholder={t('formName')}
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="py-3">
                                <input
                                    name="email"
                                    className="px-4 py-4 w-full bg-gray-100 placeholder-gray-400 rounded-xl outline-none"
                                    placeholder={t('formEmail')}
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="py-3">
                                <textarea
                                    name="message"
                                    className="px-4 py-4 w-full bg-gray-100 font-normal text-lg placeholder-gray-400 rounded-xl outline-none"
                                    placeholder={t('formMessage')}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                            </div>
                            <div className="py-3">
                                <button 
                                    className="w-full py-4 font-semibold text-lg text-white bg-green-700 rounded-xl hover:bg-green-900 transition ease-in-out duration-500"
                                    type="submit"
                                >
                                    {t('submit')}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection