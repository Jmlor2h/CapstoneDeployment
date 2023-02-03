import React, { useEffect, useState } from "react";
import hands from '../assets/hands.png'
import Translation from './TranslationEngToSpan/Motherhood.json';

const Kid = (props) => {

    const { language, handleLanguage } = props
    // const [language,setLanguage]=useState("spanish")
    const [content, setContent] = useState({})

    useEffect(() => {
        if (language === "english") {
            setContent(Translation.english)
        } else if (language === "spanish") {
            setContent(Translation.spanish)
        }

    },
        [language]
    )


    return (
        <>
            <div className="dropdown-right dropdown-end">
                <label className="font-bold" for="language">Language: </label>
                <select className="dropdown-content font-bold uppercase text-sm px-1 py-2 shadow hover:bg-ally1 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" value={language} onChange={(e) => handleLanguage(e.target.value)}>
                    <option>english</option>
                    <option>spanish</option>
                </select>
            </div>

            <div className="relative">
                <img
                    src={hands}
                    className="absolute inset-0 object-cover w-full h-full bg-cover bg-center"
                    alt=""
                />
                <div className="relative bg-opacity-75 bg-deep-purple-accent-700">
                    <svg
                        className="absolute inset-x-0 bottom-0 text-white"
                        viewBox="0 0 1160 163"
                    >
                        <path
                            fill="currentcolor"
                            d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
                        />
                    </svg>
                    <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                        <div className="flex flex-col items-center justify-between xl:flex-row">
                            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-ally7 sm:text-4xl sm:leading-none">
                                    {/* FREE Support Groups  */}
                                    {content.translate1}
                                    { } <br className="hidden md:block" />
                                    {/* for new moms */}
                                    {content.translate2}

                                </h2>
                                <p className="max-w-xl mb-4 text-base text-white bold md:text-lg">
                                    {content.translate3}
                                    {/* Our groups can be in-person, online, or a combination of both.
                  Our groups can provide a sense of community, reduce feelings of isolation, and help mothers connect with resources and information about postpartum care. Additionally, our support groups are facilitated by trained professionals, such as therapists or social workers, who can provide additional support and guidance. */}
                                </p>
                            </div>
                            <div className="w-full max-w-xl xl:px-8 xl:w-5/12 justify-end">
                                <div className="bg-ally7 rounded shadow-2xl p-7 sm:p-10">
                                    <h3 className="mb-4 text-xl text-ally10 font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                                        {/* Sign up for PostPartrum Support Group */}
                                        {content.translate4}
                                    </h3>
                                    <form className="ml-auto">
                                        <div className="mb-1 sm:mb-2">
                                            <label
                                                htmlFor="firstName"
                                                className="inline-block mb-1 text-ally9 font-medium"
                                            >
                                                {/* First name */}
                                                {content.translate5}
                                            </label>
                                            <input
                                                placeholder="John"
                                                required
                                                type="text"
                                                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                                id="firstName"
                                                name="firstName"
                                            />
                                        </div>
                                        <div className="mb-1 sm:mb-2">
                                            <label
                                                htmlFor="lastName"
                                                className="inline-block mb-1 text-ally9 font-medium"
                                            >
                                                {/* Last name */}
                                                {content.translate6}
                                            </label>
                                            <input
                                                placeholder="Doe"
                                                required
                                                type="text"
                                                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                                id="lastName"
                                                name="lastName"
                                            />
                                        </div>
                                        <div className="mb-1 sm:mb-2">
                                            <label
                                                htmlFor="email"
                                                className="inline-block mb-1 text-ally9 font-medium"
                                            >
                                                {/* E-mail */}
                                                {content.translate7}
                                            </label>
                                            <input
                                                placeholder="john.doe@example.org"
                                                required
                                                type="text"
                                                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                                id="email"
                                                name="email"
                                            />
                                        </div>
                                        <div className="mt-4 mb-2 sm:mb-4">
                                            <button
                                                type="submit"
                                                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-ally10 hover:bg-ally1 focus:shadow-outline focus:outline-none"
                                            >
                                                {/* Subscribe */}
                                                {content.translate8}
                                            </button>
                                        </div>
                                        <p className="text-xs text-gray-600 sm:text-sm">
                                            {/* Offered In-Person and Virtual */}
                                            {content.translate9}
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}




export default Kid;