import React from "react"
import Navbar from "../../Navbar/Navbar"
import Side from "@/components/Side"
import Footer from "@/components/Footer"
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
