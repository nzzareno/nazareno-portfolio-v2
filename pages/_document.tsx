/* eslint-disable @next/next/no-page-custom-font */
import { Head, Html, Main, NextScript } from 'next/document';
import { i18n } from '../next-i18next.config';

export default function Document(props) {
  const currentLocale = i18n.defaultLocale;
  return (
    <Html lang={currentLocale}>
      <Head>
        <link rel="shortcut icon" href="/favicon-32x32.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Sriracha&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="prose-headings:font-headings">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
