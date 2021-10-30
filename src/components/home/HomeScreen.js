import React, { useContext } from 'react'
import { TeamContext } from '../../context/TeamContext';
import { HeroCard } from './HeroCard'

export const HomeScreen = () => {

    const {team, powerStats,appearanceTeam:{weight,height} } = useContext(TeamContext);
    
    // const maximun = Math.max.apply(Math, Object.entries(powerStats));
    const maximun = Object.keys(powerStats).reduce((a, b) => powerStats[a] > powerStats[b] ? a : b);

    const powerStats_2 =  Object.entries(powerStats).filter( k => k[0] !== maximun );
    return (
        <div className="container mt-3">
            {
                (team.length === 0) 
                ? 
                    <div className="alert alert-danger" role="alert">Please choose a hero</div>
                :
                    <>
                        <h1> Team </h1>
                        <hr/>

                        <div className="row">
                            <div className="col">
                                {
                                    team.map( hero => (
                                        <HeroCard 
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
                                            <h2 style={{color: '#FFBF00'}}>{maximun.toUpperCase()}: { powerStats[maximun].toFixed(2) }</h2>
                                            {powerStats_2.map(item => <h4><b>{item[0]}:</b> { item[1].toFixed(2) }</h4>)}
                                        </>
                                    )
                                }
                                <hr/>
                                <h4><b>Weight:</b> { (weight/team.length).toFixed(2) }</h4>
                                <h4><b>Height:</b> { (height/team.length).toFixed(2) }</h4>
                            </div>
                        </div>
                    </>
            }
        </div>
    )
}
