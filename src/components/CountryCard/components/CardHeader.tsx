import { CountryTypes } from '@/types'
import Image from 'next/image'

export function CardHeader({ country }: { country: CountryTypes }) {
  return (
    <div className='relative max-h-[15rem] shadow-xs'>
      <Image
        src={country.flags.svg}
        alt={`${country.name.common.toLowerCase()}-flag`}
        className='h-full w-full object-cover'
        fill
        priority
        loading='eager'
      />
    </div>
  )
}
