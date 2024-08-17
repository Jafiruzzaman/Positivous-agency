import Common from "../../common/Common";
import Accordian from "../../common/Accordian";
const WorkProcessData = [
  {
    num: "01",
    heading: "Consultation",
    paragraph:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    num: "02",
    heading: "Research and Strategy Development",
    paragraph:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    num: "03",
    heading: "Implementation",
    paragraph:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    num: "04",
    heading: "Monitoring and Optimization",
    paragraph:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    num: "05",
    heading: "Reporting and Communication",
    paragraph:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    num: "06",
    heading: "Continual Improvement",
    paragraph:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
];

const WorkProcess = () => {
  
  return (
    <section className="container mx-auto xl:my-36 my-24">
      <div className="">
        <Common
          paragraphText={`Step-by-Step Guide to Achieving Your Business Goals`}
          spanText={`Our Working Process `}
        />
      </div>
    <div className="">
      {
        WorkProcessData.map((item,index)=>{
          return(
            <div key={index}>
            <Accordian num={item.num} heading={item.heading} paragraph={item.paragraph} />
            </div>
          )
        })
      }
    </div>
    </section>
  );
};

export default WorkProcess;
