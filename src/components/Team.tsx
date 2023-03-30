import Image from 'next/image';
import andrew from '../../public/people/andrew.jpeg';
import otis from '../../public/people/otis.jpeg';
import chance from '../../public/people/chance.jpeg';
import vardan from '../../public/people/vardan.jpeg';

const people = [
  {
    name: 'Andrew Ngo',
    role: 'Software Engineer',
    imageUrl: andrew,
    gitHubUrl: '#',
    linkedinUrl: 'https://www.linkedin.com/in/andrew-tien-ngo/',
  },
  {
    name: 'Vardan Vanyan',
    role: 'Software Engineer',
    imageUrl: vardan,
    gitHubUrl: '#',
    linkedinUrl: 'https://www.linkedin.com/in/vardanvanyan/',
  },
  {
    name: 'Chancellor Kupersmith',
    role: 'Software Engineer',
    imageUrl: chance,
    gitHubUrl: '#',
    linkedinUrl: 'https://www.linkedin.com/in/chance-kupersmith/',
  },
  {
    name: 'Otis Jones',
    role: 'Software Engineer',
    imageUrl: otis,
    gitHubUrl: '#',
    linkedinUrl: 'https://www.linkedin.com/in/otisjones/',
  },
];

export default function Team() {
  return (
    <div className='bg-gray-900 py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 text-center lg:px-8'>
        <div className='mx-auto max-w-2xl'>
          <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
            Meet our team
          </h2>
          <p className='mt-4 text-lg leading-8 text-gray-400'>
            We’re a dynamic group of individuals who are passionate about what
            we do.
          </p>
        </div>
        <ul
          role='list'
          className='mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8'
        >
          {people.map((person) => (
            <li
              key={person.name}
              className='rounded-2xl bg-gray-800 px-8 py-10'
            >
              <Image
                className='mx-auto h-48 w-48 rounded-full md:h-56 md:w-56'
                src={person.imageUrl}
                width={300}
                height={20}
                alt=''
              />
              <h3 className='mt-6 text-base font-semibold leading-7 tracking-tight text-white'>
                {person.name}
              </h3>
              <p className='text-sm leading-6 text-gray-400'>{person.role}</p>
              <ul role='list' className='mt-6 flex justify-center gap-x-6'>
                <li>
                  <a
                    href={person.gitHubUrl}
                    className='text-gray-400 hover:text-gray-300'
                  >
                    <span className='sr-only'>Github</span>
                    <svg
                      className='h-5 w-5'
                      aria-hidden='true'
                      fill='currentColor'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                    >
                      <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href={person.linkedinUrl}
                    className='text-gray-400 hover:text-gray-300'
                  >
                    <span className='sr-only'>LinkedIn</span>
                    <svg
                      className='h-5 w-5'
                      aria-hidden='true'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
