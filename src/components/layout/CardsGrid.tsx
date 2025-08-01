import { fetchCountries } from '@/lib/fetchCountries'
import CardsGridClient from './CardsGridClient'

const CardsGrid = async () => {
  const countries = await fetchCountries()

  return <CardsGridClient countries={countries} />
}

export default CardsGrid
