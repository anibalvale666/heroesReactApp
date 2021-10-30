import React, { useContext } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { TeamContext } from '../../context/TeamContext';




export const HeroScreen = ({ history }) => {

   
    const {team} = useContext(TeamContext);
    const { heroeId } = useParams();
    const hero = team.find(h => h.id === heroeId)

    if ( !hero ) {
        return <Redirect to="/" />;
    }

    const handleReturn = () => {

        if( history.length <=2 ) {
            history.push('/');
        } else {
            history.goBack();
        }

    }

    const {
        name,
        image,
        biography, // aliases
        appearance : { height, weight, 'eye-color': eyeColor, 'hair-color': hairColor }, // height weight eye-color hair-color
        work    // base
    } = hero;
    
    return (
        <div className="row mt-5">
            <div className="col-4">
                <img 
                    src={ image.url }
                    alt={ name }
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>

            <div className="col-8 animate__animated animate__fadeIn">
                <h3> { name }  </h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b> Height: </b>   {height[1]}  </li>
                    <li className="list-group-item"> <b> Weight: </b>  {weight[1]}  </li>
                    <li className="list-group-item"> <b> Eye color: </b>  {eyeColor}  </li>
                    <li className="list-group-item"> <b> Hair color: </b>  {hairColor}  </li>
                    <li className="list-group-item"> <b> Workplace: </b>  {work.base}  </li>
                </ul>

                <h5> Alias </h5>
                
                {biography.aliases.map( a => (
                    <p> {a} </p>
                ))}

                <button 
                    className="btn btn-outline-info"
                    onClick={ handleReturn }
                >
                    Return
                </button>

            </div>
        </div>
    )
}
