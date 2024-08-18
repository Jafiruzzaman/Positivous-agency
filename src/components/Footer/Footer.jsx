import {FaFacebook, FaTwitter} from "react-icons/fa";
import {RiLinkedinFill} from "react-icons/ri";
import Button from "../../common/Button.jsx";

const Footer = () => {
  return (
      <section className="container mx-auto xl:mt-[7rem]">
        <div className="bg-blackPrimary p-8 rounded-tl-3xl rounded-tr-3xl">
          {/* first section*/}
          <div className=" mb-10 ">
            <div className="flex items-center flex-col lg:flex-row justify-between">
              <div className="flex items-center gap-2">
                <img src="/public/image/logo-02.svg" alt=""/>
                <span className="text-2xl font-medium text-white">
              Positivous
            </span>
              </div>
              {/*  text*/}
              <nav className="flex items-center lg:flex-row flex-col my-8 lg:my-0 gap-6">
                <li className={`list-none`}><a href="" className={`text-white text-lg`}>About Us</a></li>
                <li className={`list-none`}><a href="" className={`text-white text-lg`}>Services</a></li>
                <li className={`list-none`}><a href="" className={`text-white text-lg`}>Use Cases</a></li>
                <li className={`list-none`}><a href="" className={`text-white text-lg`}>Teams</a></li>
              </nav>
              {/*  icons*/}
              <div className="flex items-center gap-4 text-2xl ">
                <FaFacebook className={`text-blackPrimary bg-white p-1 text-3xl rounded-3xl`}/>
                <RiLinkedinFill className={`text-blackPrimary bg-white p-1 text-3xl rounded-3xl`}/>
                <FaTwitter className={`text-blackPrimary bg-white p-1 text-3xl rounded-3xl`}/>
              </div>
            </div>
          </div>
          {/*  contact*/}
          <div className="flex items-center justify-center md:flex-row gap-12 flex-col lg:justify-between">
            <div className="">
              <div className="flex items-center justify-center lg:items-start">
                <Button BtnText={`Contact Us:`} btnStyle={`bg-greenPrimary py-0 px-2 rounded text-lg`}/>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-5 mt-8">
                <p className="text-white paragraph">
                  Email: info@positivus.com
                </p>
                <p className="text-white paragraph">
                  Phone: 555-567-8901
                </p>
                <p className="text-white paragraph max-w-fit text-center lg:text-left">
                  Address: 1234 Main St <br/>
                  Moonstone City, Stardust State 12345
                </p>
              </div>
            </div>
            <form className="bg-[#292A32] px-12 py-12 rounded-lg ">
              <div className="flex items-center gap-4 flex-col xl:flex-row">
                <input type="email" name="myemail" id="" placeholder={'email '} className={`px-4 py-2 rounded-lg border border-white bg-transparent outline-none text-white`}/>
                <Button btnStyle={`bg-greenPrimary p-2 px-5 rounded-lg w-full`} BtnText={`
Subscribe to news`}/>
              </div>
            </form>
          </div>
        </div>
      </section>
  )
}
export default Footer;