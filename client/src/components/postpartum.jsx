import React, { useEffect, useState } from "react";
import Translation from './TranslationEngToSpan/Motherhood.json';


export const Postpartum = (props) => {

    const { language } = props
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
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid row-gap-8 sm:row-gap-0 sm:grid-cols-2 lg:grid-cols-3">
                <div className="p-8 border-b sm:border-r">
                    <div className="max-w-md text-center">
                        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-ally6 sm:w-16 sm:h-16">
                            <svg
                                className="w-8 h-8 text-deep-purple-accent-400 sm:w-12 sm:h-12"
                                stroke="currentColor"
                                viewBox="0 0 52 52"
                            >
                                <polygon
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                />
                            </svg>
                        </div>
                        <h6 className="mb-2 font-semibold leading-5 text-ally3">
                            {/* Postpartum Blues */}
                            {content.translate10}
                        </h6>
                        <p className="mb-3 text-sm text-ally8">
                            {content.translate11}
                            {/* Postpartum blues is a normal experience for many new mothers. It's important to understand that this is a temporary feeling and there are ways to cope with it. Here are some tips to help you get through this challenging time. */}
                        </p>
                    </div>
                </div>
                <div className="p-8 border-b lg:border-r">
                    <div className="max-w-md text-center">
                        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-ally6 sm:w-16 sm:h-16">
                            <svg
                                className="w-8 h-8 text-deep-purple-accent-400 sm:w-12 sm:h-12"
                                stroke="currentColor"
                                viewBox="0 0 52 52"
                            >
                                <polygon
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                />
                            </svg>
                        </div>
                        <h6 className="mb-2 font-semibold leading-5 text-ally3">
                            {content.translate12}
                            {/* Connect with Moms */}
                        </h6>
                        <p className="mb-3 text-sm text-ally8">
                            {content.translate13}
                            {/* Joining a support group or talking to friends who have gone through the postpartum experience can help you feel less isolated and provide a sounding board for any emotions you may be feeling. */}
                        </p>
                    </div>
                </div>
                <div className="p-8 border-b sm:border-r lg:border-r-0">
                    <div className="max-w-md text-center">
                        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-ally6 sm:w-16 sm:h-16">
                            <svg
                                className="w-8 h-8 text-deep-purple-accent-400 sm:w-12 sm:h-12"
                                stroke="currentColor"
                                viewBox="0 0 52 52"
                            >
                                <polygon
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                />
                            </svg>
                        </div>
                        <h6 className="mb-2 font-semibold leading-5 text-ally3">
                            {content.translate14}
                            {/* Encourage self-care */}
                        </h6>
                        <p className="mb-3 text-sm text-ally8">
                            {content.translate15}
                            {/* As a new mom, it's important to prioritize self-care to avoid burnout and ensure proper physical and emotional recovery. Encourage the new mom to engage in activities she enjoys, take breaks when needed, and seek professional help if needed. */}
                        </p>
                    </div>
                </div>
                <div className="p-8 border-b lg:border-b-0 lg:border-r">
                    <div className="max-w-md text-center">
                        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-ally6 sm:w-16 sm:h-16">
                            <svg
                                className="w-8 h-8 text-deep-purple-accent-400 sm:w-12 sm:h-12"
                                stroke="currentColor"
                                viewBox="0 0 52 52"
                            >
                                <polygon
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                />
                            </svg>
                        </div>
                        <h6 className="mb-2 font-semibold leading-5 text-ally3">
                            {content.translate16}
                            {/* Nutritious Foods */}
                        </h6>
                        <p className="mb-3 text-sm text-ally8">
                            {content.translate17}
                            {/* Eat a balanced diet rich in vitamins, minerals, and nutrients to help your body recover and provide energy. Focus on eating foods like leafy greens, lean protein, and whole grains. */}
                        </p>
                    </div>
                </div>
                <div className="p-8 border-b sm:border-b-0 sm:border-r">
                    <div className="max-w-md text-center">
                        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-ally6 sm:w-16 sm:h-16">
                            <svg
                                className="w-8 h-8 text-deep-purple-accent-400 sm:w-12 sm:h-12"
                                stroke="currentColor"
                                viewBox="0 0 52 52"
                            >
                                <polygon
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                />
                            </svg>
                        </div>
                        <h6 className="mb-2 font-semibold leading-5 text-ally3">
                            {content.translate18}
                            {/* Avoid Processed Foods */}
                        </h6>
                        <p className="mb-3 text-sm text-ally8">
                            {content.translate19}
                            {/* Minimize your intake of processed and high-fat foods to maintain a healthy weight and support your body's recovery.
              Seek Professional Help: If you have specific concerns about your diet and exercise, consider seeking the advice of a healthcare professional, dietitian, or personal trainer. */}
                        </p>
                    </div>
                </div>
                <div className="p-8">
                    <div className="max-w-md text-center">
                        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-ally6 sm:w-16 sm:h-16">
                            <svg
                                className="w-8 h-8 text-deep-purple-accent-400 sm:w-12 sm:h-12"
                                stroke="currentColor"
                                viewBox="0 0 52 52"
                            >
                                <polygon
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                />
                            </svg>
                        </div>
                        <h6 className="mb-2 font-semibold leading-5 text-ally3">
                            {content.translate20}
                            {/* Avoid Crash Diets */}
                        </h6>
                        <p className="mb-3 text-sm text-ally8">
                            {content.translate21}
                            {/* Rapid weight loss can affect your milk supply and delay your recovery, so avoid fad diets.
              Eating smaller, frequent meals throughout the day can help manage your hunger and prevent overeating. */}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Postpartum;