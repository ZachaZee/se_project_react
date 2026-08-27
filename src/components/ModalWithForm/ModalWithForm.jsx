import "./ModalWithForm.css";

function ModalWithForm({
  children,
  name,
  title,
  buttonText,
  activeModal,
  onClose,
}) {
  return (
    <div
      className={`modal modal_type_${name} ${activeModal === "add-garment" ? "modal_opened" : ""}`}
    >
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button onClick={onClose} type="button" className="modal__close">
          CLOSE
        </button>
        <form name={name} className="modal__form">
          {children}
          <button type="submit" className="modal__submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
