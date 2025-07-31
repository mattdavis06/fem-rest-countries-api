import { formatPopulation } from '@/lib/formatPopulation'
import { CountryTypes } from '@/types'

export function CardContent({ country }: { country: CountryTypes }) {
  return (
    <div className='px-8 py-10 inset-shadow-xs'>
      <h2 className='text-primary-light-blue mb-6 text-2xl font-extrabold text-pretty dark:text-white'>
        {country.name.common}
      </h2>
      <div className='space-y-1.5'>
        <p className='text-primary-light-blue text-xl font-semibold break-all dark:text-white'>
          Population:&nbsp;
          <span className='font-light'>
            {formatPopulation(country.population)}
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
  )
}
