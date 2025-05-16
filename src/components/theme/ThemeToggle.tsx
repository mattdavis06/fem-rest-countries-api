'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect } from 'react'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    // On render, set theme to light mode as default
    // TODO: Add system, or store in LS/state
    setTheme('light')
  }, [])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className='text-primary-light-blue flex cursor-pointer items-center gap-2 transition-all dark:text-white'>
          {theme === 'light' && (
            <>
              <Moon className='size-4 md:size-5' />
              <p className='text-base font-extrabold md:text-lg'>Dark Mode</p>
            </>
          )}
          {theme === 'dark' && (
            <>
              <Sun className='size-4 md:size-5' />
              <p className='text-base font-extrabold md:text-lg'>Light Mode</p>
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
