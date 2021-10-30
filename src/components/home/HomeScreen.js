import React, { useContext } from 'react'
import { TeamContext } from '../../context/TeamContext';
import { HeroeItem } from './HeroeItem'

export const HomeScreen = () => {

    const {team, powerStats } = useContext(TeamContext);
    
    const {intelligence, strength, speed, durability, power, combat} = powerStats;
    return (
        <div className="container mt-3">
            <h1> Team </h1>
            <hr/>

            <div className="row">
                <div className="col">
                    {
                        team.map( hero => (
                            <HeroeItem 
                                key={hero.id}
                                isTeam={true}
                                { ...hero }
                            />
                        ))
                    }
                </div>
                <div className="col">
                    <h1>Global Powerstats</h1>
                    {
                        (!!team.length ) && (
                            <>
                                <h3>Intelligence: { intelligence.toFixed(2) }</h3>
                                <h3>Strength: { strength.toFixed(2) }</h3>
                                <h3>Speed: { speed.toFixed(2) }</h3>
                                <h3>Durability: { durability.toFixed(2) }</h3>
                                <h3>Power: { power.toFixed(2)}</h3>
                                <h3>Combat: { combat.toFixed(2)}</h3>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
