import React, { useState, useContext, useEffect } from 'react'
import Card from '../components/card/index'
import Modal from '../components/Modal';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from "axios";
import { ProfileContext } from '../context/ProfileContext';
import { Notyf } from 'notyf';
import { ImSpinner2 } from "react-icons/im";
import JobCard from '../components/card/JobCard';

const Jobs = () => {
  const Loader = () => {
    return (
      <ImSpinner2 className='animate-spin w-12 h-12 text-main mx-auto' />
    );
  };

  const { profile } = useContext(ProfileContext);

  const notyf = new Notyf();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [jobData, setJobData] = useState();
  useEffect(() => {
    // http://localhost:3001/api/jobs/client/643e0355e2f27749c942e8f8/jobs
    axios.get('http://localhost:3001/api/jobs/' + profile.account_type + '/' + profile._id + '/jobs')
      .then(response => {
        console.log("res", response);
        const data = response.data;
        setJobData(data);
        setLoading(false);
      })
      .catch(error => {
        console.log(error)
      });
  }, []);


  return (
    <>
      <Card extra={"w-full h-full p-3"}>
        <div className='flex justify-between'>
          <div>
            <h1 className='text-xl text-brand-500 font-bold'>Job List</h1>
          </div>
          <div >
            <button className='linear rounded-[20px] bg-lightPrimary px-4 py-2 text-base font-medium text-brand-500 transition duration-200 hover:bg-gray-100 active:bg-gray-200' onClick={() => setShowModal(true)}>Create Job</button>
          </div>
        </div>
        <div className='p-5'>
          {
            loading ? (
              <Loader />
            ) : (
              jobData.map((item) => {
                console.log(item);
                return (
                  <>
                    <JobCard title={item.title} description={profile.first_name} price={item.budget} />
                  </>
                )
              })
            )
          }
        </div>
      </Card>

      {showModal ? (
        <>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => setShowModal(false)}
            ></div>
            <div className="flex items-center min-h-screen px-4 py-8">
              <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                <div className="mt-3 sm:flex">
                  <div className="mt-2 text-center w-full mb-2 sm:ml-4 sm:text-left">
                    <h4 className="text-xl text-center  mb-2 font-medium text-gray-800">
                      Add new Job
                    </h4>
                    {/* <p className="mt-2 text-[15px] leading-relaxed text-gray-500">
                      Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.
                    </p> */}
                    <div>
                      <Formik
                        initialValues={{ title: '', description: '', budget: 0, category: '', deadline: new Date(), skills_required: '' }}
                        validate={values => {
                          const errors = {};
                          if (!values.title) {
                            errors.title = 'Title Required';
                          }
                          if (!values.description) {
                            errors.description = 'Description Required';
                          }
                          if (!values.budget) {
                            errors.budget = 'Budget Required';
                          }
                          if (!values.category) {
                            errors.category = 'Category Required';
                          }
                          if (!values.deadline) {
                            errors.deadline = 'Deadline Required';
                          }
                          return errors;
                        }}
                        onSubmit={(values, { setSubmitting, resetForm }) => {
                          setTimeout(() => {
                            console.log(values);
                            const skills = values.skills_required.split(',');
                            values.skills_required = skills;
                            values['client_id'] = profile._id;
                            axios.post('http://localhost:3001/api/jobs', values)
                              .then(response => {
                                console.log(response);
                                notyf.success({
                                  duration: 2000,
                                  dismissible: true,
                                  position: {
                                    x: 'center',
                                    y: 'top',
                                  },
                                  message: "Job Created Successfully",
                                });
                                resetForm();
                                setShowModal(false);
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
                          <form onSubmit={handleSubmit}>
                            <input
                              className='block border border-grey-light w-full p-3 rounded mb-1'
                              type="text"
                              name="title"
                              placeholder='Enter Title'
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.title}
                            />
                            <p className='text-red-600 mb-2'>{errors.title && touched.title && errors.title}</p>
                            <textarea
                              className='block border border-grey-light w-full p-3 rounded mb-1'
                              type="text"
                              name="description"
                              placeholder='Enter Description'
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.description}
                            />
                            <p className='text-red-600 mb-2'>{errors.description && touched.description && errors.description}</p>
                            <input
                              className='block border border-grey-light w-full p-3 rounded mb-1'
                              type="number"
                              name="budget"
                              placeholder='Enter Title'
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.budget}
                            />
                            <p className='text-red-600 mb-2'>{errors.budget && touched.budget && errors.budget}</p>
                            <input
                              className='block border border-grey-light w-full p-3 rounded mb-1'
                              type="text"
                              name="category"
                              placeholder='Enter Category'
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.category}
                            />
                            <p className='text-red-600 mb-2'>{errors.category && touched.category && errors.category}</p>
                            <input
                              className='block border border-grey-light w-full p-3 rounded mb-1'
                              type="date"
                              name="deadline"
                              placeholder='Enter Date'
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.deadline}
                            />
                            <p className='text-red-600 mb-2'>{errors.deadline && touched.deadline && errors.deadline}</p>
                            <input
                              className='block border border-grey-light w-full p-3 rounded mb-1'
                              type="text"
                              name="skills_required"
                              placeholder='Enter Skills Required'
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.skills_required}
                            />
                            <p className='text-red-600 mb-2'>{errors.skills_required && touched.skills_required && errors.skills_required}</p>
                            <div className="items-center gap-2 mt-3 sm:flex">
                              <button
                                className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-700 focus:outline-none my-4 flex-1"
                                type="submit"
                                disabled={isSubmitting}
                              >
                                Create
                              </button>
                              <button
                                className="w-full text-center py-3 rounded bg-red-500 text-white hover:bg-red-700 focus:outline-none my-4 flex-1"
                                onClick={() => setShowModal(false)}
                              >
                                Cancel
                              </button>
                            </div>
                          </form>
                        )}
                      </Formik>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </>
      ) : null}

    </>
  )
}

export default Jobs