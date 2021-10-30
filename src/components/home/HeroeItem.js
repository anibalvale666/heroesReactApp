import React, { useContext } from 'react';

import Swal from 'sweetalert2';
import { TeamContext } from '../../context/TeamContext'


export const HeroeItem = ( {
    id,
    name,
    powerstats,
    biography,
    image,
    appearance,
    isTeam,
}) => {

    const {team, setTeam, powerStats, setPowerStats} = useContext(TeamContext);

    const addHero = () => {
        if( team.length >= 6) {
            return Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Solo se permite un equipo de 6 heroes',
            });
        }
        const  hero =  team.filter(h => h.biography.alignment === 'good').length 
        if(hero >= 3 && biography.alignment === 'good') {
            return Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Solo se permite un equipo de 3 heroes',
            });

        }
        const  villain =  team.filter(h => h.biography.alignment === 'bad').length 
        
        if(villain >= 3 && biography.alignment === 'bad') {
            return Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Solo se permite un equipo de 3 villanos',
            });

        }
        setTeam([...team, {id,name,powerstats,biography, image, appearance}]);
        setPowerStats ({
            intelligence: powerStats.intelligence + parseInt(powerstats.intelligence),
            strength: powerStats.strength + parseInt(powerstats.strength),
            speed: powerStats.speed + parseInt(powerstats.speed),
            durability: powerStats.durability + parseInt(powerstats.durability),
            power: powerStats.power + parseInt(powerstats.power),
            combat: powerStats.combat + parseInt(powerstats.combat),
        });

    }

    const dropHero = () => {
        
        setTeam(team.filter( hero => id !== hero.id));
        setPowerStats ({
            intelligence: powerStats.intelligence - parseInt(powerstats.intelligence),
            strength: powerStats.strength - parseInt(powerstats.strength),
            speed: powerStats.speed - parseInt(powerstats.speed),
            durability: powerStats.durability - parseInt(powerstats.durability),
            power: powerStats.power - parseInt(powerstats.power),
            combat: powerStats.combat - parseInt(powerstats.combat),
        });
    }
    
    return (    
        <div className="card ms-3" style={ { maxWidth:540 } }>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={ image.url } className="card-img" alt={name} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title"> { name } <small className="text-muted"> {biography["full-name"]} </small> </h5>

                        <ul style={{fontSize: '11px', listStyle:'none'}}>
                            <li>intelligence:   {powerstats.intelligence}</li>
                            <li>strength:       {powerstats.strength}</li>
                            <li>speed:          {powerstats.speed}</li>
                            <li>durability:     {powerstats.durability}</li>
                            <li>power:          {powerstats.power}</li>
                            <li>combat:         {powerstats.combat}</li>
                        </ul>
                        {
                            isTeam 
                            ?
                                <button className="btn btn-danger" onClick={dropHero}>
                                    Drop                                    
                                </button>
                            :
                                <button className="btn btn-primary" onClick={addHero}>
                                    Add
                                </button>

                        }
                        {
                            (biography.alignment === "good") 
                                ? <span className="badge bg-success" style={{float: "right"}}> {biography.alignment} </span>
                                : <span className="badge bg-danger " style={{float: "right"}}> {biography.alignment} </span>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
