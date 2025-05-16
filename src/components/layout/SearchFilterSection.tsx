import FilterSelect from './FilterSelect'
import SearchFilter from './SearchFilter'
import ResetBtn from './shared/ResetBtn'
import SortBySelect from './SortBySelect'

const SearchFilterSection = () => {
  return (
    <section className='space-y-2'>
      <div className='flex flex-col gap-2 md:flex-row md:items-center md:gap-4'>
        <SearchFilter />
        <FilterSelect />
      </div>
      <div className='flex flex-col gap-2 md:flex-row md:items-center md:gap-4'>
        <SortBySelect />
        <ResetBtn />
      </div>
    </section>
  )
}

export default SearchFilterSection
