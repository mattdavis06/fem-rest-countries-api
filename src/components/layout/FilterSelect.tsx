import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useId } from 'react'

const Component = () => {
  const id = useId()

  return (
    <div>
      <Label htmlFor={id} className='sr-only'>
        Filter by Region
      </Label>
      <Select>
        <SelectTrigger id={id}>
          <SelectValue placeholder='Filter by Region' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='1'>React</SelectItem>
          <SelectItem value='2'>Next.js</SelectItem>
          <SelectItem value='3'>Astro</SelectItem>
          <SelectItem value='4'>Gatsby</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export default Component
