import "@/styles/globals.css"
import type { AppProps } from "next/app"
import Layout from "../src/components/Layout/Layout"

import { Inter } from "next/font/google"
import { Noto_Sans_KR } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

const notoSansKr = Noto_Sans_KR({
  preload: true,
  subsets: ["latin"],
  weight: ["100", "400", "500", "600", "700", "900"],
})

export const cls = (...classnames: string[]) => {
  return classnames.join(" ")
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className={cls(notoSansKr.className)}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </>
  )
}
