import React from "react";
import ReactDOM from "react-dom/client";
import { SenaApp } from "./pages/SenaApp";
import { AuthenticationProvider } from "./context/AuthenticationProvider";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthenticationProvider>
        <SenaApp></SenaApp>
      </AuthenticationProvider>
    </BrowserRouter>
  </React.StrictMode>
);
