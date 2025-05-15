import Image from 'next/image'
import Link from 'next/link'

interface CountryCardProps {
  country: CountryTypes
}

interface CountryTypes {
  region: string
  name: string
  flags: {
    svg: string
  }
  population: number
  capital?: string
}

const CountryCard = ({ country }: CountryCardProps) => {
  return (
    <Link
      href={`countries/${country.region.toLowerCase()}/${country.name.toLowerCase().replace(' ', '-')}`}
      key={country.name}
      className='dark:bg-primary-dark-blue grid w-full grid-rows-2 overflow-clip rounded-md bg-white'
    >
      <div className='max-h-[15rem] shadow-xs'>
        <Image
          src={country.flags.svg}
          alt={`${country.name.toLowerCase()}-flag`}
          width={500}
          height={500}
          className='h-full w-full object-cover'
        />
      </div>
      <div className='px-8 py-10 inset-shadow-xs'>
        <h2 className='text-primary-light-blue mb-6 text-2xl font-extrabold text-pretty dark:text-white'>
          {country.name}
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
