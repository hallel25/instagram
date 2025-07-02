import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "../lib/queryClient";
import { Provider as JotaiProvider } from "jotai";

interface AppProvidersProps {
  children: React.ReactNode;
}

const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <JotaiProvider>
        {children}
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </JotaiProvider>
    </QueryClientProvider>
  );
};

export default AppProviders;
