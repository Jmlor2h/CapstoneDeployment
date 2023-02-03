import React, { useState } from 'react'
import Kid from '../components/Kid'
import Postpartum from '../components/postpartum';
import Moms from '../components/Moms';
import KidTeams from '../components/kidTeams';
function Children() {

    const [language, setLanguage] = useState("english");

    return (
        <div>
            <Kid language={language} handleLanguage={(language) => setLanguage(language)} />
            <Postpartum language={language} />
            <Moms language={language} />
            <KidTeams language={language} />
        </div>
    )
}

export default Children;