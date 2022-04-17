import { BrowserRouter } from "react-router-dom";
import { SWRConfig, SWRConfiguration } from "swr";
import { StrictMode, Suspense } from "react";

import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary.container";
import ErrorFallback from "./components/ErrorBoundary/ErrorBoundary.fallback";
import Loader from "./components/shared/Loader";
import { trackLiveQueries } from "./lib/liveQueries";

const swrConfig: SWRConfiguration = {
  suspense: true,
  use: [trackLiveQueries],
};

export const Providers: React.FC = ({ children }) => (
  <StrictMode>
    <ErrorBoundary fallback={<ErrorFallback />}>
      <Suspense fallback={<Loader />}>
        <BrowserRouter>
          <SWRConfig value={{ ...swrConfig, provider: () => new Map() }}>
            {children}
          </SWRConfig>
        </BrowserRouter>
      </Suspense>
    </ErrorBoundary>
  </StrictMode>
);
