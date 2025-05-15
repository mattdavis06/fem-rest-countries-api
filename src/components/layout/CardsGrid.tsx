import countries from '../../../data.json'
import CountryCard from '../CountryCard'

const CardsGrid = () => {
  return (
    <section className='grid grid-cols-1 gap-12 px-4 py-8 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:px-0 lg:grid-cols-4 xl:gap-10'>
      {countries.slice(100, 108).map((country) => (
        <CountryCard key={country.name} country={country} />
      ))}
    </section>
  )
}

export default CardsGrid
