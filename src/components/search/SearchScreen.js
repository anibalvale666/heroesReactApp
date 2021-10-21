import axios from 'axios';
import React, { useState } from 'react'
import { HeroesApp } from '../../HeroesApp';
import { useForm } from '../../hooks/useForm';

export const SearchScreen = () => {

    const [heroSearchList, setHeroSearchList] = useState([]);

    const [ formValues, handleInputchange ] = useForm( {
        searchText: ''
    } );

    const { searchText } = formValues;

    const addHero = (id) => {
        
    }

    const handleSearch = async(e) => {
        e.preventDefault();
        const res = await axios.get(`https://superheroapi.com/api/6246903412051149/search/${searchText}`);

        if(res.data.response === 'success')
        {
            setHeroSearchList(res.data.results);
        }
        else
        {
            console.log(res.data.error)
        }
    }

    return (
        <div>
            <h1>Búsquedad</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4> Formulario de Búsqueda</h4>
                    <hr />

                    <form onSubmit={ handleSearch }>
                        <input
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value = { searchText }
                            onChange= { handleInputchange }
                        />

                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                            >
                                Search...
                        </button>
                    </form>

                </div>
                <div className="col-7">

                    <h4> Results </h4>
                    <hr/>

                    {/* {
                        (!!heroSearchList.length )
                        &&
                            <div className="alert alert-info">
                            Search a hero
                        </div>
                    }
                    {
                        (q !== '' && heroesFiltered.length === 0)
                        &&
                            <div className="alert alert-danger">
                            There is no a hero with { q }
                        </div>
                    } */}
                    <ul>
                        {
                            heroSearchList.map( hero => (
                                <li > 
                                    { hero.id } 
                                    <span> {hero.name} </span> 
                                    <button className="btn btn-primary" onClick={addHero(hero.id)}>Agregar</button>    
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
