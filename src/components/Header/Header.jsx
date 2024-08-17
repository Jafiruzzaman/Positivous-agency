import DesktopNav from "./DesktopNav"
import MobileNav from "./MobileNav"

const Header = () => {
  return (
    <header className="sticky flex items-center justify-between container mx-auto py-4 lg:py-8">
      {/* logo */}
      <div className="flex gap-1 md:gap-2">
        <img src="/image/Logo.svg" alt="" className="max-w-[25px] md:max-w-fit"/>
        <span className="lg:text-4xl md:text-3xl text-2xl capitalize font-medium">
          positivus
        </span>
      </div>  
      {/* desktop nav */}
      <div className="hidden xl:flex">
        <DesktopNav/>
      </div>
      {/* mobile nav */}
      <div className="flex lg:hidden">
        <MobileNav/>
      </div>
    </header>
  )
}

export default Header