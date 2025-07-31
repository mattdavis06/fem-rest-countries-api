import { Skeleton } from '@/components/ui/skeleton'

const CountryLoading = () => {
  return (
    <section>
      <Skeleton className='h-10 w-full' />
      <div className='pt-10'>
        <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
          <Skeleton className='h-56 w-full lg:h-98' />
          <Skeleton className='h-[42.5rem] w-full lg:h-98' />
          <Skeleton className='h-60 w-full lg:col-span-2 lg:h-96' />
        </div>
      </div>
    </section>
  )
}

export default CountryLoading
