import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react'
import { useForm } from '../hooks/useForm';
import './login.css'
export const LoginScreen = () => {


    return (
        <Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (!values.password) {
            errors.password = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={ async(values, { setSubmitting }) => {
        //  setTimeout(() => {
        //    alert(JSON.stringify(values, null, 2));
        //    setSubmitting(false);
        //  }, 400);


        const res = await axios.post('http://challenge-react.alkemy.org/',values);
        console.log(res);

       }}
     >
       {({ isSubmitting }) => (
         <Form>
            <div className="form-group">
                <label htmlFor="email">Email: </label>
                <Field id="email" type="email" name="email" />
            </div>
           <ErrorMessage name="email" component="div" />
            <div className="form-group">
                <label htmlFor="pass">Password: </label>
                <Field id="pass" type="password" name="password" />
            </div>
           <ErrorMessage name="password" component="div" />

           <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </Form>
       )}
     </Formik>
    )
}
