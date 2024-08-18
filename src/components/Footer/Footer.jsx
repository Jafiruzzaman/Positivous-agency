import { FaFacebook, FaTwitter } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import Button from "../../common/Button.jsx";

const Footer = () => {
  return (
    <section className="container mx-auto xl:mt-[7rem]">
      <div className="p-8 bg-blackPrimary rounded-tl-3xl rounded-tr-3xl">
        {/* first section*/}
        <div className="mb-10 ">
          <div className="flex flex-col items-center justify-between lg:flex-row">
            <div className="flex items-center gap-2">
              <img src="/image/logo-02.svg" alt="" />
              <span className="text-2xl font-medium text-white">
                Positivous
              </span>
            </div>
            {/*  text*/}
            <nav className="flex flex-col items-center gap-6 my-8 lg:flex-row lg:my-0">
              <li className={`list-none`}>
                <a href="" className={`text-white text-lg`}>
                  About Us
                </a>
              </li>
              <li className={`list-none`}>
                <a href="" className={`text-white text-lg`}>
                  Services
                </a>
              </li>
              <li className={`list-none`}>
                <a href="" className={`text-white text-lg`}>
                  Use Cases
                </a>
              </li>
              <li className={`list-none`}>
                <a href="" className={`text-white text-lg`}>
                  Teams
                </a>
              </li>
            </nav>
            {/*  icons*/}
            <div className="flex items-center gap-4 text-2xl ">
              <FaFacebook
                className={`text-blackPrimary bg-white p-1 text-3xl rounded-3xl`}
              />
              <RiLinkedinFill
                className={`text-blackPrimary bg-white p-1 text-3xl rounded-3xl`}
              />
              <FaTwitter
                className={`text-blackPrimary bg-white p-1 text-3xl rounded-3xl`}
              />
            </div>
          </div>
        </div>
        {/*  contact*/}
        <div className="flex flex-col items-center justify-center gap-12 md:flex-row lg:justify-between">
          <div className="">
            <div className="flex items-center justify-center lg:items-start">
              <Button
                BtnText={`Contact Us:`}
                btnStyle={`bg-greenPrimary py-0 px-2 rounded text-lg`}
              />
            </div>
            <div className="flex flex-col items-center gap-5 mt-8 lg:items-start">
              <p className="text-white paragraph">Email: info@positivus.com</p>
              <p className="text-white paragraph">Phone: 555-567-8901</p>
              <p className="text-center text-white paragraph max-w-fit lg:text-left">
                Address: 1234 Main St <br />
                Moonstone City, Stardust State 12345
              </p>
            </div>
          </div>
          <form className="bg-[#292A32] px-12 py-12 rounded-3xl ">
            <div className="flex flex-col items-center gap-4 xl:flex-row">
              <input
                type="email"
                name="myemail"
                id=""
                placeholder={"email "}
                className={`px-4 py-2 rounded-lg border border-white bg-transparent outline-none text-white`}
              />
              <Button
                btnStyle={`bg-greenPrimary p-2 px-5 rounded-lg w-full`}
                BtnText={`
Subscribe to news`}
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Footer;