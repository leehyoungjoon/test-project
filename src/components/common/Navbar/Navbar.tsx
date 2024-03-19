import React, { useState } from "react"

import styled from "styled-components"

import Image from "next/image"
import Link from "next/link"

import TopNav from "./TopNav"
import NavMenuTitle from "./NavMenuTitle"
import NavMenuList from "./NavMenuList"

import { menuDetailList } from "@/constants/header/menuDetailList"

const Navbar = () => {
  return (
    <Container>
      <TopNav />
      <NavMenuTitle />
      <NavMenuList />
    </Container>
  )
}

export default Navbar

const Container = styled.nav``
