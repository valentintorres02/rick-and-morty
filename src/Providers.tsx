import { BrowserRouter } from "react-router-dom";
import { SWRConfig, SWRConfiguration } from "swr";
import { StrictMode, Suspense } from "react";

import { trackLiveQueries } from "./lib/liveQueries";

const swrConfig: SWRConfiguration = {
  suspense: true,
  use: [trackLiveQueries],
};

export const Providers: React.FC = ({ children }) => (
  <StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <SWRConfig value={{ ...swrConfig, provider: () => new Map() }}>
          {children}
        </SWRConfig>
      </BrowserRouter>
    </Suspense>
  </StrictMode>
);
