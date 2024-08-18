import 'swiper/css';
import Common from "../../common/Common";
import { Swiper, SwiperSlide } from 'swiper/react';
import imageOne from "/user/user-01.png";
import imageTwo from "/user/user-02.png";
import imageThree from "/user/user-03.png";
import imageFour from "/user/user-04.png";
import imageFive from "/user/user-05.png";
import imageSix from "/user/user-06.png";
const TestimonialsData = [
  {
    name: "John Smith",
    info: "CEO and Founder",
    review: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive.",
    image: imageOne,
  },
  {
    name: "Jane Doe",
    info: "Director of Operations",
    review: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive.",
    image: imageTwo,
  },
  {
    name: "Michael Brown",
    info: "Senior SEO Specialist",
    review: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive.",
    image: imageThree,
  },
  {
    name: "Emily Johnson",
    info: "PPC Manager",
    review: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive.",
    image: imageFour,
  },
  {
    name: "Brian Williams",
    info: "Social Media Specialist",
    review: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive.",
    image: imageFive,
  },
  {
    name: "Sarah Kim",
    info: "Content Creator",
    review: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive.",
    image: imageSix,
  },
];
import { FaQuoteRight } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  return (
    <section className='container mx-auto my-24'>
      <div className="">
        <Common spanText={`Testimonials`} paragraphText={`Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services`}/>
      </div>
      <div className="bg-blackPrimary min-h-[35vh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-content-center my-12 rounded-[2rem]">
      {
        TestimonialsData.map((item,index)=>{
          return(
            <div className="p-12" key={index}>
              <div className="">
              <div className="border relative rounded-xl p-4 border-greenPrimary ">
                <h5 className='text-white text-sm p-5 '>
                <FaQuoteLeft className={`absolute left-2 top-6 text-2xl text-white`}/>
                  {item.review}
                <FaQuoteRight  className={`text-2xl text-white absolute right-16 bottom-8`}/>
                </h5>
              </div>
              </div>
              <div className="flex items-center gap-8 mt-6">
                <img src={item.image} alt="" />
                <div className="">
                  <h4 className="text-white">{item.name}</h4>
                  <p className="text-white">{item.info}</p>
                </div>
              </div>
            </div>
          )
        })
      }
      </div>
    </section>
  )
}

export default Testimonials