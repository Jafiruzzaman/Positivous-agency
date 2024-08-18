/* eslint-disable react/prop-types */
import Button from "./Button"
const Common = ({spanText,paragraphText}) => {
  return (
    <div className="flex md:items-center md:gap-8 gap-5 lg:flex-row flex-col items-start justify-center lg:justify-start">
      <Button BtnText={spanText} btnStyle={`bg-greenPrimary border-none text-blackPrimary rounded-[6px] py-0 px-4 font-medium capitalize text-[40px]`}/>
      <p className={`paragraph lg:max-w-[40rem]`}>{paragraphText}</p>
    </div>
  )
}

export default Common