import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Formik } from 'formik';
import { Notyf } from 'notyf';
import axios from 'axios';
import Card from './card/index';
const Form = () => {
    const navigate = useNavigate();
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
    return (
        <Card extra={"w-full h-1/2 p-3 mt-5"}>
            <h4 className="px-2 text-xl font-bold text-navy-700 ">
                Details
            </h4>
            <div>
                <Formik
                    initialValues={{ coverLetter: '', description: '', submit: '', amount:0, delivery_time:0 }}
                    validate={values => {
                        const errors = {};
                        if (!values.coverLetter)
                            errors.coverLetter = 'Cover Letter Required';
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                        setTimeout(() => {
                            console.log(values);
                            // axios.post('http://localhost:3001/api/user/login', values)
                            //     .then(response => {
                            //         console.log(response);
                            //         notyf.success({
                            //             duration: 2000,
                            //             dismissible: true,
                            //             position: {
                            //                 x: 'center',
                            //                 y: 'top',
                            //             },
                            //             message: "Login Successfull",
                            //         });
                            //         // if (response.data.account_type == 'freelancer') navigate("/Clientdash");
                            //         // else navigate("/Clientdash");
                            //         localStorage.setItem("account_type", response.data.account_type);
                            //         localStorage.setItem("user_id", response.data.userId);
                            //         console.log(response.data);
                            //         navigate("/dashboard");
                            //     })
                            //     .catch(error => {
                            //         notyf.error({
                            //             duration: 2000,
                            //             dismissible: true,
                            //             position: {
                            //                 x: 'center',
                            //                 y: 'top',
                            //             },
                            //             message: error.response.data.error,
                            //         });
                            //         console.error(error)
                            //         resetForm();
                            //     });
                        }, 400);
                        // setSubmitting(false);
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
                        <form onSubmit={handleSubmit}  className='w-full mt-3 flex h-fit flex-col gap-5 lg:grid lg:grid-cols-12'>
                            <div className='col-span-6 lg:!mb-0'>
                                <textarea
                                    className='block border border-grey-light w-full p-3 rounded mb-1'
                                    type="text"
                                    name="coverLetter"
                                    placeholder='Skills and How will you do the given work'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.coverLetter}
                                />
                                <p className='text-red-600 mb-2'>{errors.coverLetter && touched.coverLetter && errors.coverLetter}</p>
                                <input
                                    className='block border border-grey-light w-full p-3 mb-3 rounded'
                                    type="text"
                                    name="description"
                                    placeholder='About Yourself'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.description}
                                />
                                <input
                                    className='block border border-grey-light w-full p-3 mb-3 rounded'
                                    type="number"
                                    name="amount"
                                    placeholder='Bid Amount'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.amount}
                                />
                                <input
                                    className='block border border-grey-light w-full p-3 mb-3 rounded'
                                    type="number"
                                    name="delivery_time"
                                    placeholder='Delivery time in days'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.delivery_time}
                                />
                            </div>
                            <div className='col-span-6 lg:!mb-0 text-center mt-11'>
                                <button
                                    className="w-1/2 text-center py-3 rounded bg-main text-white hover:bg-indigo-700 focus:outline-none my-4"
                                    type="submit"
                                    name="submit"
                                    value="team"
                                    onClick={() => values.submit="team"}
                                    // disabled={isSubmitting}
                                >
                                    Apply as a team
                                </button>
                                <hr />
                                <button
                                    className="w-1/2 text-center py-3 rounded bg-main text-white hover:bg-indigo-700 focus:outline-none my-4"
                                    type="submit"
                                    name="submit"
                                    value="individual"
                                    onClick={() => values.submit="indivdual"}
                                    // disabled={isSubmitting}
                                >
                                    Apply as an indvidual
                                </button>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </Card>
    )
}

export default Form