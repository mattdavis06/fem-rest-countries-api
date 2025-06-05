import BackBtn from '@/components/layout/shared/BackBtn'
import { fetchCountryByCode } from '@/lib/fetchCountry'
import Image from 'next/image'

type CountryPageProps = {
  params: {
    cca3: string
  }
}

export default async function CountryPage({ params }: CountryPageProps) {
  const decodedCode = decodeURIComponent(params.cca3)
  const country = await fetchCountryByCode(decodedCode)

  // TODO: Handle if no country
  // if (!country) return notFound()
  if (!country) return <div>No country found</div>

  return (
    <section>
      <div>
        <BackBtn />
      </div>
      <div className='py-10'>
        <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
          <div>
            <Image
              src={country.flags.svg}
              alt={`${country.name.common.toLowerCase()}-flag`}
              height={400}
              width={400}
              className='h-full w-full object-cover lg:max-h-96 lg:object-fill'
            />
          </div>
          <div className='space-y-4'>
            <h1 className='text-2xl font-bold'>{country?.name.common}</h1>
            <div className='flex flex-col gap-10'>
              <div className='flex flex-col gap-10 lg:flex-row lg:flex-wrap'>
                <ul className='space-y-2'>
                  <li className='text-primary-dark-blue dark:text-white'>
                    <p className='text-lg font-semibold lg:text-base'>
                      Official Name:&nbsp;
                      <span className='font-light'>
                        {country?.name.official}
                      </span>
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
                        {country.population.toLocaleString()}
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
                <ul className='space-y-2'>
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
                        <div className='flex flex-col'>
                          {country.timezones.map((timezone, idx) => (
                            <span
                              key={idx}
                              className='font-light whitespace-nowrap'
                            >
                              {timezone}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <span>N/A</span>
                      )}
                    </p>
                  </li>
                </ul>
              </div>
              <h2 className='text-xl font-semibold'>Border Countries:</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
