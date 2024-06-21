import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import store from "./store/index.js";
import { Provider } from "react-redux";
import StreamVideoProvider from "./providers/StreamVideoProvider.jsx";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <StreamVideoProvider>
          <App />
        </StreamVideoProvider>
      </Provider>
    </QueryClientProvider>
    <Toaster />
  </BrowserRouter>
);
