import React, { useEffect, useState } from "react";
import Translation from './TranslationEngToSpan/Motherhood.json';

const Moms = (props) => {

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
        <>



            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid max-w-screen-lg gap-8 row-gap-5 md:row-gap-8 sm:mx-auto lg:grid-cols-2">
                    <div className="transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
                        <div className="relative">
                            <img
                                className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
                                src="https://media.istockphoto.com/id/1257193373/vector/abstract-black-young-mother-and-baby-son-woman-holds-child-in-his-arms-family-communication.jpg?s=612x612&w=0&k=20&c=6PJJvAARuQOdytfLa7AumyLC7ooBi10YEz18JLI1CkA="
                                alt=""
                            />
                            <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
                        </div>
                        <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
                            <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                                {content.translate22}
                                {/* Breastfeeding Support */}
                            </h5>
                            <p className="mb-5 text-gray-700">
                                {content.translate23}
                                {/* As a new mom, ensuring that you have the proper support and resources for breastfeeding can make a big difference in your experience. It's important to find professionals and resources that can help you at any moment, so take the time to choose the right support that fits your needs. */}
                            </p>
                            <a
                                href="https://atriumhealth.org/medical-services/childrens-services/childrens-primary-care/atrium-health-levine-childrens-perspective-pediatrics"
                                aria-label=""
                                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-ally6 hover:bg-ally1 focus:shadow-outline focus:outline-none"
                            >
                                {/* Learn More */}
                                {content.translate24}
                            </a>
                        </div>
                    </div>
                    <div className="transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
                        <div className="relative">
                            <img
                                className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
                                src="https://media.istockphoto.com/id/1190453329/vector/mom-holds-a-sleeping-baby.jpg?s=170667a&w=0&k=20&c=t9pCIvbQwffi3dd4rwCo7i6RkL9vuI7sBzaWOdSXY7Q="
                                alt=""
                            />
                            <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
                        </div>
                        <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
                            <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                                {content.translate25}
                                {/* Excercise & Diet Support */}
                            </h5>
                            <p className="mb-5 text-gray-700">
                                {content.translate26}
                                {/* After having a baby, take time to learn about proper exercise is important to ensure you recover and maintain a healthy lifestyle postpartum.
                Make sure to focus on yourself and prioritize self-care so that you can be there for your little one. Learn more about Gym discounts and Diet plans. */}
                            </p>
                            <a
                                href="https://atriumhealth.org/campaigns/pediatrics/newborn/newborn?tactic=a002H00000W3WA2QAN"
                                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-ally6 hover:bg-ally1 focus:shadow-outline focus:outline-none"
                            >
                                {content.translate27}
                                {/* Learn More */}
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}




export default Moms