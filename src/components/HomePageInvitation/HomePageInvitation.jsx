import { useNavigate } from "react-router-dom";
import Button from "../../shared/components/Button/Button.jsx";
import css from "./HomePageInvitation.module.css";

const HomePageInvitation = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/catalog");
  };
  return (
    <div className={css.container}>
      <h2 className={css.title}>Welcome to vacation of your dream!</h2>
      <h2 className={css.title}>You can take your hotel rooms with you!</h2>

      <Button className={css.button} onClick={handleClick}>
        Lets start!
      </Button>
    </div>
  );
};

export default HomePageInvitation;
