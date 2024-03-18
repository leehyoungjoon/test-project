// import Navbar from "@/components/common/Navbar"

import Header from "../common/Header/Header"
import Navbar from "../common/Navbar/Navbar"
import Footer from "@/components/common/Footer"
import Side from "@/components/common/Side"

import StyledComponentsRegistry from "@/styles/StyledComponentsRegistry"

export default function Layout({ children }: any) {
  return (
    <>
      <Navbar />
      {/* <Header /> */}
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      <Side />
      <Footer />
    </>
  )
}
