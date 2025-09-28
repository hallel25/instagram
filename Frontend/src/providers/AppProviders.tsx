import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../lib/queryClient";
import { Provider as JotaiProvider } from "jotai";

interface AppProvidersProps {
  children: React.ReactNode;
}

const AppProviders = ({ children }: AppProvidersProps) => {
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
