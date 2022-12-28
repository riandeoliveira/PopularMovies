import { ToastContainer } from "react-toastify";

export const Toast = (): JSX.Element => {
  return (
    <ToastContainer
      autoClose={5000}
      closeOnClick
      draggable
      hideProgressBar={false}
      newestOnTop={false}
      pauseOnFocusLoss
      pauseOnHover
      position="top-right"
      rtl={false}
      theme="dark"
    />
  );
};
