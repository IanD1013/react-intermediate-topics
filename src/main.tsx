import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./routing/routes";

const queryClient = new QueryClient({
  defaultOptions: {
    // queries: {
    //   retry: 3,
    //   cacheTime: 1000 * 60 * 5,
    //   staleTime: 10 * 1000,
    //   refetchOnWindowFocus: false,
    //   refetchOnReconnect: false,
    //   refetchOnMount: false,
    // },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
