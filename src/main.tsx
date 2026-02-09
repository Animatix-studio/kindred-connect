import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

function ensureFavicon() {
  // On GitHub Pages project sites, the app is served from a subpath (BASE_URL).
  // Using BASE_URL avoids requesting /favicon.ico from the domain root.
  const href = `${import.meta.env.BASE_URL}favicon.ico`;

  const existing = document.querySelector<HTMLLinkElement>("link[rel~='icon']");
  if (existing) {
    existing.href = href;
    return;
  }

  const link = document.createElement("link");
  link.rel = "icon";
  link.href = href;
  document.head.appendChild(link);
}

ensureFavicon();

createRoot(document.getElementById("root")!).render(<App />);
