import css from "./Button.module.css";

const Button = ({
  children,
  type = "button",
  className,
  onClick,
  ...props
}) => {
  const getClassName = (className) => {
    if (className) {
      return className;
    }
    return css.button;
  };
  return (
    <button
      type={type}
      onClick={onClick}
      className={getClassName(className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
