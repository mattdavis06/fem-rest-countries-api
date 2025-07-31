import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <section className='flex flex-col items-center justify-center space-y-6 py-10 text-center'>
      <div>
        <h1 className='text-primary-light-blue text-4xl font-bold dark:text-white'>
          Country Not Found
        </h1>
        <p className='text-primary-dark-blue dark:text-primary-gray text-xl'>
          Sorry, we couldn’t find that country. It might have been removed or
          the country code is incorrect.
        </p>
      </div>
      <Link href='/'>
        <Button>
          <ArrowLeft />
          Back to Home
        </Button>
      </Link>
    </section>
  )
}
