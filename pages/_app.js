import '../styles/globals.css';
import { MoralisProvider } from 'react-moralis';
import { RobinhoodProvider } from '../context/RobinhoodContext';

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl={process.env.MORALIS_SERVER_URL}
      appId={process.env.MORALIS_APP_ID}>
      <RobinhoodProvider>
        <Component {...pageProps} />
      </RobinhoodProvider>
    </MoralisProvider>
  );
}

export default MyApp;
