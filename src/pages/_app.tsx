import "@/styles/globals.css"
import { ComponentType } from "react"
import Layout from "@/components/Layout/Layout"

interface AppProps {
  Component: ComponentType<any>
  pageProps: any
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
