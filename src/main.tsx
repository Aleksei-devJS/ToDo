import { createRoot } from "react-dom/client";
import App from "./1_app/App.tsx";
import './style/global.module.scss'

createRoot(document.getElementById("root")!).render(<App />);
