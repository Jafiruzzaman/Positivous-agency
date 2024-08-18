import Button from "../../common/Button"
const Hero = () => {
  return (
    <section className="container mx-auto lg:mt-[4rem] mt-6 flex items-center justify-between lg:flex-row flex-col xl:gap-5 gap-12">
      {/* text */}
      <div className="flex items-start flex-col gap-4 lg:gap-[35px] order-1">
        <h1 className="h1 lg:max-w-[32rem] max-w-full">
        Navigating the digital landscape for success
        </h1>
        <p className="paragraph lg:max-w-[28rem]">
        Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
        </p>
        {/* button */}
        <Button  btnStyle={`bg-black text-white font-medium`} BtnText={`Book a consultation`}/>
      </div>
      {/* image */}
      <div className="order-2">
        <img src="/image/Hero-image.png" alt="" className="" />
      </div>
    </section>
  )
}

export default Hero