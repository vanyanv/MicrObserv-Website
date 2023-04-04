import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
  BellAlertIcon,
  ChartBarIcon,
  ArrowPathRoundedSquareIcon,
  PencilSquareIcon,
} from '@heroicons/react/20/solid';

import demo from '../../public/Demo.gif';
import dashboard from '../../public/dashboard.jpg';
import Image from 'next/image';

const features = [
  {
    name: 'Automated Logs',
    description:
      'Generated automatically these logs capture and record data related to system or application events, user activity, and other relevant information that can be used for analysis, troubleshooting, and reporting purposes.',
    icon: ArrowPathRoundedSquareIcon,
  },
  {
    name: 'Tracing',
    description:
      'Provides the ability to trace requests across microservices and identify the root cause of issues. This requires the tool to capture and correlate data across different services and components.',
    icon: PencilSquareIcon,
  },
  {
    name: 'Visualization',
    description:
      'Visualization is important to provide data and display key metrics to help catch issues with microservices quicker.',
    icon: ChartBarIcon,
  },
  {
    name: 'Alerting',
    description:
      'Alerts and notifications when issues or anomalies are detected. This includes the ability to set up customized alerts based on specific metrics or events.',
    icon: BellAlertIcon,
  },
  {
    name: 'Integration',
    description:
      'Our NPM package easily integrates to keep track of all requests being made between services recording key data metrics.',
    icon: Cog6ToothIcon,
  },
  {
    name: 'Database backups',
    description:
      'Logs are backed up to provide a way to protect against data loss by creating a copy of the database at a specific point in time, which can be used to restore data in case of a system failure, human error, or a cyber attack. ',
    icon: ServerIcon,
  },
];

export default function Info() {
  return (
    <div className='bg-gray-900 py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl sm:text-center'>
          <h2 className='text-base font-semibold leading-7 text-indigo-400'>
            Everything you need
          </h2>
          <p className='mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl'>
            What are the benfits of observability?
          </p>
          <p className='mt-6 text-lg leading-8 text-gray-300'>
            Observability is essential for managing and debugging complex
            microservices architectures. With <b>MicrObserv</b>, engineers can
            monitor, trace, and analyze the performance and behavior of
            individual services and the entire systems. This can help to
            identify and diagnose issues quickly, improve the reliability of the
            system, and optimize its performance.
          </p>
        </div>
      </div>
      <div className='relative overflow-hidden pt-16'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <Image
            src={dashboard}
            alt='App demo'
            className='mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10'
            width={2432}
            height={1442}
          />
          <div className='relative' aria-hidden='true'>
            <div className='absolute -inset-x-20 bottom-0 bg-gradient-to-t from-gray-900 pt-[7%]' />
          </div>
        </div>
      </div>
      <div className='mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8'>
        <dl className='mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16'>
          {features.map((feature) => (
            <div key={feature.name} className='relative pl-9'>
              <dt className='inline font-semibold text-white'>
                <feature.icon
                  className='absolute left-1 top-1 h-5 w-5 text-indigo-500'
                  aria-hidden='true'
                />
                {feature.name}
              </dt>{' '}
              <dd className='inline'>{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
