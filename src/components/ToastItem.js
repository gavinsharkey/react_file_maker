export const TOAST_TYPES = {
  DANGER: "danger",
  SUCCESS: "success"
}

function ToastItem({ title, type, message, onClose }) {
  return (
    <div
      className="toast show"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className={`toast-header bg-${Object.values(TOAST_TYPES).includes(type) ? type : 'primary'}`}>
        <h6 className="mb-0">
          <strong className="me-auto text-white">{title}</strong>
        </h6>
        <button
          onClick={onClose}
          type="button"
          className="btn-close btn-close-white ms-auto"
          data-bs-dismiss="toast"
          aria-label="Close"
        ></button>
      </div>
      <div className="toast-body bg-white">{message}</div>
    </div>
  );
}

export default ToastItem
