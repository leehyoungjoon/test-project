import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document"

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const originalRenderPage = ctx.renderPage

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => App,
        enhanceComponent: (Component) => Component,
      })

    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="public/favicon.ico" />
          <title>HotVPN</title>
          <meta charSet="UTF-8" />
          <meta property="og:site_name" content="HotVPN" />
          <meta property="og:title" content="HotVPN" />
          <meta property="og:description" content="HotVPN" />
          <meta property="og:image" content="HotVPNlogo.png" />
          <meta property="og:url" content="HotVPN.co.kr" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
