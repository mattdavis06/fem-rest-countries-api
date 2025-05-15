import FilterSelect from './FilterSelect'
import SearchFilter from './SearchFilter'

const SearchFilterSection = () => {
  return (
    <section className='flex flex-col gap-4 md:flex-row md:flex-wrap md:items-center md:justify-between'>
      <SearchFilter />
      <FilterSelect />
    </section>
  )
}

export default SearchFilterSection
