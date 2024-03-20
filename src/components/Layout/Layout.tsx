import React from "react"
import Navbar from "../common/Navbar/Navbar"
import Side from "@/components/common/Side"
import Footer from "@/components/common/Footer"
import StyledComponentsRegistry from "@/styles/StyledComponentsRegistry"

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <StyledComponentsRegistry>
      <Navbar />
      <div>{children}</div>
      <Side />
      <Footer />
    </StyledComponentsRegistry>
  )
}
