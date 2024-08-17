import Button from "../../common/Button";
import Common from "../../common/Common";
import imageOne from "/user/user-01.png";
import imageTwo from "/user/user-02.png";
import imageThree from "/user/user-03.png";
import imageFour from "/user/user-04.png";
import imageFive from "/user/user-05.png";
import imageSix from "/user/user-06.png";
import { FaLinkedinIn } from "react-icons/fa";

const TeamData = [
  {
    name: "John Smith",
    info: "CEO and Founder",
    experience:
      "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    image: imageOne,
  },
  {
    name: "Jane Doe",
    info: "Director of Operations",
    experience:
      "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
    image: imageTwo,
  },
  {
    name: "Michael Brown",
    info: "Senior SEO Specialist",
    experience:
      "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
    image: imageThree,
  },
  {
    name: "Emily Johnson",
    info: "PPC Manager",
    experience:
      "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
    image: imageFour,
  },
  {
    name: "Brian Williams",
    info: "Social Media Specialist",
    experience:
      "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
    image: imageFive,
  },
  {
    name: "Sarah Kim",
    info: "Content Creator",
    experience:
      "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
    image: imageSix,
  },
];
const Team = () => {
  return (
    <section className="container mx-auto">
      <div className="">
        <Common
          spanText={`Team`}
          paragraphText={`Meet the skilled and experienced team behind our successful digital marketing strategies`}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
        {TeamData.map((item, index) => {
          return (
            <div
              className=" bg-bgPrimary p-6 rounded-3xl shadow-shadowPrimary"
              key={index}
            >
              <div className="flex items-center gap-4 my-8 relative">
                <img src={item.image} alt="" />
                <div className="flex items-start gap-1 flex-col ">
                  <h3 className="">{item.name}</h3>
                  <p>{item.info}</p>
                </div>
                <div className="absolute top-0 text-greenPrimary bg-blackPrimary p-2 rounded-full cursor-pointer right-2">
                  <FaLinkedinIn />
                </div>
              </div>
              <p className="">{item.experience}</p>
            </div>
          );
        })}
      </div>
      <div className="text-right">
        <Button
          BtnText={`See all team`}
          btnStyle={`bg-blackPrimary text-white`}
        />
      </div>
    </section>
  );
};

export default Team;
