import React, { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import Link from "next/link"
import styled from "styled-components"

import { menuSubList } from "@/constants/header/menuSubList"
import { menuList } from "@/constants/header/menuList"

const HeaderMenuList = ({ setIsMenuOpen, isMenuOpen }: any) => {
  const handleMenuHover = () => {
    setIsMenuOpen(true)
    //console.log("handleMenuenterr");
  }

  const handleMenuLeave = () => {
    setIsMenuOpen(false)
    // console.log("handleMenuLeave");
    //setValueSync("mainleave");
  }

  const handleMenuOver = () => {
    //setIsMenuOpen(false);
    //console.log("handleMenuOver");
  }
  return (
    <>
      <Container>
        <div className="login-wrapper">
          <Image
            unoptimized
            src="/images/common/bell-ringing.svg"
            alt="Logo"
            width={20}
            height={20}
            priority
          />
          <>
            <div className={"userStatus"}>login</div>
            <div className={"userStatus"}>
              <Link href="/base/mypage/privacySettings">마이페이지</Link>
              <Link href="/auth/register">회원가입</Link>
            </div>
          </>
        </div>
        <div
          className="menu-wrapper"
          onMouseEnter={handleMenuHover}
          onMouseOver={handleMenuOver}
          onMouseLeave={handleMenuLeave}
        ></div>
      </Container>
    </>
  )
}

export default HeaderMenuList

const Container = styled.div`
  position: relative;
  margin: 0px auto;
  max-width: 1080px;
  width: 100%;
  -webkit-box-align: center;
  align-items: center;
  background-color: #fff;
`
