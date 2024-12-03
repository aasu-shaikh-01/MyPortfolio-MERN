import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    {/* <StrictMode> */}
    <App />
    {/* </StrictMode> */}
  </ThemeProvider>
);
