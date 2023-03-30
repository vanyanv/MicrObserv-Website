import React from 'react';
import Image from 'next/image';
import dashboard from '../../public/dashboard.jpg';
import PropTypes from 'prop-types';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

export default function Hero() {
  return (
    <div className='relative isolate overflow-hidden bg-gray-900'>
      <svg
        className='absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]'
        aria-hidden='true'
      >
        <defs>
          <pattern
            id='983e3e4c-de6d-4c3f-8d64-b9761d1534cc'
            width={200}
            height={200}
            x='50%'
            y={-1}
            patternUnits='userSpaceOnUse'
          >
            <path d='M.5 200V.5H200' fill='none' />
          </pattern>
        </defs>
        <svg x='50%' y={-1} className='overflow-visible fill-gray-800/20'>
          <path
            d='M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z'
            strokeWidth={0}
          />
        </svg>
        <rect
          width='100%'
          height='100%'
          strokeWidth={0}
          fill='url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)'
        />
      </svg>
      <svg
        viewBox='0 0 1108 632'
        aria-hidden='true'
        className='absolute top-10 left-[calc(50%-4rem)] -z-10 w-[69.25rem] max-w-none transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]'
      >
        <path
          fill='url(#175c433f-44f6-4d59-93f0-c5c51ad5566d)'
          fillOpacity='.2'
          d='M235.233 402.609 57.541 321.573.83 631.05l234.404-228.441 320.018 145.945c-65.036-115.261-134.286-322.756 109.01-230.655C968.382 433.026 1031 651.247 1092.23 459.36c48.98-153.51-34.51-321.107-82.37-385.717L810.952 324.222 648.261.088 235.233 402.609Z'
        />
        <defs>
          <linearGradient
            id='175c433f-44f6-4d59-93f0-c5c51ad5566d'
            x1='1220.59'
            x2='-85.053'
            y1='432.766'
            y2='638.714'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#4F46E5' />
            <stop offset={1} stopColor='#80CAFF' />
          </linearGradient>
        </defs>
      </svg>
      <div className='mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:py-40 lg:px-8'>
        <div className='mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8'>
          <img
            className='h-11'
            src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500'
            alt='Your Company'
          />
          <div className='mt-24 sm:mt-32 lg:mt-16'>
            <a
              href='https://github.com/oslabs-beta/MicrObserv'
              className='inline-flex space-x-6'
            >
              <span className='rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-400 ring-1 ring-inset ring-indigo-500/20'>
                What's new
              </span>
              <span className='inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-300'>
                <span>v1.0</span>
                <ChevronRightIcon
                  className='h-5 w-5 text-gray-500'
                  aria-hidden='true'
                />
              </span>
            </a>
          </div>
          <h1 className='mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl'>
            MicrObserv
          </h1>
          <p className='mt-6 text-lg leading-8 text-gray-300'>
            MicrObserv is here to simplify observability for your microservice
            architecture by consolidating all logs and tracers into one
            centralized database.
          </p>
          <div className='mt-10 flex items-center gap-x-6'>
            <a
              href='https://github.com/oslabs-beta/MicrObserv'
              className='rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400'
            >
              Documentation
            </a>
            <a
              href='https://github.com/oslabs-beta/MicrObserv'
              className='text-sm flex gap-2 font-semibold leading-6 text-white'
            >
              <svg
                className='h-5 w-5'
                aria-hidden='true'
                fill='currentColor'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
              >
                <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
              </svg>
              Github{' '}
              <span className='animate-pulse' aria-hidden='true'>
                →
              </span>
            </a>
          </div>
        </div>
        <div className='mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32'>
          <div className='max-w-3xl flex-none sm:max-w-5xl lg:max-w-none'>
            <Image
              src={dashboard}
              alt='App screenshot'
              width={2432}
              height={1442}
              className='w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

//prop types
Hero.prototype = {};
