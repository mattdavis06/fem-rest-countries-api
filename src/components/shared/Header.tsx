import { ThemeToggle } from '../theme/ThemeToggle'

const Header = () => {
  return (
    <header className='dark:bg-primary-dark-blue w-full bg-white px-4 py-8 shadow-md md:py-10'>
      <div className='mx-auto flex max-w-7xl items-center justify-between'>
        <h1 className='text-primary-light-blue text-lg font-extrabold md:text-2xl dark:text-white'>
          Where in the world?
        </h1>
        <div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

export default Header
