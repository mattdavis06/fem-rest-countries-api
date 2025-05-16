'use client'

import { Button } from '@/components/ui/button'
import { useCountriesStore } from '@/stores/useCountriesStore'
import { RotateCcw } from 'lucide-react'

const ResetBtn = () => {
  const resetFilters = useCountriesStore((state) => state.resetFilters)
  return (
    <Button className='h-14 md:flex-1' onClick={() => resetFilters()}>
      <RotateCcw />
      Reset Filters
    </Button>
  )
}

export default ResetBtn
