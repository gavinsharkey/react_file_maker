import { useState } from "react";
import FileMakerCard from "./components/FileMakerCard";
import DetailsCard from "./components/DetailsCard";
import ToastContainer from "./components/ToastContainer";

function App() {
  const [toasts, setToasts] = useState([]);

  const addToast = (toast) => {
    setToasts((prevToasts) => [...prevToasts, toast]);
  };

  const deleteToast = (id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  const dispatchToast = toast => {
    addToast(toast);

    setTimeout(() => {
      deleteToast(toast.id);
    }, 5000);
  }

  return (
    <>
      <div style={{ zIndex: 2 }} className="container my-5">
        <div className="row g-3">
          <div className="col-12 col-lg-8">
            <FileMakerCard dispatchToast={dispatchToast} />
          </div>
          <div className="col-12 col-lg-4">
            <DetailsCard />
          </div>
        </div>
      </div>
      <div
        style={{ zIndex: -1 }}
        className="fixed-bottom text-center text-muted pb-4 "
      >
        <small>
          &#169; Gavin Sharkey 2021{" "}
          <a
            className="text-reset"
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.linkedin.com/in/gavinsharkey/"
          >
            LinkedIn
          </a>
        </small>
      </div>
      <ToastContainer toasts={toasts} deleteToast={deleteToast} />
    </>
  );
}

export default App;
