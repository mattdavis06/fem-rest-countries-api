import { CountryTypes } from '@/types'
import Image from 'next/image'
import Link from 'next/link'

interface CountryCardProps {
  country: CountryTypes
}

const CountryCard = ({ country }: CountryCardProps) => {
  return (
    <Link
      href={`countries/${country.region.toLowerCase()}/${country.name.common.toLowerCase().replace(' ', '-')}`}
      className='dark:bg-primary-dark-blue hover:outline-primary-dark-blue grid w-full transform grid-rows-2 overflow-clip rounded-md bg-white shadow-md transition-all duration-200 ease-in-out hover:-translate-y-1 hover:shadow-xl hover:outline-3 dark:hover:outline-white'
    >
      <div className='max-h-[15rem] shadow-xs'>
        <Image
          src={country.flags.svg}
          alt={`${country.name.common.toLowerCase()}-flag`}
          width={500}
          height={500}
          className='h-full w-full object-cover'
        />
      </div>
      <div className='px-8 py-10 inset-shadow-xs'>
        <h2 className='text-primary-light-blue mb-6 text-2xl font-extrabold text-pretty dark:text-white'>
          {country.name.common}
        </h2>
        <div className='space-y-1.5'>
          <p className='text-primary-light-blue text-xl font-semibold break-all dark:text-white'>
            Population:&nbsp;
            <span className='font-light'>
              {country.population.toLocaleString()}
            </span>
          </p>
          <p className='text-primary-light-blue text-xl font-semibold break-all dark:text-white'>
            Region:&nbsp;
            <span className='font-light'>{country.region}</span>
          </p>
          {country.capital && (
            <p className='text-primary-light-blue text-xl font-semibold break-all dark:text-white'>
              Capital:&nbsp;
              <span className='font-light'>{country.capital}</span>
            </p>
          )}
        </div>
      </div>
    </Link>
  )
}

export default CountryCard
