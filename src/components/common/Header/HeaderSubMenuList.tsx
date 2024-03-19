let debug = true

import React, { useState, useEffect, useRef } from "react"
import styled, { css } from "styled-components"
import { menuSubList } from "@/constants/header/menuSubList"
import { menuSubList_teacher } from "@/constants/header/menuSubList"
import Link from "next/link"
// import { useUserStore } from "@/store/adviceStore";
import SessionStorage from "@/constants/sessionStorage/SessionStorage"

import { useAuthStore } from "@/store/authStore"

const HeaderSubMenuList = ({
  isMenuOpen,
  setIsMenuOpen,
  getValueSync,
}: any) => {
  // const user = useUserStore((state: any) => state.user);
  // const fetchUserData = useUserStore((state: any) => state.fetchUserData);
  const [userType, setUserType] = useState<string | undefined>()
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

  const { getCookieDataEach, getCookieData } = useAuthStore()

  const userTypeRef = useRef<string>()

  useEffect(() => {
    setIsLoggedIn(getCookieDataEach("isLoggedIn"))
    setUserType(getCookieDataEach("userType"))

    userTypeRef.current = getCookieDataEach("userType")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [guide, setGuide] = useState(false) //변경시 가이드 감추기
  const [top, setTop] = useState("-200px")

  const [test, setTest] = useState("")

  const handleMenuHover = () => {
    setIsMenuOpen(true)
  }

  const handleMenuLeave = () => {
    setTest(getValueSync())
    setIsMenuOpen(false)
  }

  return (
    <StyledWrapper
      test={test}
      isMenuOpen={isMenuOpen}
      onMouseEnter={handleMenuHover}
      onMouseLeave={handleMenuLeave}
      top={top}
    >
      <div className="menu-sub-wrapper">
        <SubMenuList isMenuOpen={isMenuOpen} guide={guide}>
          {menuSubList_teacher.map((item: any, index: any) => (
            <li key={index}>
              {item.title.map((title: any, i: any) => (
                <div key={i} className={title.className}>
                  <Link href={title.link}>{title.text}</Link>
                </div>
              ))}
            </li>
          ))}
        </SubMenuList>
      </div>
    </StyledWrapper>
  )
}

export default HeaderSubMenuList

const StyledWrapper: any = styled.div<any>`
  ${({ isMenuOpen }: any) => css`
    position: fixed;
    width: 100%;
    height: 30rem;

    background-color: #fff;
    top: ${isMenuOpen ? "70px" : "-230px"};
    transition: top 0.2s ease-in;

    transition-delay: ${(props: any) => {
      return props.isMenuOpen ? "0.05s" : "0"
    }};

    z-index: -1;

    .menu-sub-wrapper {
      display: flex;
      justify-content: flex-start;
      margin: 0px auto;
      width: 100%;
      max-width: 1080px;

      .uiBox {
        min-width: 280px;
        background-color: ${(props: any) => {
          //console.log(props.test);
          if (props.test === "wow") {
            return "#fff"
          } else {
            return "#fff"
          }
        }};
        font-size: 15px;
      }

      .menu-list-wrapper {
        /* Add styling for menu-list-wrapper here */
      }
    }
  `}
`

const SubMenuList = styled.ul<any>`
  display: flex;
  width: 74%;
  padding-top: 3rem;
  justify-content: flex-start;
  //gap:${(props: any) => (props.isMenuOpen ? "3rem" : "0")};

  .careerAptitudeTest,
  .careerPlan,
  .creditPlan,
  .demandSurvey,
  .mySubject,
  .myTimetable,
  .careerActivityManager,
  .subjectActivityManager,
  .extraSupportManager,
  .jobInformation,
  .majorInformation,
  //.jobMajorRelationMatrix,
  .subjectInformation,
  .counseling,
  .counselingList,
  .counselingManagement,
  .counselingStatistics,
  .myDataManagement,
  .myDataManagement,
  .profileManagement,
  .privacySettings,
  .lms,
  .specificSettings {
    &:hover {
      color: #6d0ecb;
      font-weight: bold;
    }
  }

  li {
    width: 20%;
    list-style: none;
    font-size: 16px;
    line-height: 4.5rem;
    background-color: rgba(80, 70, 0, 0.5);
    //box-shadow: ${(props: any) => (props.guide ? "0 0 0 1px #00f" : "none")};
    &:hover {
      cursor: pointer;
    }
  }
  li:first-child {
    background-color: ${(props: any) =>
      props.guide ? "rgba(100, 100, 100, 0.5)" : "#fff"};
  }
  li:nth-child(2) {
    background-color: ${(props: any) =>
      props.guide ? "rgba(100, 100, 200, 0.5)" : "#fff"};
  }
  li:nth-child(3) {
    background-color: ${(props: any) =>
      props.guide ? "rgba(100, 100, 100, 0.5)" : "#fff"};
  }
  li:nth-child(4) {
    background-color: ${(props: any) =>
      props.guide ? "rgba(100, 100, 200, 0.5)" : "#fff"};
  }
  li:last-child {
    background-color: ${(props: any) =>
      props.guide ? "rgba(100, 100, 100, 0.5)" : "#fff"};
  }
`
