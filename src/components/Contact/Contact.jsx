import Common from "../../common/Common.jsx";
import Button from "../../common/Button.jsx";

const Contact = () => {
  return (
    <section className={`container mx-auto `} id="contact">
      <div className="">
        <Common
          spanText={`Contact`}
          paragraphText={`Connect with Us: Let's Discuss Your Digital Marketing Needs`}
        />
        <div className="flex items-center lg:flex-row flex-col lg:justify-between gap-12 bg-bgPrimary my-12 py-8 px-6 rounded-[2rem] relative">
          {/*  text*/}
          <form method={"post"} className="p">
            <div className="flex items-center gap-4 px-8">
              <label
                htmlFor=""
                className={`text-lg
              `}
              >
                <input
                  type={"radio"}
                  name="option"
                  id=""
                  className={`text-lg bg-greenPrimary mr-2 cursor-pointer`}
                />
                Say Hi
              </label>
              <label
                htmlFor=""
                className={`text-lg
              `}
              >
                <input
                  type={"radio"}
                  name="option"
                  id=""
                  className={`text-lg bg-greenPrimary mr-2 cursor-pointer`}
                />
                Get a Quote
              </label>
            </div>
            {/*  */}
            <div className="flex flex-col items-center gap-4 px-8 my-5">
              <div className="flex flex-col mb-2">
                <label htmlFor="" className={`text-lg`}>
                  Name
                </label>
                <input
                  type="text"
                  placeholder={`enter your name`}
                  className={`text-lg bg-white focus:ring-greenPrimary mr-2 px-3 py-2 lg:w-[36vw] w-[80vw] md:w-[70vw] rounded-lg border border-blackPrimary`}
                />
              </div>
              <div className="flex flex-col mb-2">
                <label htmlFor="" className={`text-lg`}>
                  Email
                </label>
                <input
                  type="email"
                  placeholder={`enter your name`}
                  className={`text-lg bg-white focus:ring-greenPrimary mr-2 px-3 py-2 lg:w-[36vw] w-[80vw] md:w-[70vw] rounded-lg border border-blackPrimary`}
                />
              </div>
              <div className="flex flex-col mb-2">
                <label htmlFor="" className={`text-lg`}>
                  Message
                </label>
                <textarea
                  name="message"
                  className={`p-3 resize-none focus:greenPrimary lg:w-[36vw] w-[80vw] md:w-[70vw] border border-blackPrimary rounded-lg h-[20vh]`}
                  placeholder={`enter your message`}
                ></textarea>
              </div>
              <div className="w-full">
                <Button
                  btnStyle={`bg-blackPrimary text-white text-lg hover:bg-greenPrimary text-blackPrimary hover:text-blackPrimary font-medium hover:border-greenPrimary`}
                  BtnText={`Send Message`}
                />
              </div>
            </div>
          </form>
          {/*  image*/}
          <div
            className={`overflow-auto hidden top-0 right-0 lg:flex items-end lg:absolute lg:-right-[18rem] scale-110 lg:top-0`}
          >
            <img
              src="/image/contact/contact.svg"
              alt=""
              className={``}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
