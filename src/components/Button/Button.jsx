import PropTypes from "prop-types"
const Button = ({btnName,animationClass}) => {
   return (
      <button className={`btn rounded-full  border-none bg-[#5B28AA] hover:bg-[#000] hover:text-[#5B28AA] cursor-pointer text-[#fff] text-xl px-8 ${animationClass}`}>
        {btnName}
      </button>
   );
};
Button.propTypes={
   btnName:PropTypes.string,
   animationClass:PropTypes.string,
}
export default Button;