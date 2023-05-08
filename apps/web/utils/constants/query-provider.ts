import { QueryClient } from 'react-query';

export const QUERY_PROVIDER = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3
    }
  }
});