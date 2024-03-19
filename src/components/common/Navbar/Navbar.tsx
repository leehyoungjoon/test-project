import React, { useState } from "react"

import styled from "styled-components"

import Image from "next/image"
import Link from "next/link"

import TopNav from "./TopNav"
import NavMenuTitle from "./NavMenuTitle"
import NavMenuList from "./NavMenuList"

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleMouseEnter = () => {
    setIsDropdownOpen(true)
  }

  const handleMouseLeave = () => {
    setIsDropdownOpen(false)
  }

  return (
    <Container>
      <TopNav />
      <NavMenuTitle />
      <NavMenuList
        isDropdownOpen={isDropdownOpen}
        setIsDropdownOpen={setIsDropdownOpen}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </Container>
  )
}

export default Navbar

const Container = styled.nav``
