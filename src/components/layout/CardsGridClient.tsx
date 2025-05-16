'use client'

import { useCountriesStore } from '@/stores/useCountriesStore'
import { CountryTypes } from '@/types'
import { useEffect } from 'react'
import CountryCard from '../CountryCard'

interface Props {
  countries: CountryTypes[]
}

const CardsGridClient = ({ countries }: Props) => {
  const { filteredCountries, setCountries } = useCountriesStore()

  useEffect(() => {
    setCountries(countries)
  }, [countries, setCountries])

  return (
    <section className='grid grid-cols-1 gap-12 px-4 py-8 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:px-0 lg:grid-cols-4 xl:gap-10'>
      {filteredCountries.map((country) => (
        <CountryCard key={country.name.common} country={country} />
      ))}
    </section>
  )
}

export default CardsGridClient
