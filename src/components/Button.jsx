import PropTypes from "prop-types";
function Button(props) {
  return <button className="w-full text-white bg-dark-green py-2 px-4 rounded">{props.title}</button>;
}

Button.propTypes = {
  title: PropTypes.string.isRequired
};
export default Button;
