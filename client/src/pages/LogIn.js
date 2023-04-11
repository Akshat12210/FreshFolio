import { LockClosedIcon } from '@heroicons/react/20/solid'
import { useEffect } from 'react';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import portfolio from '../assets/portfolio.svg'
import { Link } from 'react-router-dom';
import axios from "axios";
import { Notyf } from 'notyf';
export default function LogIn() {
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
    <>
      <Link to="/">
        <h2 className='text-bold text-2xl mx-5 mt-5'>FreshFolio</h2>
      </Link>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8  shadow-md p-10 rounded bg-white ">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src={portfolio}
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl  tracking-tight text-gray-900">
              Log in to your account
            </h2>
          </div>
          <div>
            <Formik
              initialValues={{ email: '', password: '', rememberMe: false }}
              validate={values => {
                const errors = {};
                if (!values.email) {
                  errors.email = 'Email Required';
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = 'Invalid email address';
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                setTimeout(() => {
                  console.log(values);
                  axios.post('http://localhost:3001/api/user/login', values)
                    .then(response => {
                      console.log(response);
                      notyf.success({
                        duration: 2000,
                        dismissible: true,
                        position: {
                          x: 'center',
                          y: 'top',
                        },
                        message: "Login Successfull",
                      });
                      console.log(values);
                      navigate("/Clientdash");
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
                    type="email"
                    name="email"
                    placeholder='email@address.com'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  <p className='text-red-600 mb-2'>{errors.email && touched.email && errors.email}</p>
                  <input
                    className='block border border-grey-light w-full p-3 mb-3 rounded'
                    type="password"
                    name="password"
                    placeholder='password'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="rememberMe"
                        type="checkbox"
                        onChange={handleChange}
                        value={values.rememberMe}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                        Remember me
                      </label>
                    </div>

                    <div className="text-sm">
                      <Link to="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                        Forgot your password?
                      </Link>
                    </div>
                  </div>
                  <button
                    className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-700 focus:outline-none my-4"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Log in
                  </button>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div >
    </>
  )
}
