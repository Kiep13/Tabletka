import { QueryClientProvider } from 'react-query';

import { QUERY_PROVIDER } from '../utils/constants';
import '../styles/globals.scss';

export default function App({ Component, pageProps }) {
    return (
      <QueryClientProvider client={QUERY_PROVIDER}>
          <Component {...pageProps} />
      </QueryClientProvider>
    );
}