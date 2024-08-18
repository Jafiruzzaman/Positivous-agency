import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="container sticky top-0 left-0 right-0 z-20 flex items-center justify-between py-4 mx-auto bg-white lg:py-8">
      {/* logo */}
      <div className="flex gap-1 md:gap-2">
        <img
          src="/image/Logo.svg"
          alt=""
          className="max-w-[25px] md:max-w-fit"
        />
        <span className="text-2xl font-medium capitalize lg:text-4xl md:text-3xl">
          positivus
        </span>
      </div>
      {/* desktop nav */}
      <div className="hidden xl:flex">
        <DesktopNav />
      </div>
      {/* mobile nav */}
      <div className="flex xl:hidden">
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;