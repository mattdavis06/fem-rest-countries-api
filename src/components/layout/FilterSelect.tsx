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
import { useEffect, useId, useState } from 'react'

const Component = () => {
  const id = useId()
  const countries = useCountriesStore((state) => state.countries)
  const filterByRegion = useCountriesStore((state) => state.filterByRegion)

  const [regions, setRegions] = useState<string[]>([])

  // Extract unique regions when countries change
  useEffect(() => {
    const uniqueRegions = Array.from(
      new Set(countries.map((c) => c.region).filter(Boolean)),
    ).sort()
    setRegions(uniqueRegions)
  }, [countries])

  const handleChange = (value: string) => {
    filterByRegion(value)
  }

  return (
    <div className='md:2/5 lg:flex-1/5'>
      <Label htmlFor={id} className='sr-only'>
        Filter by Region
      </Label>
      <Select onValueChange={handleChange}>
        <SelectTrigger id={id}>
          <SelectValue placeholder='Filter by Region' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='All'>All</SelectItem>
          {regions.map((region) => (
            <SelectItem key={region} value={region}>
              {region}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

export default Component
