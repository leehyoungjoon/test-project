"use client"

import React, { useState } from "react"

import styled from "styled-components"

import Image from "next/image"
import { menuTitleList } from "@/constants/header/menuTitleList"
import Link from "next/link"
import NavMenuList from "./NavMenuList"

const NavMenuTitle = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <>
      <Container
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link href="/">
          <Image
            className="hotVpnLogo"
            src="/image/common/HotVPNlogo.png"
            width={190}
            height={46}
            alt="logo"
          />
        </Link>
        <ul className="navTitle">
          {menuTitleList.map((item, id) => {
            return (
              <li key={id}>
                <Link href={item.link}>{item.title}</Link>
              </li>
            )
          })}
        </ul>
      </Container>
      <NavMenuListContainer
        isHovered={isHovered}
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <NavMenuList />
      </NavMenuListContainer>
    </>
  )
}

export default NavMenuTitle

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 1072px;
  height: 88px;

  .hotVpnLogo {
  }

  .navTitle {
    display: flex;
    justify-content: space-evenly;
    padding-left: 30px;
    min-width: 880px;
    list-style: none;
    font-size: 20px;
    font-weight: 500;
    line-height: 4.4;
    color: #3e3e3e;
  }
`
const NavMenuListContainer = styled.div<{ isHovered: boolean }>`
  height: ${({ isHovered }) => (isHovered ? "200px" : "0px")};
  overflow: hidden;
  transition: max-height 0.5s ease-out;
  box-shadow: 0px 10px 13px -10px rgba(0, 0, 0, 0.2);
`
