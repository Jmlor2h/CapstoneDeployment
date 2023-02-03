import diabetes from '../assets/daibetes.png'
import hbp from '../assets/hbp.png'
import needles from '../assets/needles.png'
import obese from '../assets/obese.png'
import hepatitis from '../assets/hepatitis.jpeg'
import cancer from '../assets/cancer.png'


import { useEffect, useState } from "react";
import Translation from './TranslationEngToSpan/Data.json';

export const Articles = (props) => {

  const {language} = props 
  // const [language,setLanguage]=useState("spanish")
  const [content,setContent]=useState({})

  useEffect(()=>{
      if(language==="english"){
          setContent(Translation.english)
      }else if(language==="spanish"){
          setContent(Translation.spanish)
      }

  }, 
  [language])

return (
<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
<div className="flex flex-col w-full mb-6 lg:justify-between lg:flex-row md:mb-8">
<div className="flex items-center mb-5 md:mb-6 group lg:max-w-xl">

<h2 className="font-sans text-3xl font-bold leading-none tracking-tight text-ally2 sm:text-4xl">
<span className="inline-block mb-2"> 
{content.translate3} </span>
<div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
</h2>
</div>

</div>
<div className="grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8">
<div>
<a href="https://www.cdc.gov/diabetes/spanish/index.html">
<img
className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
src={diabetes}
alt="Insulin Pic"
/>
</a>
<p className="mb-2 text-xl font-bold leading-none sm:text-2xl text-ally8">
Diabetes
</p>
<p className="text-ally10">
{content.translate4}
</p>
</div>
<div>
<a href="https://medlineplus.gov/spanish/highbloodpressure.html">
<img
className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
src={hbp}
alt="Blood Pressure pic"
/>
</a>
<p className="mb-2 text-xl font-bold leading-none sm:text-2xl text-ally8">
{content.translate5}
</p>
<p className="text-ally10">
{content.translate6}
</p>
</div>
<div>
<a href="https://www.cigna.com/es-us/knowledge-center/cholesterol">
<img
className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
src={needles}
alt="high colesterol"
/>
</a>
<p className="mb-2 text-xl font-bold leading-none sm:text-2xl text-ally8">
{content.translate7}
</p>
<p className="text-ally10">
{content.translate8}
</p>
</div>
<div>
<a href="https://medlineplus.gov/spanish/obesity.html">
<img
className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
src={obese}
alt="Junk Food"
/>
</a>
<p className="mb-2 text-xl font-bold leading-none sm:text-2xl text-ally8">
{content.translate9}
</p>
<p className="text-ally10">
{content.translate10}
</p>
</div>
<div>
<a href="https://medlineplus.gov/spanish/hepatitisa.html">
<img
className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
src={hepatitis}
alt="Liver Pain"
/>
</a>
<p className="mb-2 text-xl font-bold leading-none sm:text-2xl text-ally8">
Hepatitis
</p>
<p className="text-ally10">
{content.translate11}
</p>
</div>
<div>
<a href="https://medlineplus.gov/spanish/cancer.html">
<img
className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
src={cancer}
alt="Pink Ribbon"
/>
</a>
<p className="mb-2 text-xl font-bold leading-none sm:text-2xl text-ally8">
Cancer
</p>
<p className="text-ally10">
{content.translate12}
</p>
</div>
</div>
<div className="text-center">


</div>
</div>

);
};

export default Articles;