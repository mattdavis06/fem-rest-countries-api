import { cn } from '@/lib/utils'

function Skeleton({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='skeleton'
      className={cn(
        'bg-primary-gray/30 dark:bg-primary-dark-blue animate-pulse',
        className,
      )}
      {...props}
    />
  )
}

export { Skeleton }
