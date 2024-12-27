import { Logo } from './logo'
import { MobileNavbar } from './mobile-navbar'
import { Navbar } from './navbar'

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/60 py-2 backdrop-blur">
      <div className="container mx-auto flex w-full items-center justify-between px-8">
        <Logo />
        <Navbar />
        <MobileNavbar />
      </div>
      <hr className="absolute bottom-0 w-full opacity-0 transition-opacity duration-300 ease-in-out" />
    </header>
  )
}
