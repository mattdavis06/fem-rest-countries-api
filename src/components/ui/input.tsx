import { cn } from '@/lib/utils'

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot='input'
      className={cn(
        'border-input placeholder:text-primary-gray flex h-14 w-full min-w-0 bg-white px-3 py-1 pe-6 text-base font-light shadow-md inset-shadow-sm/5 transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
        'focus-visible:border-ring focus-visible:ring-primary-gray/50 focus-visible:ring-[2px]',
        'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-primary-gray dark:bg-primary-dark-blue rounded-sm border-none font-light dark:text-white dark:placeholder:text-white',
        type === 'search' &&
          '[&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none [&::-webkit-search-results-button]:appearance-none [&::-webkit-search-results-decoration]:appearance-none',
        className,
      )}
      {...props}
    />
  )
}

export { Input }
