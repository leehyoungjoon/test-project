import React from "react"

import styled from "styled-components"

import Image from "next/image"

const NavTitle = () => {
  return (
    <Container>
      <Image
        className="hotVpnLogo"
        src="/image/common/HotVPNlogo.png"
        width={190}
        height={46}
        alt="logo"
      />
      <ul className="navTitle">
        <li>서비스 안내</li>
        <li>서비스 신청</li>
        <li>이용방법</li>
        <li>마이페이지</li>
        <li>고객센터</li>
      </ul>
    </Container>
  )
}

export default NavTitle

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
