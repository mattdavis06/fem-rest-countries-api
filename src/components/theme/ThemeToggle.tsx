'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className='text-primary-dark-blue flex cursor-pointer items-center gap-2 transition-all dark:text-white'>
          {theme === 'light' && (
            <>
              <Moon className='size-5' />
              <p className='text-base font-extrabold'>Dark Mode</p>
            </>
          )}
          {theme === 'dark' && (
            <>
              <Sun className='size-5' />
              <p className='text-base font-extrabold'>Light Mode</p>
            </>
          )}
          <span className='sr-only'>Toggle theme</span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuItem onClick={() => setTheme('light')}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          Dark
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
