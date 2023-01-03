import 'styles/globals.css';
import 'styles/codeblocks.css';
import type { AppProps } from 'next/app';
import PlausibleProvider from 'next-plausible';
import { ThemeProvider } from 'next-themes';
import { appWithTranslation } from 'next-i18next';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PlausibleProvider
      domain="garmanazareno.up.railway.app"
      trackOutboundLinks={true}
    >
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </PlausibleProvider>
  );
}

export default appWithTranslation(MyApp);
