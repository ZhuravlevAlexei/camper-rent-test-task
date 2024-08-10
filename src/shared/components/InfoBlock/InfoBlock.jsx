import Icon from "../Icon/Icon.jsx";
import css from "./InfoBlock.module.css";

const InfoBlock = ({ iconId, text, stroke = false }) => {
  const getClass = () => {
    if (stroke) return css.infoBlockIconStroke;
    return css.infoBlockIcon;
  };
  return (
    <div className={css.infoBlock}>
      <Icon iconId={iconId} className={getClass(stroke)} />
      {text}
    </div>
  );
};

export default InfoBlock;
