import Common from "../../common/Common";
import imageOne from "/image/services/services-01.svg";
import imageTwo from "/image/services/services-02.svg";
import imageThree from "/image/services/services-03.svg";
import imageFour from "/image/services/services-04.svg";
import imageFive from "/image/services/services-05.svg";
import imageSix from "/image/services/services-06.svg";
// services data
const ServicesData = [
  {
    textOne: "Search engine",
    textTwo: "optimization",
    style: "bg-bgPrimary shadow-shadowPrimary ",
    iconStyle: "bg-blackPrimary text-greenPrimary",
    spanStyle: "span-green-style",
    image: imageOne,
  },
  {
    textOne: "Pay-per-click",
    textTwo: "advertising",
    image: imageTwo,
    textStyle: "text-blackPrimary bg-greenPrimary]",
    style: "bg-greenPrimary shadow-shadowPrimary ",
    iconStyle: "bg-blackPrimary text-greenPrimary",
    spanStyle: "span-white-style",
  },
  {
    textOne: "Social Media",
    textTwo: "Marketing",
    textStyle: "text-blackPrimary bg-greenPrimary",
    style: "bg-blackPrimary shadow-shadowPrimary ",
    arrowStyle: "bg-white text-blackPrimary",
    buttonStyle: "text-white",
    image: imageThree,
    spanStyle: "span-white-style",
    iconStyle: "bg-white text-blackPrimary",
    paragraphStyle: "text-white",
  },
  {
    textOne: "Email",
    textTwo: "Marketing",
    textStyle: "text-blackPrimary bg-greenPrimary",
    style: "bg-bgPrimary shadow-shadowPrimary ",
    image: imageFour,
    spanStyle: "span-green-style",
    iconStyle: "bg-blackPrimary text-greenPrimary",
  },
  {
    textOne: "Content",
    textTwo: "Creation",
    image: imageFive,
    spanStyle: "span-white-style",
    style: "bg-greenPrimary shadow-shadowPrimary border-1 border-blackPrimary",
    iconStyle: "bg-blackPrimary text-greenPrimary",
  },
  {
    textOne: "Analytics and",
    textTwo: "Tracking",
    image: imageSix,
    style: "bg-blackPrimary shadow-shadowPrimary ",
    arrowStyle: "bg-white text-blackPrimary",
    textStyle: "text-blackPrimary bg-greenPrimary",
    buttonStyle: "text-white",
    spanStyle: "span-green-style",
    iconStyle: "bg-white text-blackPrimary",
    paragraphStyle: "text-white",
  },
];
import { MdArrowOutward } from "react-icons/md";

const Services = () => {
  return (
    <section className="container mx-auto my-12 xl:my-24">
      {/* common components */}
      <div className="" id={`services`}>
        <Common
          spanText={`services`}
          paragraphText={`At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:`}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] xl:my-24 my-12">
        {ServicesData.map((item, index) => {
          return (
            <div
              className={`${item.style} p-[50px] rounded-[1rem] flex items-start flex-col md:flex-row gap-10 justify-between `}
              key={index}
            >
              {/* text */}
              <div className="flex flex-col items-start justify-between order-2 space-y-8 md:order-1 lg:space-y-32">
                <div className="flex flex-col gap-0">
                  <span
                    className={`${item.spanStyle} w-fit rounded-md px-2 text-[23px]`}
                  >
                    {item.textOne}
                  </span>
                  <span
                    className={`${item.spanStyle} w-fit rounded-md px-2 text-[23px]`}
                  >
                    {item.textTwo}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div
                    className={`${item.iconStyle} p-2 text-[30px] hover:cursor-pointer hover:rotate-45 w-fit transition-all duration-300 rounded-full`}
                  >
                    <MdArrowOutward />
                  </div>
                  <p className={`paragraph ${item.paragraphStyle}`}>
                    Learn more
                  </p>
                </div>
              </div>
              {/* image */}
              <div className="order-1 lg:order-2 max-w-[100%]">
                <img src={item.image} alt="services image" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;