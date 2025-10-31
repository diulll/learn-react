import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import HelloWorld from "./HelloWorld.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelloWorld />
    <HelloWorld />
    <HelloWorld />
  </StrictMode>
);
