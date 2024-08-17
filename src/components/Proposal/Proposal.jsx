import Button from "../../common/Button";

const Proposal = () => {
  return (
    <section className="container mx-auto my-28 xl:my-24">
      <div className="bg-bgPrimary px-10 lg:px-20 flex-col md:flex-row py-6 gap-16 md:gap-24 rounded-3xl  flex items-center justify-between">
      <div className="flex flex-col items-start md:gap-6 gap-3 order-2 md:order-1 ">
        <h2 className="h2 text-3xl"> Let’s make things happen</h2>
        <p className="paragraph md:max-w-[32rem]">
          Contact us today to learn more about how our digital marketing
          services can help your business grow and succeed online.
        </p>
        <Button BtnText={`Get your free proposal`} btnStyle={`bg-blackPrimary text-white`}/>
      </div>
      <div className="scale-125 order-1 md:order-2">
        <img src="/public/image/Proposal.svg" alt="" />
      </div>
      </div>
    </section>
  );
};

export default Proposal;
