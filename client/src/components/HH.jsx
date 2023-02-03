import HH from '../assets/hh.png'
import HH2 from '../assets/hh2.png'
import blood from '../assets/blood.png'



import { useEffect, useState } from "react";
import Translation from './TranslationEngToSpan/Data.json';


export const HealthHeader = (props) => {

  const {language, handleLanguage} = props 
  // const [language,setLanguage]=useState("spanish")
  const [content,setContent]=useState({})

  useEffect(()=>{
      if(language==="english"){
          setContent(Translation.english)
      }else if(language==="spanish"){
          setContent(Translation.spanish)
      }

  },
  [language] 
  )

    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
            </div>
         
          <select value={language} onChange={(e)=>handleLanguage(e.target.value)} class="w-48 bg-ally2 text-ally7 focus:outline-none border border-ally10 hover:bg-ally1 rounded-lg py-2 pr-8 pl-3 appearance-none">
  <option class="text-gray-700">spanish</option>
  <option class="text-gray-700">english</option>
</select>
<br></br>
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 text-3xl font-bold tracking-tight text-ally2 sm:text-4xl sm:leading-none">
                {content.translate1}
                <br className="hidden md:block" />
               {' '}
              </h2>
              <p className="text-base text-ally10 0 md:text-lg">
  {content.translate2}
              </p>
            </div>
            <div>
            </div>
          </div>
          <div className="flex items-center justify-center -mx-4 lg:pl-8">
            <div className="flex flex-col items-end px-3">
              <img
                className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                src={HH2}
                alt="health pic"
              />
              <img
                className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                src={blood}
                alt="blood tubes"
              />
            </div>
            <div className="px-3">
              <img
                className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                src={HH}
                alt="doctor"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };