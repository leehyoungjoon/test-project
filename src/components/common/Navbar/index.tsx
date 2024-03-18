import React, { useState } from "react"

import styled from "styled-components"

import Image from "next/image"
import Link from "next/link"

const index = () => {
  const [active, setActive] = useState(false)

  const handleMouseEnter = () => {
    setActive(true)
  }

  const handleMouseLeave = () => {
    setActive(false)
  }
  return (
    <NavBarWrapper>
      <div className="topNavWrap">
        <div className="topNav">
          <div>* 현재 접속 IP 123.123.123.12.</div>
          <div>HOME 로그인 회원가입</div>
        </div>
      </div>
      <div className="bottomNavWrap">
        <div className="bottomNav">
          <Image
            src="/image/common/HotVPNlogo.png"
            width={190}
            height={46}
            alt="logo"
          />
          <Nav
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={active ? "active" : ""}
          >
            <div className="navItem">서비스 안내</div>
            <div className="navItem">서비스 신청</div>
            <div className="navItem">이용 방법</div>
            <div className="navItem">마이페이지</div>
            <div className="navItem">고객센터</div>

            <div className="dropDownMenu">
              <div className={active ? "active" : ""}>
                <div className="dropDownItem">1</div>
                <div className="dropDownItem">1</div>
                <div className="dropDownItem">1</div>
                <div className="dropDownItem">1</div>
              </div>
            </div>
            {/* 
            <DropdownMenu className={active ? "active" : ""}>
              <DropdownItem href="#">Product 1</DropdownItem>
              <DropdownItem href="#">Product 2</DropdownItem>
              <DropdownItem href="#">Product 3</DropdownItem>
            </DropdownMenu> */}
          </Nav>
        </div>
      </div>
      <div></div>
    </NavBarWrapper>
  )
}

export default index

const NavBarWrapper = styled.nav`
  /* background-color: black; */
  height: 122px;
  display: flex;
  align-items: center;
  flex-direction: column;

  .topNavWrap {
    background-color: #e53032;
    width: 1072px;
    height: 34px;

    .topNav {
      display: flex;
      justify-content: space-between;
    }
  }

  .bottomNavWrap {
    /* background-color: green; */
    width: 1072px;
    height: 88px;

    .bottomNav {
      display: flex;
      justify-content: space-between;
      /* background-color: aqua; */

      .dropMenu {
        display: flex;
        width: 880px;
        /* background-color: blueviolet; */
        padding-left: 81px;
        position: relative;

        p {
          display: block;
          font-size: 20px;
          font-weight: 500;
          /* line-height: 4.4; */
          color: #3e3e3e;
          padding-left: 58px;
        }
      }
    }
  }
`

const Nav = styled.nav`
  /* position: fixed;
  top: 0;
  left: 0; */
  width: 100%;
  height: 50px;
  background-color: #222;
  color: white;
  z-index: 100;

  .navItem {
    display: inline-block;
    padding: 10px;
    color: white;

    &:hover {
      background-color: #ccc;
    }
  }

  .dropDownMenu {
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    background-color: #fff;
    border: 1px solid #ccc;
    display: none;

    &.active {
      display: block;
    }

    .dropDownItem {
      padding: 10px;
      color: #333;

      &:hover {
        background-color: #ccc;
      }
    }
  }
`

// const DropdownMenu = styled.ul`
//   position: absolute;
//   top: 50px;
//   left: 0;
//   width: 100%;
//   background-color: #fff;
//   border: 1px solid #ccc;
//   display: none;

//   &.active {
//     display: block;
//   }
// `

const DropdownItem = styled.li`
  padding: 10px;
  color: #333;

  &:hover {
    background-color: #ccc;
  }
`
