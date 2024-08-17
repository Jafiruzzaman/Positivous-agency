/* eslint-disable react/prop-types */

const ResponsiveMenu = ({showMenu}) => {
  return (
    <nav className={`absolute ${showMenu ? "top-[99%] active" :"-top-[25rem] menu-normal" } transition-all duration-500 right-0 left-0 bg-white shadow-md z-10 py-6`}>
      {/* logo */}
      <div className="">
      <ul className="flex items-left px-4 gap-3 flex-col ">
        <li>
          <a href="/" className="text-[20px] px-4 py-2 transition-all border-1 border-transparent hover:bg-greenPrimary hover:rounded-md">About us</a>
        </li>
        <li>
          <a href="/" className="text-[20px] px-4 py-2 transition-all border-1 border-transparent hover:bg-greenPrimary hover:rounded-md">Services</a>
        </li>
        <li>
          <a href="/" className="text-[20px] px-4 py-2 transition-all border-1 border-transparent hover:bg-greenPrimary hover:rounded-md">Use Cases</a>
        </li>
        <li>
          <a href="/" className="text-[20px] px-4 py-2 transition-all border-1 border-transparent hover:bg-greenPrimary hover:rounded-md">Pricing</a>
        </li>
        <li>
          <a href="/" className="text-[20px] px-4 py-2 transition-all border-1 border-transparent hover:bg-greenPrimary hover:rounded-md">Blog</a>
        </li>
      </ul>
      </div>
    </nav>
  )
}

export default ResponsiveMenu