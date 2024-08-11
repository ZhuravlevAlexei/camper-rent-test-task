import Icon from "../Icon/Icon.jsx";
import css from "./InfoBlock.module.css";

const InfoBlock = ({
  iconId,
  text,
  stroke = false,
  className,
  iconSize = 20,
  classNameText,
}) => {
  const getIconClass = (stroke, iconSize) => {
    if (iconSize === 32) {
      if (stroke) return css.infoBlockIconStroke32;
      return css.infoBlockIcon32;
    }
    if (stroke) return css.infoBlockIconStroke;
    return css.infoBlockIcon;
  };

  const getTextClass = (classNameText) => {
    if (classNameText) return classNameText;
  };

  const getClass = (className) => {
    if (className) return className;
    return css.infoBlock;
  };

  return (
    <div className={getClass(className)}>
      <Icon iconId={iconId} className={getIconClass(stroke, iconSize)} />
      <span className={getTextClass(classNameText)}>{text}</span>
      {/* {text} */}
    </div>
  );
};

export default InfoBlock;
