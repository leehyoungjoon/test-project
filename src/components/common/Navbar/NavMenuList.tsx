import React, { useState } from "react"

import Link from "next/link"
import styled, { css } from "styled-components"
import { menuDetailList } from "@/constants/header/menuDetailList"

const NavMenuList = ({ onMouseEnter, onMouseLeave }: any) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleMouseEnter = () => {
    setIsDropdownOpen(true)
    onMouseEnter() // 부모 컴포넌트에서 전달된 이벤트 핸들러 호출
  }

  const handleMouseLeave = () => {
    setIsDropdownOpen(false)
    onMouseLeave() // 부모 컴포넌트에서 전달된 이벤트 핸들러 호출
  }
  console.log(isDropdownOpen)
  return (
    <Container>
      <div className="box"></div>
      <ul
        className={`dropdownMenu ${isDropdownOpen ? "open" : ""}`}
        onMouseOver={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {menuDetailList.map((item: any, index: any) => (
          <li key={index}>
            {item.title.map((title: any, i: any) => (
              <div key={i} className={title.className}>
                <Link href={title.link}>{title.text}</Link>
              </div>
            ))}
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default NavMenuList

const Container = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 1072px;

  .box {
    width: 190px;
    height: 46px;
    background-color: green;
  }

  .dropdownMenu {
    display: flex;
    justify-content: space-evenly;
    padding-left: 30px;
    width: 880px;
    color: #3e3e3e;
    list-style: none;

    .serviceguideDynamicip,
    .serviceguideFixedip {
      &:hover {
        color: red;
        font-weight: bold;
      }
    }

    li {
      font-size: 16px;
      line-height: 30px;
      /* min-width: 25px; */
      /* background-color: aqua; */
      height: 27px;

      &:hover {
        cursor: pointer;
      }
    }

    li:first-child {
    }

    li:nth-child(2) {
      min-width: 30px;
    }

    li:nth-child(3) {
    }

    li:nth-child(4) {
    }

    li:last-child {
    }
  }
`
