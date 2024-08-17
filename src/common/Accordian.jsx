/* eslint-disable react/prop-types */
import { HiOutlinePlus } from "react-icons/hi";
import { HiMinus } from "react-icons/hi";
import { useState } from "react";
const Accordian = ({ num, heading, paragraph }) => {
  const [showAccordion, setShowAccordion] = useState(false);
  const toggleMenu = () => {
    return setShowAccordion(!showAccordion);
  };
  return (
    <>
      {/* drop down menu */}
      <div className="lg:my-12 my-8 flex flex-col items-start  gap-12">
        <div
          className={` ${
            showAccordion ? "bg-greenPrimary" : "bg-bgPrimary"
          }  w-full lg:px-[60px] px-[30px] border-borderPrimary shadow-shadowPrimary rounded-[3rem] xl:py-[20px] py-6`}
        >
          <div>
            <div className=" flex items-center justify-between">
              <div className="flex gap-6 items-center">
                <span className="lg:text-5xl text-4xl font-semibold">
                  {num}
                </span>
                <h3 className="lg:text-3xl font-semibold text-lg max-w-[14rem] md:max-w-full">
                  {heading}
                </h3>
              </div>
              <div
                className="rounded-full transition-all duration-200"
                onClick={toggleMenu}
              >
                {showAccordion ? (
                  <button className="text-4xl bg-white p-3 rounded-full hover:bg-greenPrimary">
                    <HiMinus className="" />
                  </button>
                ) : (
                  <button className="text-4xl bg-white p-3 rounded-full hover:bg-greenPrimary">
                    <HiOutlinePlus />
                  </button>
                )}
              </div>
            </div>
          </div>
          <div
            className={`overflow-hidden grid transition-all duration-300 ${
              showAccordion
                ? "grid-rows-[1fr] opacity-1"
                : "grid-rows-[-1fr] opacity-0"
            }`}
          >
            <div className="border-blackPrimary mt-7 border-t pt-4">
              <p className="paragraph overflow-hidden pb-6">{paragraph}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordian;
