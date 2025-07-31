import CardsGrid from '@/components/layout/CardsGrid'
import SearchFilterSection from '@/components/layout/SearchFilterSection'

export default async function Home() {
  return (
    <>
      <SearchFilterSection />
      <CardsGrid />
    </>
  )
}
