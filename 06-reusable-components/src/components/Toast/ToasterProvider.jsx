/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const ToasterContext = createContext([]);

const getRandomId = () => Math.random().toString(36).substring(2, 10);

function ToasterProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  function toast(toast) {
    setToasts((prev) => [...prev, { ...toast, id: getRandomId() }]);
  }

  function deleteToast(id) {
    setToasts((toasts) => toasts.filter((t) => t.id !== id));
  }

  return (
    <ToasterContext.Provider value={{ toasts, toast, deleteToast }}>
      {children}
    </ToasterContext.Provider>
  );
}

export default ToasterProvider;
