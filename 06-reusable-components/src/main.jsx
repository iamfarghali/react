import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import ToasterProvider from "./components/Toast/ToasterProvider.jsx";
import Toaster from "./components/Toast/Toaster.jsx";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToasterProvider>
      <App />
      <Toaster position="top-left" />
    </ToasterProvider>
  </StrictMode>
);
