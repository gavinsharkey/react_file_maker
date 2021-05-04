import ToastItem, { TOAST_TYPES } from "./ToastItem";

function ToastContainer({ toasts, deleteToast }) {
  function renderToasts() {
    return toasts.map((toast) => {
      let title = toast.title;

      if (!title) {
        switch (toast.type) {
          case TOAST_TYPES.DANGER:
            title = "Danger! 😣";
            break;
          case TOAST_TYPES.SUCCESS:
            title = "Success! 😎";
            break;
          default:
            title = "Message";
            break;
        }
      }

      return (
        <ToastItem
          key={toast.id}
          type={toast.type}
          title={title}
          message={toast.message}
          onClose={() => deleteToast(toast.id)}
        />
      );
    });
  }

  return (
    <div className="position-fixed bottom-0 end-0 p-3">
      <div className="toast-container">
        {renderToasts()}
      </div>
    </div>
  );
}

export default ToastContainer;
