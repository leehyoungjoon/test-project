import React from "react"

import styled from "styled-components"

import Image from "next/image"
import { menuTitleList } from "@/constants/header/menuTitleList"
import Link from "next/link"

const NavMenuTitle = ({ onMouseEnter, onMouseLeave }: any) => {
  return (
    <Container>
      <Link href="/main">
        <Image
          className="hotVpnLogo"
          src="/image/common/HotVPNlogo.png"
          width={190}
          height={46}
          alt="logo"
        />
      </Link>
      <ul
        className="navTitle"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {menuTitleList.map((item, id) => {
          return (
            <li key={id}>
              <Link href={item.link}>{item.title}</Link>
            </li>
          )
        })}
      </ul>
    </Container>
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
    font-weight: 600;
    line-height: 4.4;
    color: #3e3e3e;
  }
`
