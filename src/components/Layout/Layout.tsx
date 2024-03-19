// import Navbar from "@/components/common/Navbar"

import Navbar from "../common/Navbar/Navbar"
import Footer from "@/components/common/Footer"
import Side from "@/components/common/Side"

import StyledComponentsRegistry from "@/styles/StyledComponentsRegistry"

export default function Layout({ children }: any) {
  return (
    <>
      <Navbar />
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      <Side />
      <Footer />
    </>
  )
}
