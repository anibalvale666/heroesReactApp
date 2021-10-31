import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { TeamContext } from '../../context/TeamContext';



export const HeroCard = ( {
    id,
    name,
    powerstats,
    biography,
    image,
    appearance,
    work,
    isTeam,
}) => {

    const {team, setTeam, powerStats, setPowerStats, appearanceTeam, setAppearanceTeam} = useContext(TeamContext);

    const {intelligence,strength,speed, durability, power, combat } = powerstats;

  
    // drop ' kg'  &  ' cm' in str
    const w = parseInt(appearance.weight[1].substring(0,appearance.weight[1].length -3));
    const h = parseInt(appearance.height[1].substring(0,appearance.height[1].length -3));

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
        setTeam([...team, {id,name,powerstats,biography, image, appearance, work}]);
        setPowerStats ({
            intelligence: powerStats.intelligence + ((intelligence !== 'null') ? parseInt(intelligence): 0),
            strength: powerStats.strength + ((strength !== 'null') ? parseInt(strength): 0),
            speed: powerStats.speed + ((speed !== 'null') ? parseInt(speed): 0),
            durability: powerStats.durability + ((durability !== 'null') ? parseInt(durability): 0),
            power: powerStats.power + ((power !== 'null') ? parseInt(power): 0),
            combat: powerStats.combat + ((combat !== 'null') ? parseInt(combat): 0),
        });
        setAppearanceTeam({
            weight: appearanceTeam.weight + w,
            height: appearanceTeam.height + h
        })
    }

    const dropHero = () => {
        
        setTeam(team.filter( hero => id !== hero.id));
        setPowerStats ({
            intelligence: powerStats.intelligence - ((intelligence !== 'null') ? parseInt(intelligence) : 0),
            strength: powerStats.strength - ((strength !== 'null') ? parseInt(strength) : 0),
            speed: powerStats.speed - ((speed !== 'null') ? parseInt(speed) : 0),
            durability: powerStats.durability - ((durability !== 'null') ? parseInt(durability) : 0),
            power: powerStats.power - ((power !== 'null') ? parseInt(power) : 0),
            combat: powerStats.combat - ((combat !== 'null') ? parseInt(combat) : 0),
        });
        setAppearanceTeam({
            weight: appearanceTeam.weight - w,
            height: appearanceTeam.height - h
        })
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
                            <li>intelligence:   {intelligence}</li>
                            <li>strength:       {strength}</li>
                            <li>speed:          {speed}</li>
                            <li>durability:     {durability}</li>
                            <li>power:          {power}</li>
                            <li>combat:         {combat}</li>
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
                        
                        <hr />
                        {
                            isTeam && 
                                <Link to={`./hero/${id}`}>
                                    More...
                                </Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
