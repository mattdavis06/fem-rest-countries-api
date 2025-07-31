import { CountryTypes } from '@/types'
import Image from 'next/image'

export function PageHeader({ country }: { country: CountryTypes }) {
  return (
    <div>
      <Image
        src={country.flags.svg}
        alt={`${country.name.common.toLowerCase()}-flag`}
        height={400}
        width={400}
        className='h-full w-full object-cover md:max-h-96'
        priority
      />
    </div>
  )
}
