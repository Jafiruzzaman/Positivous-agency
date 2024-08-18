import Button from "../../common/Button";

const Proposal = () => {
  return (
    <section className="container mx-auto my-28 xl:my-24">
      <div className="flex flex-col items-center justify-between gap-16 px-10 py-6 bg-bgPrimary lg:px-20 md:flex-row md:gap-24 rounded-3xl">
        <div className="flex flex-col items-start order-2 gap-3 md:gap-6 md:order-1 ">
          <h2 className="text-3xl h2"> Let’s make things happen</h2>
          <p className="paragraph md:max-w-[32rem]">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <Button
            BtnText={`Get your free proposal`}
            btnStyle={`bg-blackPrimary text-white`}
          />
        </div>
        <div className="order-1 scale-125 md:order-2">
          <img src="/image/Proposal.svg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Proposal;