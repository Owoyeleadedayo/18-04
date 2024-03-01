import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App.tsx";
 import { ToastContainer } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";
 import "./index.css";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <ToastContainer/>
        <App />
    </ChakraProvider>
  </React.StrictMode>
);
