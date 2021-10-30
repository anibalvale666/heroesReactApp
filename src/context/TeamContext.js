import { createContext, useState } from "react";


export const TeamContext = createContext();

export const TeamProvider = ({ children }) => {
    const [team, setTeam] = useState([]);
    const [appearanceTeam, setAppearanceTeam] = useState({
        weight: 0,
        height: 0,
    })
    const [powerStats, setPowerStats] = useState({
        intelligence: 0,
        strength: 0,
        speed: 0,
        durability: 0,
        power: 0,
        combat: 0,
    });

    return  (
        <TeamContext.Provider value = {{
            team,
            setTeam,
            powerStats,
            setPowerStats,
            appearanceTeam, 
            setAppearanceTeam
        }}
        >
            {children}
        </TeamContext.Provider>
    )

}