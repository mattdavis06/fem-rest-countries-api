import { Button } from '@/components/ui/button'
import { fetchCountryByCode } from '@/lib/fetchCountry'
import { formatPopulation } from '@/lib/formatPopulation'
import { CountryTypes } from '@/types'
import Link from 'next/link'

export async function PageContent({ country }: { country: CountryTypes }) {
  const borderCountries = country.borders?.length
    ? await Promise.all(country.borders.map((code) => fetchCountryByCode(code)))
    : []

  return (
    <div className='space-y-4'>
      <h1 className='text-2xl font-bold'>{country?.name.common}</h1>
      <div className='flex flex-col gap-10'>
        <div className='flex flex-col gap-10 lg:flex-row lg:flex-wrap'>
          <ul className='space-y-2 lg:flex-1'>
            <li className='text-primary-dark-blue dark:text-white'>
              <p className='text-lg font-semibold lg:text-base'>
                Official Name:&nbsp;
                <span className='font-light'>{country?.name.official}</span>
              </p>
            </li>
            <li className='text-primary-dark-blue dark:text-white'>
              <p className='text-lg font-semibold lg:text-base'>
                Native Name:&nbsp;
                <span className='font-light'>
                  {country.name.nativeName
                    ? Object.values(country.name.nativeName)[0]?.official
                    : 'N/A'}
                </span>
              </p>
            </li>
            <li className='text-primary-dark-blue dark:text-white'>
              <p className='text-lg font-semibold lg:text-base'>
                Population:&nbsp;
                <span className='font-light'>
                  {formatPopulation(country.population)}
                </span>
              </p>
            </li>
            <li className='text-primary-dark-blue dark:text-white'>
              <p className='text-lg font-semibold lg:text-base'>
                Region:&nbsp;
                <span className='font-light'>
                  {country.region ? country.region : 'N/A'}
                </span>
              </p>
            </li>
            <li className='text-primary-dark-blue dark:text-white'>
              <p className='text-lg font-semibold lg:text-base'>
                Sub Region:&nbsp;
                <span className='font-light'>
                  {country.subregion ? country.subregion : 'N/A'}
                </span>
              </p>
            </li>
            <li className='text-primary-dark-blue dark:text-white'>
              <p className='text-lg font-semibold lg:text-base'>
                Capital:&nbsp;
                <span className='font-light'>
                  {country.capital ? country.capital : 'N/A'}
                </span>
              </p>
            </li>
            <li className='text-primary-dark-blue dark:text-white'>
              <p className='inline-flex text-lg font-semibold lg:text-base'>
                Currency:&nbsp;
                <span className='flex items-center gap-1 font-light capitalize'>
                  <span>
                    {country.currencies
                      ? Object.values(country.currencies)[0]?.name
                      : 'N/A'}
                  </span>
                  <span className='font-semibold'>
                    {country.currencies
                      ? Object.values(country.currencies)[0]?.symbol
                      : 'N/A'}
                  </span>
                </span>
              </p>
            </li>
            <li className='text-primary-dark-blue dark:text-white'>
              <p className='text-lg font-semibold lg:text-base'>
                Languages:&nbsp;
                <span className='font-light'>
                  {country.languages
                    ? Object.values(country.languages)
                        .map((lang) => lang)
                        .join(', ')
                    : 'N/A'}
                </span>
              </p>
            </li>
          </ul>
          <ul className='space-y-2 lg:flex-1'>
            <li className='text-primary-dark-blue dark:text-white'>
              <p className='inline-flex text-lg font-semibold lg:text-base'>
                Area:&nbsp;
                <span className='font-light'>
                  {country.area.toLocaleString()}km<sup>2</sup>
                </span>
              </p>
            </li>
            <li className='text-primary-dark-blue dark:text-white'>
              <p className='inline-flex text-lg font-semibold lg:text-base'>
                Vehicle Registration Code:&nbsp;
                <span className='font-light'>
                  {country.car.signs ? country.car.signs : 'N/A'}
                </span>
              </p>
            </li>
            <li className='text-primary-dark-blue dark:text-white'>
              <p className='inline-flex text-lg font-semibold lg:text-base'>
                Driving Side:&nbsp;
                <span className='font-light capitalize'>
                  {country.car.side}
                </span>
              </p>
            </li>
            <li className='text-primary-dark-blue dark:text-white'>
              <p className='inline-flex text-lg font-semibold lg:text-base'>
                Top Level Domain:&nbsp;
                <span className='font-light'>
                  {country.tld ? country.tld : 'N/A'}
                </span>
              </p>
            </li>
            <li className='text-primary-dark-blue dark:text-white'>
              <p className='inline-flex text-lg font-semibold lg:text-base'>
                Timezones:&nbsp;
                {country.timezones.length > 0 ? (
                  <span className='flex flex-col'>
                    {country.timezones.map((timezone, idx) => (
                      <span key={idx} className='font-light whitespace-nowrap'>
                        {timezone}
                      </span>
                    ))}
                  </span>
                ) : (
                  <span>N/A</span>
                )}
              </p>
            </li>
            <li className='text-primary-dark-blue dark:text-white'>
              <p className='inline-flex text-lg font-semibold lg:text-base'>
                Start of the Week:&nbsp;
                <span className='font-light capitalize'>
                  {country.startOfWeek}
                </span>
              </p>
            </li>
          </ul>
        </div>
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Border Countries:</h2>
          {borderCountries.length > 0 ? (
            <ul className='grid grid-cols-2 gap-2 sm:grid-cols-3 md:flex md:flex-wrap'>
              {borderCountries
                .filter((c): c is CountryTypes => c !== null)
                .map((borderCountry: CountryTypes) => (
                  <li key={borderCountry.cca3}>
                    <Link
                      href={`/countries/${borderCountry.region.toLowerCase()}/${borderCountry.name.common.toLowerCase().replace(' ', '-')}/${encodeURIComponent(borderCountry.cca3).toLowerCase()}`}
                    >
                      <Button className='w-full gap-1.5 md:w-fit'>
                        {borderCountry.name.common}
                        <span className='self-baseline'>
                          {borderCountry.flag}
                        </span>
                      </Button>
                    </Link>
                  </li>
                ))}
            </ul>
          ) : (
            <p className='text-lg lg:text-base'>No border countries.</p>
          )}
        </div>
      </div>
    </div>
  )
}
