import React, { useContext } from 'react';
import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Swal from 'sweetalert2';


import { AuthContext } from '../context/AuthContext';
import './login.css'
export const LoginScreen = (props) => {

  const { setToken } = useContext(AuthContext);  

    return (
      <Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = <div className="alert alert-danger" role="alert">Email Required</div>;
         } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
          errors.email = <div className="alert alert-danger" role="alert">Invalid email address</div>; ;
          } else if (!values.password) {
            errors.password = <div className="alert alert-danger" role="alert">Password Required</div>;
         }
         return errors;
       }}
       onSubmit={ async(values, { setSubmitting }) => {
 
        await axios.post('http://challenge-react.alkemy.org/',values)
        .then( (res) => {
          localStorage.setItem('token', res.data.token);
          setToken(res.data.token);

        }).catch( (err) => {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'invalid email or password',
          });
          values.email = '';
          values.password = '';
        });

       }}
     >
       {({ isSubmitting }) => (
         <div className="login-container">
          <Form className="login-form">
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

         </div>
       )}
     </Formik>

    )
}
