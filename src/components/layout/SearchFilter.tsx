'use client'

import { SearchIcon } from 'lucide-react'
import { useId } from 'react'
import { Input } from '../ui/input'
import { Label } from '../ui/label'

const SearchFilter = () => {
  const id = useId()

  return (
    <div>
      <Label htmlFor={id} className='sr-only'>
        Search for a country
      </Label>
      <div className='relative'>
        <Input
          id={id}
          className='peer ps-16'
          placeholder='Search for a country...'
          type='search'
        />
        <div className='text-primary-gray pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-6 peer-disabled:opacity-50 dark:text-white'>
          <SearchIcon size={20} />
        </div>
      </div>
    </div>
  )
}

export default SearchFilter
