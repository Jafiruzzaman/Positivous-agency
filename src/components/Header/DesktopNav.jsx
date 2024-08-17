import Button from "../../common/Button"
const DesktopNav = () => {
  return (
    <nav className="flex items-center gap-7">
      <ul className="flex items-center gap-3">
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
      <Button BtnText={`Request a quote`} btnStyle={`hover:bg-greenPrimary hover:border-greenPrimary  text-lg`}/>
    </nav>
  );
};

export default DesktopNav;
