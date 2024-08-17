import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import ResponsiveMenu from "./ResponsiveMenu";
const MobileNav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    return setShowMenu(!showMenu);
  };
  return (
    <nav>
      <div
        className="hover:cursor-pointer hover:bg-greenPrimary px-1 py-1 rounded-md"
        onClick={toggleMenu}
      >
        {showMenu ? (
          <AiOutlineClose className="text-3xl text-blackPrimary " />
        ) : (
          <IoMenu className="text-3xl text-blackPrimary " />
        )}
      </div>
      <div className="">
        <ResponsiveMenu showMenu={showMenu} />
      </div>
    </nav>
  );
};

export default MobileNav;
