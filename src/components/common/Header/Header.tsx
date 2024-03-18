import React, { useState } from "react"

import styled from "styled-components"

import HeaderSubMenuList from "./HeaderSubMenuList"
import HeaderMenuList from "./HeaderMenuList"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <Container>
        <HeaderWrap>
          <HeaderSubMenuList
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
          <HeaderMenuList
            // click={handleLoginLogoutClick}
            // loginText={isLoggedIn ? "로그아웃" : "로그인"}
            // myPageText={isLoggedIn ? "마이페이지" : "회원가입"}
            // setValueSync={setDummyValueSync}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
        </HeaderWrap>
      </Container>
    </>
  )
}

export default Header

const Container = styled.div``

const HeaderWrap = styled.header`
  background-color: #fff;
  position: fixed;
  width: 100%;
  height: 100px;
  z-index: 2;
`
