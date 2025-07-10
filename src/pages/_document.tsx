import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en-IN">
      <Head>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
        
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="your-verification-code" />
        
        {/* Bing Webmaster Tools */}
        <meta name="msvalidate.01" content="your-bing-verification-code" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}