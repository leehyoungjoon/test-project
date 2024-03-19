const debug = true

import React, { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import Link from "next/link"
import styled from "styled-components"

import { menuList } from "@/constants/header/menuList"

import AccountModal from "./Account"

import { useAuthStore } from "@/store/authStore"

const HeaderMenuList = ({
  setIsMenuOpen,
  isMenuOpen,
  setValueSync,
  loginText,
  click,
  myPageText,
}: any) => {
  const [guide, setGuide] = useState(false) //변경시 가이드 감추기
  const [isOnHover, setIsOnHover] = useState(false) //변경시 가이드 감추기
  // const [loginName, setLoginName] = useState<string | undefined>();
  // const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isProfile, setIsProfile] = useState(false)
  const [width, setwidth] = useState("20%")
  const [isOpen, setIsOpen] = useState(false)

  const [displayName, setDisplayName] = useState<string | undefined>()
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

  const { getCookieDataEach, getCookieData } = useAuthStore()

  const isLoggedInRef = useRef<boolean>(false)
  //const loginoutText = useRef<string>("로그인");
  const userTypeRef = useRef<string>()

  useEffect(() => {
    const isLoggedIn_ = getCookieDataEach("isLoggedIn")
    const displayName_ = getCookieDataEach("displayName")

    setIsLoggedIn(isLoggedIn_)
    setDisplayName(displayName_)

    console.log("isLoggedIn_", isLoggedIn_)
    console.log("displayName_", displayName_)

    isLoggedInRef.current = isLoggedIn_
    userTypeRef.current = getCookieDataEach("userType")

    debug && console.log(getCookieData())
    debug && console.log("userType", displayName)
    debug && console.log("userTypeRef.current", userTypeRef.current)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  //const loginRef = useRef<boolean>(getCookieDataEach("isLoggedIn") || false);

  //P
  const router = useRouter()

  useEffect(() => {
    setIsLoggedIn(getCookieDataEach("isLoggedIn") || false)

    console.log("isLoggedIn", isLoggedIn)
    console.log("isLoggedInRef.current", isLoggedInRef.current)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  //P
  const handleMenuHover = () => {
    setIsMenuOpen(true)
    //console.log("handleMenuenterr");
    setValueSync("mainhover")
  }

  const handleMenuLeave = () => {
    setIsMenuOpen(false)
    // console.log("handleMenuLeave");
    //setValueSync("mainleave");
    setIsOnHover(false)
  }

  const handleMenuOver = () => {
    //setIsMenuOpen(false);
    //console.log("handleMenuOver");
    setValueSync("wow")
    setIsOnHover(true)
  }

  const changeModal = function () {
    setIsProfile(!isProfile)
  }

  const toggleModal = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen)
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
            <div className={"userStatus"} onClick={click}>
              {loginText}
            </div>
            <div className={"userStatus"}>
              {isLoggedIn || myPageText == "마이페이지" ? (
                <Link href="/base/mypage/privacySettings">마이페이지</Link>
              ) : (
                <Link href="/auth/register">회원가입</Link>
              )}
              {/* {myPageText == "마이페이지" ? (
                <Link href="/base/mypage/privacySettings">마이페이지</Link>
              ) : (
                <Link href="/auth/register">회원가입</Link>
              )} */}
            </div>
          </>
          <div
            className={isLoggedIn ? "loginName" : "hidden"}
            onClick={toggleModal}
          >
            {displayName !== undefined ? (
              <div>{displayName.charAt(0)}</div>
            ) : null}
          </div>
        </div>
        <div
          className="menu-wrapper"
          onMouseEnter={handleMenuHover}
          onMouseOver={handleMenuOver}
          onMouseLeave={handleMenuLeave}
        >
          <Link href="/base/home" className="logo">
            <Image
              unoptimized
              src="/images/common/logo.png"
              alt="Logo"
              width={322}
              height={76}
              style={{ width: "16.1rem", height: "auto" }}
            />
          </Link>

          <div className="uibox"></div>
          <MenuList
            isOnHover={isOnHover}
            isMenuOpen={isMenuOpen}
            guide={guide}
            width={width}
          >
            {menuList.map((item, index) => {
              return (
                <li key={index}>
                  <Link href={item.link}>{item.title}</Link>
                </li>
              )
            })}
          </MenuList>
          <AccountModal
            toggleModal={toggleModal}
            isOpen={isOpen}
            displayName={displayName}
          />
        </div>
      </Container>
    </>
  )
}

export default HeaderMenuList

const Container = styled.div<any>`
  position: relative;
  margin: 0px auto;
  max-width: 1080px;
  width: 100%;
  -webkit-box-align: center;
  align-items: center;
  background-color: #fff;
  //background-color: rgba(50, 70, 0, 0.5);

  .login-wrapper {
    display: flex;
    font-size: 12px;
    padding-top: 10px;
    cursor: pointer;
    align-items: center;
    justify-content: flex-end;
    background-color: #fff;
    padding-right: 70px;
    //background-color: rgba(80, 70, 0, 0.5);
    > Image {
      padding-left: 20px;
    }

    > div {
      padding-left: 20px;
    }

    .userStatus {
      //font-family: NotoSansKR-Light, sans-serif;
      font-size: 1.3rem;
    }

    .loginName {
      margin-left: 10px;
      padding-left: 7px;
      padding-top: 1px;

      background-color: #b094ff;
      width: 28px;
      height: 28px;
      border-radius: 20px;
      cursor: pointer;
      font-size: 16px;
      color: #fff;
    }

    .hidden {
      display: none;
    }

    .profileList {
      .modal {
        width: 500px;
        height: 500px;
        border: 2px solid;
        background-color: red;
      }
    }
  }

  .menu-wrapper {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    height: 40px;
    .logo {
      min-width: 161px;
      height: 10px;
    }
    .uibox {
      min-width: 120px;
    }
  }
`

const MenuList = styled.ul<any>`
  display: flex;
  justify-content: flex-start;
  height: 40px;
  width: 800px;
  //background-color:rgba(255,255,0,0.5);

  li {
    box-shadow: ${(props: any) => (props.guide ? "0 0 0 1px #00f" : "none")};
    transition: all
      ${(props: any) => {
        //console.log(props.isOnHover);
        if (props.isOnHover === true) {
          return "0.1s"
        } else {
          return "0.1s  0.2s"
        }
      }}
      ease-out;
    margin-right: ${(props: any) => (props.isMenuOpen ? "0" : "6rem")};
    &:hover {
      cursor: pointer;
      color: #6d0ecb;
    }
    a {
      line-height: 40px;
      list-style: none;
      font-size: 18px;
      font-weight: 500;
      font-weight: bold;
      white-space: nowrap;
      width: 100%;
    }
  }

  li:first-child {
    width: ${(props: any) => (props.isMenuOpen ? props.width : "99.36px")};
    box-shadow: ${(props: any) => (props.guide ? "0 0 0 1px #0f0" : "none")};
  }

  li:nth-child(2) {
    width: ${(props: any) => (props.isMenuOpen ? props.width : "66.25px")};
    box-shadow: ${(props: any) => (props.guide ? "0 0 0 1px #0f0" : "none")};
  }

  li:nth-child(3) {
    width: ${(props: any) => (props.isMenuOpen ? props.width : "66.25px")};
    box-shadow: ${(props: any) => (props.guide ? "0 0 0 1px #0f0" : "none")};
  }

  li:nth-child(4) {
    width: ${(props: any) => (props.isMenuOpen ? props.width : "66.25px")};
    box-shadow: ${(props: any) => (props.guide ? "0 0 0 1px #0f0" : "none")};
  }

  li:last-child {
    width: ${(props: any) => (props.isMenuOpen ? props.width : "33.13px")};
    box-shadow: ${(props: any) => (props.guide ? "0 0 0 1px #0f0" : "none")};
  }
`
