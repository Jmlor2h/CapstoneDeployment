import { Team } from "../components/Team";
import { MentalBlog } from "../components/MentalBlog";
import { ContainerMental } from "../components/ContainerMental";
import { Statistic } from "../components/Statistics";
import { CategoriesMental } from "../components/CategoriesMental";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState, useContext } from "react";

function MentalPage() {
    const [language, setLanguage] = useState("english");
    const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (currentUser === 0) {
            navigate("/");
        }
    }, [currentUser, navigate]);

    return (
        <div className="app">
            <ContainerMental language={language} handleLanguage={(language) => setLanguage(language)} />
            <CategoriesMental language={language} />
            <Statistic language={language} />
            <MentalBlog language={language} />
            <Team language={language} />
        </div>
    );
}

export default MentalPage;