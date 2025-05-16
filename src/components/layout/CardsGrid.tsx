import { fetchAllCountries } from '@/lib/fetchCountries'
import CardsGridClient from './CardsGridClient'

const CardsGrid = async () => {
  const countries = await fetchAllCountries()

  return <CardsGridClient countries={countries} />
}

export default CardsGrid
