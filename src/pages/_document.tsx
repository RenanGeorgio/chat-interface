// @ts-nocheck
import Document, { Html, Head, Main, NextScript } from 'next/document';
// process.env.NODE_ENV
export default class CustomDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <link rel='manifest' href='/manifest.json' />
        </Head>
        <body className="loading">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
