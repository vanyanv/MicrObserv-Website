import electron from '../../public/logos/electron-icon.svg';
import typescript from '../../public/logos/typescript.svg';
import react from '../../public/logos/react.svg';
import node from '../../public/logos/node.svg';
import tailwindcss from '../../public/logos/tailwindcss.svg';
import webpack from '../../public/logos/webpack.svg';

import Image from 'next/image';
export default function Logos() {
  return (
    <div className='bg-gray-900 py-24 sm:py-32'>
      <div className='mx-auto max-w-8xl px-6 lg:px-8'>
        <h2 className='text-center text-lg font-semibold leading-8 text-white'>
          Technologies We Used
        </h2>
        <div className='mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5'>
          <Image
            className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
            src={electron}
            alt='Electron'
            width={158}
            height={48}
          />
          <Image
            className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
            src={typescript}
            alt='TypeScript'
            width={158}
            height={48}
          />
          <Image
            className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
            src={react}
            alt='React'
            width={158}
            height={48}
          />
          <Image
            className='col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1'
            src={node}
            alt='node'
            width={158}
            height={48}
          />
          <Image
            className='col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1'
            src={webpack}
            alt='Webpack'
            width={158}
            height={48}
          />
        </div>
      </div>
    </div>
  );
}
