import { CountryTypes } from '@/types'
import Link from 'next/link'
import { CardContent, CardHeader } from './components'

interface CountryCardProps {
  country: CountryTypes
}

const CountryCard = ({ country }: CountryCardProps) => {
  return (
    <Link
      href={`countries/${country.region.toLowerCase()}/${country.name.common.toLowerCase().replace(' ', '-')}/${encodeURIComponent(country.cca3).toLowerCase()}`}
      className='dark:bg-primary-dark-blue hover:outline-primary-dark-blue grid w-full transform grid-rows-2 overflow-clip rounded-md bg-white shadow-md transition-all duration-200 ease-in-out hover:-translate-y-1 hover:shadow-xl hover:outline-3 dark:hover:outline-white'
    >
      <CardHeader country={country} />
      <CardContent country={country} />
    </Link>
  )
}

export default CountryCard
