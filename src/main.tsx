import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary.tsx";
import { AppProvider } from "./contexts/AppContext.tsx";
import App from "./App.tsx";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <AppProvider>
          <App />
        </AppProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
);
