import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import img2 from '../assets/img_2.svg';
import img3 from '../assets/img_3.svg';
import img4 from '../assets/img_4.svg';

const features = [
  {
    name: 'Collaborate and Learn',
    description:
      "Freshfolio's Team-Based Approach to Freelancing",
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Rating System',
    description: 'Find Tasks That Match Your Skill Level',
    icon: LockClosedIcon,
  },
  {
    name: 'Project Tracking Tools',
    description: 'Innovative Tools for Project Management, Communication, and Payment Processing on Freshfolio',
    icon: ServerIcon,
  },
]

export default function Card() {
  return (
    <div className="overflow-hidden bg-[#d1d1e9] py-24 sm:py-32" id="works">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">FreshFolio</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">              Freshfolio: Where freelancers of all levels can find support, growth, and success
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute top-1 left-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src={img3}
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}
