import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Formik } from 'formik';
import { Notyf } from 'notyf';
import axios from 'axios';
const SignUp = () => {
    const notyf = new Notyf({
        types: [
            {
                type: "loading",
                background: "black",
                duration: 2000,
                dismissible: true,
                position: {
                    x: 'center',
                    y: 'top',
                },
            },
            //other custom toasts if any
        ],
    });
    const location = useLocation();
    const navigate = useNavigate();
    const stateData = location.state;
    useEffect(() => {
        if (stateData === null) {
            navigate("/join");
        }
    }, [])


    return (
        <div className="bg-grey-lighter min-h-screen flex flex-col">
            <Link to="/">
                <h2 className='text-bold text-2xl mx-5 mt-5'>FreshFolio</h2>
            </Link>
            <div className="container max-w-md mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                    <div>
                        <Formik
                            initialValues={{ firstName: '', lastName: '', email: '', password: '', confirmPassword: '', username: '' }}
                            validate={values => {
                                const errors = {};
                                if (!values.email) {
                                    errors.email = 'Email Required';
                                } else if (
                                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                ) {
                                    errors.email = 'Invalid email address';
                                }
                                if (values.password !== values.confirmPassword) {
                                    errors.confirmPassword = "Password does not match";
                                }
                                return errors;
                            }}
                            onSubmit={(values, { setSubmitting, resetForm }) => {
                                setTimeout(() => {
                                    values["account_type"] = stateData.type;
                                    axios.post('http://localhost:3001/api/user/signup', values)
                                        .then(response => {
                                            console.log(response.data);
                                            notyf.success({
                                                duration: 2000,
                                                dismissible: true,
                                                position: {
                                                    x: 'center',
                                                    y: 'top',
                                                },
                                                message: "Sign Up Successfull",
                                            });
                                            console.log(values);
                                        })
                                        .catch(error => {
                                            notyf.error({
                                                duration: 2000,
                                                dismissible: true,
                                                position: {
                                                    x: 'center',
                                                    y: 'top',
                                                },
                                                message: error.response.data.error,
                                            });
                                            console.error(error)
                                            resetForm();
                                        });
                                }, 400);
                            }}
                        >
                            {({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting,
                                /* and other goodies */
                            }) => (
                                <form onSubmit={handleSubmit}>
                                    <div className='flex'>
                                        <input
                                            className='block border border-grey-light w-full p-3 rounded mr-2 mb-1'
                                            type="text"
                                            name="firstName"
                                            placeholder='first name'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.firstName}
                                        />
                                        <input
                                            className='block border border-grey-light w-full p-3 rounded mb-1'
                                            type="text"
                                            name="lastName"
                                            placeholder='last name'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.lastName}
                                        />
                                    </div>
                                    <input
                                        className='block border border-grey-light w-full p-3 rounded mb-1'
                                        type="email"
                                        name="email"
                                        placeholder='email@address.com'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                    />
                                    <p className='text-red-600 mb-2'>{errors.email && touched.email && errors.email}</p>
                                    <input
                                        className='block border border-grey-light w-full p-3 rounded mb-1'
                                        type="text"
                                        name="username"
                                        placeholder='Username'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.username}
                                    />
                                    {/* <p className='text-red-600 mb-2'>{errors.email && touched.email && errors.email}</p> */}
                                    <input
                                        className='block border border-grey-light w-full p-3 rounded mb-1'
                                        type="password"
                                        name="password"
                                        placeholder='password'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                    />
                                    <p className='text-red-600 mb-2'>{errors.password && touched.password && errors.password}</p>
                                    <input
                                        className='block border border-grey-light w-full p-3 rounded mb-1'
                                        type="password"
                                        name="confirmPassword"
                                        placeholder='Confirm Password'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.confirmPassword}
                                    />
                                    <p className='text-red-600 mb-2'>{touched.confirmPassword && errors.confirmPassword}</p>
                                    <button
                                        className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-700 focus:outline-none my-1"
                                        type="submit"
                                        disabled={isSubmitting}
                                    >
                                        Sign Up
                                    </button>
                                </form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp