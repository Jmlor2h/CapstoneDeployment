import React, { useEffect, useState } from "react";
import Translation from './TranslationEngToSpan/Motherhood.json';

export const KidTeams = (props) => {

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
            <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                    {content.translate28}
                    {/* Pediatrician Team */}
                </p>
                <p className="text-base text-ally9 md:text-lg">
                    {content.translate29}
                    {/* To give your newborn the healthiest possible start, you'll want to find a pediatrician to care for your child from their first wellness visit through the teen years. */}
                </p>
            </div>
            <div className="grid gap-10 mx-auto lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-4">
                <div className="flex flex-col items-center">
                    <img
                        className="object-cover w-20 h-20 mb-2 rounded-full shadow"
                        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                        alt="Person"
                    />
                    <div className="flex flex-col items-center">
                        <p className="text-lg font-bold text-ally2">Oliver Aguilerra</p>
                        <p className="text-sm text-ally8">
                            {content.translate30}
                            {/* Pediatric Nephrology */}
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <img
                        className="object-cover w-20 h-20 mb-2 rounded-full shadow"
                        src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                        alt="Person"
                    />
                    <div className="flex flex-col items-center">
                        <p className="text-lg font-bold text-ally2">Marta Clermont</p>
                        <p className="text-sm text-ally8">
                            {content.translate31}
                            {/* Pediatric Pulmonology */}
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <img
                        className="object-cover w-20 h-20 mb-2 rounded-full shadow"
                        src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                        alt="Person"
                    />
                    <div className="flex flex-col items-center">
                        <p className="text-lg font-bold text-ally2">Anthony Geek</p>
                        <p className="text-sm text-ally8">
                            {content.translate32}
                            {/* Pediatric Rheumatology */}
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <img
                        className="object-cover w-20 h-20 mb-2 rounded-full shadow"
                        src="https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                        alt="Person"
                    />
                    <div className="flex flex-col items-center">
                        <p className="text-lg font-bold text-ally2">Alice Melbourne</p>
                        <p className="text-sm text-ally8">
                            {content.translate33}
                            {/* Pediatric Cardiology */}
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <img
                        className="object-cover w-20 h-20 mb-2 rounded-full shadow"
                        src="https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                        alt="Person"
                    />
                    <div className="flex flex-col items-center">
                        <p className="text-lg font-bold text-ally2">Martin Garix</p>
                        <p className="text-sm text-ally8">
                            {content.translate34}
                            {/* Pediatric Transplant */}
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <img
                        className="object-cover w-20 h-20 mb-2 rounded-full shadow"
                        src="https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                        alt="Person"
                    />
                    <div className="flex flex-col items-center">
                        <p className="text-lg font-bold text-ally2">Andrew Larkin</p>
                        <p className="text-sm text-ally8">
                            {content.translate35}
                            {/* Pediatric Emergency Medicine */}
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <img
                        className="object-cover w-20 h-20 mb-2 rounded-full shadow"
                        src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                        alt="Person"
                    />
                    <div className="flex flex-col items-center">
                        <p className="text-lg font-bold text-ally2">Sophie Denmo</p>
                        <p className="text-sm text-ally8">
                            {content.translate36}
                            {/* Pediatric Critical Care Medicine */}
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <img
                        className="object-cover w-20 h-20 mb-2 rounded-full shadow"
                        src="https://images.pexels.com/photos/3931553/pexels-photo-3931553.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                        alt="Person"
                    />
                    <div className="flex flex-col items-center">
                        <p className="text-lg font-bold text-ally2">Benedict Caro</p>
                        <p className="text-sm text-ally8">
                            {content.translate37}
                            {/* Pediatric Hospital Medicine */}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KidTeams;