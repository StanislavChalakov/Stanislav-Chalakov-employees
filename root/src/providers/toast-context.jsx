import { createContext, useState } from 'react';

export const ToastContext = createContext({
  toasts: [],
  addToast: () => {},
});

export const ToastContextProvider = ({ children }) => {
  const [toastsArr, setToastsArr] = useState([]);

  const addToastHandler = (toastClass, message) => {
    const toast = {
      class: toastClass,
      message,
    };

    setToastsArr((toastsArr) => [...toastsArr, toast]);

    setTimeout(() => setToastsArr((toasts) => toasts.filter((t) => t !== toast)), 4000);
  };

  const contextValue = {
    toasts: toastsArr,
    addToast: addToastHandler,
  };

  return <ToastContext.Provider value={contextValue}>{children}</ToastContext.Provider>;
};
