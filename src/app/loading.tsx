import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  const loadingCards = Array.from({ length: 12 }, (_, index) => index)

  return (
    <main className='px-4 py-8'>
      <div className='mx-auto max-w-7xl'>
        <section className='space-y-2'>
          <div className='flex flex-col gap-2 md:flex-row md:items-center'>
            <Skeleton className='h-14 w-full rounded-sm md:flex-3/5 lg:flex-4/5' />
            <Skeleton className='md:2/5 h-14 w-full rounded-sm lg:flex-1/5' />
          </div>
          <div className='flex flex-col gap-2 md:flex-row md:items-center'>
            <Skeleton className='h-14 w-full rounded-sm md:flex-1' />
            <Skeleton className='h-14 w-full rounded-sm md:flex-1' />
          </div>
        </section>
        <section className='grid grid-cols-1 gap-12 py-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4'>
          {loadingCards.map((_, index) => (
            <Skeleton key={index} className='h-[32rem] w-full rounded-md' />
          ))}
        </section>
      </div>
    </main>
  )
}
