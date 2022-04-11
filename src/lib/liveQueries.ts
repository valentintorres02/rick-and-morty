import { Key, Middleware, mutate } from "swr";
import { useEffect } from "react";

const liveQueries = new Set<Key>();

export const trackLiveQueries: Middleware =
  (useSWRNext) => (key, fetcher, config) => {
    const swr = useSWRNext(key, fetcher, config);

    useEffect(() => {
      liveQueries.add(key);
      return () => {
        liveQueries.delete(key);
      };
    }, [key]);

    return swr;
  };

export const revalidateLiveQueries = () =>
  Promise.all([...liveQueries.values()].map((key) => mutate(key)));
