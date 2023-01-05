import Document, { Head, Html, Main, NextScript } from 'next/document';
// .next/server/pages
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <title>Apollo NFT</title>
          <meta name="apple-mobile-web-app-title" content="ApolloNFT" />
          <meta name="application-name" content="ApolloNFT" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="manifest" href="/manifest.json"/>
          <link rel="apple-touch-icon" href="/icon.png"/>
          <meta name="theme-color" content="#1e2129"/>
          <link
            href="https://fonts.googleapis.com/css2?family=Anybody:wght@400;700&family=Inter:wght@300;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
        <Main />
        <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
