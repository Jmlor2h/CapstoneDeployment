import React, {useState} from 'react'
import { Articles } from '../components/Articles'
import { Teams } from '../components/Teams';
import {HealthHeader} from '../components/HH'

function MyHealth360() {

  const [language, setLanguage] = useState("english");
  return (
    <div>
     <HealthHeader language={language} handleLanguage={(language)=> setLanguage(language)}/>
      <Articles language={language} />
 <Teams language={language}/>
    </div>
  )
}

export default MyHealth360;