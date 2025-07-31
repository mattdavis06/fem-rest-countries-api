'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const currentTheme = theme === 'system' ? systemTheme : theme

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className='text-primary-light-blue flex cursor-pointer items-center gap-2 transition-all dark:text-white'
          aria-label={`Toggle theme, current: ${currentTheme}`}
          type='button'
        >
          {currentTheme === 'light' && (
            <>
              <Moon className='size-4 md:size-5' />
              <p className='text-base font-extrabold md:text-lg'>Dark Mode</p>
            </>
          )}
          {currentTheme === 'dark' && (
            <>
              <Sun className='size-4 md:size-5' />
              <p className='text-base font-extrabold md:text-lg'>Light Mode</p>
            </>
          )}
          <span className='sr-only'>Toggle theme</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuItem onClick={() => setTheme('light')}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
