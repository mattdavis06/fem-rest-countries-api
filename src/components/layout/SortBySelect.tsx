'use client'

import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useCountriesStore } from '@/stores/useCountriesStore'
import { useId } from 'react'

const SortBySelect = () => {
  const id = useId()
  const sortBy = useCountriesStore((state) => state.sortBy)

  const handleChange = (value: string) => {
    switch (value) {
      case 'name-asc':
        sortBy('name', 'asc')
        break
      case 'name-desc':
        sortBy('name', 'desc')
        break
      case 'population-asc':
        sortBy('population', 'asc')
        break
      case 'population-desc':
        sortBy('population', 'desc')
        break
      default:
        break
    }
  }

  return (
    <div className='md:flex-1'>
      <Label htmlFor={id} className='sr-only'>
        Sort By
      </Label>
      <Select onValueChange={handleChange} defaultValue='name-asc'>
        <SelectTrigger id={id}>
          <SelectValue placeholder='Sort By' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='name-asc'>A-Z</SelectItem>
          <SelectItem value='name-desc'>Z-A</SelectItem>
          <SelectItem value='population-desc'>
            Population &#40;Highest&#41;
          </SelectItem>
          <SelectItem value='population-asc'>
            Population &#40;Lowest&#41;
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export default SortBySelect
