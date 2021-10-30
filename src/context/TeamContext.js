import { createContext, useState } from "react";


export const TeamContext = createContext();

export const TeamProvider = ({ children }) => {
    const [team, setTeam] = useState([]);
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
            setPowerStats
        }}
        >
            {children}
        </TeamContext.Provider>
    )

}