import React, {  useContext, useState } from 'react';
import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';

import { HeroeItem } from '../home/HeroeItem';
import { TeamContext } from '../../context/TeamContext';

export const SearchScreen = () => {

    const [heroSearchList, setHeroSearchList] = useState([]);

    const {team} = useContext(TeamContext);
    return (
        <div className="container mt-3">
            <h1>Search</h1>
            <hr />

            <Formik
                initialValues={{ hero_search: '', }}
                validate={values => {
                    const errors = {};
                    if (!values.hero_search) {
                        errors.hero_search = 'Required';
                    } 
                    return errors;
                }}
                onSubmit={ async(values, { setSubmitting }) => {

                    const res = await axios.get(`https://superheroapi.com/api/6246903412051149/search/${values.hero_search}`);
            
                    if(res.data.response === 'success')
                    {
                        setHeroSearchList(res.data.results);
                    }
                    else
                    {
                        console.log(res.data.error)
                    }

                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Field id="buscar" type="text" name="hero_search" />
                        <ErrorMessage name="hero_search" component="div" />

                        <button className="btn m-1 btn-block btn-outline-primary" type="submit" disabled={isSubmitting}>
                            Buscar
                        </button>
                    </Form>
                )}
            </Formik>

            <h4> Results </h4>
            <hr/>

                {
                    heroSearchList.map( hero => (
                        (!team.some(el => el.id === hero.id)) && 
                        <HeroeItem 
                            key={hero.id}
                            isTeam={false}
                            { ...hero }
                        />
                    ))
                }
   
        </div>
    )
}
