import { MdArrowOutward } from "react-icons/md";
import Button from "../../common/Button";
import Common from "../../common/Common";
const CaseStudiesData = [
  {
    heading:
      "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
    buttonText: "Learn more",
  },
  {
    heading:
      "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
    buttonText: "Learn more",
  },
  {
    heading:
      "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
    buttonText: "Learn more",
    border: "border-none",
  },
];
const CaseStudies = () => {
  return (
    <section className="container mx-auto ">
      <div className="">
        <Common
          spanText={`Case Studies`}
          paragraphText={`Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies`}
        />
      </div>

      <div className="bg-blackPrimary md:py-20 py-10 px-8 my-12 rounded-3xl grid grid-cols-1 md:grid-cols-2 flex-col lg:grid-cols-3 md:gap-6">
        {CaseStudiesData.map((item, index) => {
          return (
            <div key={index} className="flex flex-col items-start">
              <p className={`${item.border} px-2 text-white paragraph border-r-2`}>{item.heading}</p>
              <div className="flex items-center gap-3 text-greenPrimary hover:cursor-pointer">
              <Button BtnText={item.buttonText} btnStyle={`px-2`} />
              <MdArrowOutward  className="text-2xl hover:rotate-45 transition-all"/>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CaseStudies;
