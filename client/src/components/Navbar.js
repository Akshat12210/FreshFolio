import { Fragment, useState, useEffect } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useLocation, Link } from 'react-router-dom'
import vrsvg from '../assets/portfolio.svg'
const navigation = [
  { name: 'Home', href: '/', current: true },
  // { name: 'Live', href: '/live', current: false },
  { name: 'Find Talent', href: '/findtalent', current: true },
  { name: 'Find Work', href: '/findwork', current: false },
  // { name: 'SignIn', href: '/SignIn', current: false }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const location = useLocation();
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const pathname = location.pathname;
    const page = pathname.charAt(1).toUpperCase() + pathname.substring(2) || 'Home';
    setActive(page);
  }, [location]);

  return (
    <Disclosure as="nav" className="bg-[#d1d1e9]">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-10 w-auto lg:hidden"
                    src={vrsvg}
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src={vrsvg}
                    alt="Your Company"
                  />
                  <p className='text-[#2b2c34] font-bold text-lg m-1'>FreshFolio</p>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={active === item.name ? 'rounded-md px-3 py-2 text-sm font-medium bg-gray-900 text-white' : 'rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-700 hover:text-white'}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>

                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* <button
                  type="button"
                  className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button> */}
                <Link
                to="/SignIn"
                  type='button'
                  className='font-semibold text-gray-700 m-1 mr-5'
                >
                  Sign In
                </Link>
                <Link
                to="/Join"
                  type='button'
                  className='font-semibold text-gray-700 m-1 border-2 rounded-md px-4 py-1 border-black hover:bg-[#6246ea] hover:text-[#fffffe] hover:border-[#fffffe]'
                >
                  Join
                </Link>

              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
