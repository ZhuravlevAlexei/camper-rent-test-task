import { useModal } from "../../context/index.js";
import Icon from "../../shared/components/Icon/Icon.jsx";

import css from "./Modal.module.css";

const Modal = ({ children }) => {
  const { closeModal } = useModal();

  return (
    <div className={css.modalWrapper} onClick={closeModal}>
      <div className={css.modalContainer}>
        <button
          className={css.modalButtonClose}
          onClick={closeModal}
          aria-label="close-modal-window-button"
        >
          <Icon iconId="close-cross" className={css.iconClose} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
