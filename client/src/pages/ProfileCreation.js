import React from 'react'
import { LockClosedIcon } from '@heroicons/react/20/solid'
import { useEffect, useContext, useState } from 'react';
import { ProfileContext } from '../context/ProfileContext';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import portfolio from '../assets/portfolio.svg'
import { Link } from 'react-router-dom';
import axios from "axios";
import { Notyf } from 'notyf';

const ProfileCreation = () => {
    const navigate = useNavigate();
    const { profile } = useContext(ProfileContext);
    const { updateProfile } = useContext(ProfileContext);
    const notyf = new Notyf();
    return (
        <>
            <Link to="/" className='flex font-semibold text-3xl'>
                <h2 className='ml-5 mt-5'>Fresh</h2>
                <h2 className='mt-5 text-[#6246ea]'>Folio</h2>
            </Link>
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8  shadow-lg p-10 rounded bg-white ">
                    <div>
                        <img
                            className="mx-auto h-12 w-auto"
                            src={portfolio}
                            alt="Your Company"
                        />
                        <h2 className="mt-6 text-center text-3xl  tracking-tight text-gray-900">
                            Profile Completion
                        </h2>
                    </div>
                    <div>
                        {profile.account_type === 'client' ? (
                            <Formik
                                initialValues={{ company_name:'', website:'', industry:'', location:'' }}
                                validate={values => {
                                    const errors = {};
                                    const pattern = new RegExp(
                                        '^([a-zA-Z]+:\\/\\/)?' + // protocol
                                          '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
                                          '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR IP (v4) address
                                          '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
                                          '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
                                          '(\\#[-a-z\\d_]*)?$', // fragment locator
                                        'i'
                                      );
                                    if (
                                        values.website && !pattern.test(values.website)
                                    ) {
                                        errors.website = 'Invalid website';
                                    }
                                    if(!values.company_name){
                                        errors.company_name="Compnay name required";
                                    }
                                    return errors;
                                }}
                                onSubmit={(values, { setSubmitting, resetForm }) => {
                                    setTimeout(() => {
                                        console.log(values);
                                        updateProfile(values);
                                        values['user_id']=profile._id;
                                        console.log(values);

                                        axios.post('http://localhost:3001/api/'+profile.account_type+'_profile', values)
                                            .then(response => {
                                                console.log(response);
                                                notyf.success({
                                                  duration: 2000,
                                                  dismissible: true,
                                                  position: {
                                                    x: 'center',
                                                    y: 'top',
                                                  },
                                                  message: "Profile Created Successfully",
                                                });
                                                console.log(response.data);
                                                navigate("/dashboard");
                                            })
                                            .catch(error => {
                                                console.log(error)
                                                notyf.error({
                                                    duration: 2000,
                                                    dismissible: true,
                                                    position: {
                                                        x: 'center',
                                                        y: 'top',
                                                    },
                                                    message: error.response.data.error || "Error",
                                                });
                                                resetForm();
                                            });
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
                                    <form onSubmit={handleSubmit} id="form_client">
                                        <input
                                            className='block border border-grey-light w-full p-3 rounded mb-1'
                                            type="text"
                                            name="company_name"
                                            placeholder='Company Name'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.company_name}
                                        />
                                        <p className='text-red-600 mb-2'>{errors.company_name && touched.company_name && errors.company_name}</p>
                                        <input
                                            className='block border border-grey-light w-full p-3 rounded mb-1'
                                            type="text"
                                            name="website"
                                            placeholder='https://xyz.com/'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.website}
                                        />
                                        <p className='text-red-600 mb-2'>{errors.website && touched.website && errors.website}</p>
                                        <input
                                            className='block border border-grey-light w-full p-3 rounded mb-1'
                                            type="text"
                                            name="industry"
                                            placeholder='Industry'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.industry}
                                        />
                                        <p className='text-red-600 mb-2'>{errors.industry && touched.industry && errors.industry}</p>
                                        <input
                                            className='block border border-grey-light w-full p-3 rounded mb-1'
                                            type="text"
                                            name="location"
                                            placeholder='Location'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.location}
                                        />
                                        <p className='text-red-600 mb-2'>{errors.location && touched.location && errors.location}</p>
                                        <button
                                            className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-700 focus:outline-none my-4"
                                            type="submit"
                                            name="submit1"
                                            disabled={isSubmitting}
                                        >
                                            Complete Profile
                                        </button>
                                    </form>
                                )}
                            </Formik>
                        ) : (
                            <Formik
                                initialValues={{ skills:'', certifications:'', experience:'', hourly_rate:0, availability:'', }}
                                validate={values => {
                                    const errors = {};
                                    return errors;
                                }}
                                onSubmit={(values, { setSubmitting, resetForm }) => {
                                    setTimeout(() => {
                                        console.log(values);
                                        const skills = values.skills.split(',');
                                        const certifications = values.certifications.split(',');
                                        values.skills=skills;
                                        values.certifications=certifications;
                                        console.log(values);
                                        updateProfile(values);
                                        values['user_id']=profile._id;
                                        axios.post('http://localhost:3001/api/'+profile.account_type+'_profile', values)
                                            .then(response => {
                                                console.log(response);
                                                notyf.success({
                                                  duration: 2000,
                                                  dismissible: true,
                                                  position: {
                                                    x: 'center',
                                                    y: 'top',
                                                  },
                                                  message: "Profile Created Successfully",
                                                });
                                                console.log(response.data);
                                                navigate("/dashboard");
                                            })
                                            .catch(error => {
                                                console.log(error)
                                                notyf.error({
                                                    duration: 2000,
                                                    dismissible: true,
                                                    position: {
                                                        x: 'center',
                                                        y: 'top',
                                                    },
                                                    message: error.response.data.error || "Error",
                                                });
                                                resetForm();
                                            });
                                    }, 400);
                                    setSubmitting(false);
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
                                    <form onSubmit={handleSubmit} id="form_freelancer">
                                        <input
                                            className='block border border-grey-light w-full p-3 rounded mb-1'
                                            type="text"
                                            name="skills"
                                            placeholder='Skills'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.skills}
                                        />
                                        <p className='text-red-600 mb-2'>*comma seprated if more than one</p>
                                        <input
                                            className='block border border-grey-light w-full p-3 rounded mb-1'
                                            type="text"
                                            name="certifications"
                                            placeholder='Certificates'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.certifications}
                                        />
                                        <p className='text-red-600 mb-2'>*comma seprated if more than one</p>
                                        <input
                                            className='block border border-grey-light w-full p-3 rounded mb-1'
                                            type="text"
                                            name="experience"
                                            placeholder='Experience (specify in year/months)'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.experience}
                                        />
                                        <input
                                            className='block border border-grey-light w-full p-3 rounded mb-1'
                                            type="number"
                                            name="hourly_rate"
                                            placeholder='Hourly Rate (in INR)'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.hourly_rate}
                                        />
                                        <input
                                            className='block border border-grey-light w-full p-3 rounded mb-1'
                                            type="text"
                                            name="availability"
                                            placeholder='Availability'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.availability}
                                        />
                                        <button
                                            className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-700 focus:outline-none my-4"
                                            type="submit"
                                            name='submit2'
                                            disabled={isSubmitting}
                                        >
                                            Complete Profile
                                        </button>
                                    </form>
                                )}
                            </Formik>)}

                    </div>
                </div>
            </div >
        </>
    )
}

export default ProfileCreation