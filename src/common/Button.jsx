/* eslint-disable react/prop-types */
// @ts-ignore
const Button = ({ btnStyle, BtnText }) => {
  return <button className={`button ${btnStyle}`}>{BtnText}</button>;
};

export default Button;
