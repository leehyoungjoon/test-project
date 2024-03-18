import React from "react"
import styled, { css } from "styled-components"

import { menuSubList } from "@/constants/header/menuSubList"
import Link from "next/link"

const HeaderSubMenuList = ({ isMenuOpen, setIsMenuOpen }: any) => {
  const handleMenuHover = () => {
    setIsMenuOpen(true)
  }

  return (
    <StyledWrapper isMenuOpen={isMenuOpen}>
      <div className="menu-sub-wrapper">
        <div className="uiBox"></div>
        <SubMenuList isMenuOpen={isMenuOpen}>
          {menuSubList.map((item: any, index: any) => (
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
    //box-shadow: 0 3px 6px rgb(219 227 248 / 40%);
    top: ${isMenuOpen ? "70px" : "-230px"};
    transition: top 0.2s ease-in;
    //background-color: rgba(50, 70, 0, 0.5);

    transition-delay:${(props: any) => {
      //console.log("");
      // if (props.test == "wow") {
      //   return "0s";
      // } else {
      //   return "1s";
      // }
      return props.isMenuOpen ? "0.05s" : "0"
    }};

    z-index: -1;

    .menu-sub-wrapper {
      display: flex;
     
      justify-content: flex-start;
      margin: 0px auto;
      width: 100%;
      max-width: 1080px;
      //box-shadow:0 0 0 1px #f00;
      .uiBox {
        min-width: 280px;
        // background-color: rgba(100, 100, 200, 0.5);
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
