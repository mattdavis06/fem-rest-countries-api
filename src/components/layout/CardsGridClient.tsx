'use client'

import { useCountriesStore } from '@/stores/useCountriesStore'
import { CountryTypes } from '@/types'
import { useEffect } from 'react'
import CountryCard from '../CountryCard/CountryCard'

interface Props {
  countries: CountryTypes[]
}

const CardsGridClient = ({ countries }: Props) => {
  const { filteredCountries, setCountries } = useCountriesStore()

  useEffect(() => {
    setCountries(countries)
  }, [countries, setCountries])

  return (
    <section className='grid grid-cols-1 gap-12 py-8 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4'>
      {filteredCountries.map((country) => (
        <CountryCard key={country.name.common} country={country} />
      ))}
    </section>
  )
}

export default CardsGridClient
