import React, { useState } from "react"

import styled from "styled-components"

import Image from "next/image"
import Link from "next/link"

import TopNavWrap from "./TopNav"
import NavTitle from "./NavTitle"
import NavMenuList from "./NavMenuList"

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  // 드롭다운을 열거나 닫는 함수
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  // 마우스가 네비게이션 바에 진입할 때 드롭다운을 열기
  const handleMouseEnter = () => {
    setIsDropdownOpen(true)
  }

  // 마우스가 네비게이션 바를 떠날 때 드롭다운을 닫기
  const handleMouseLeave = () => {
    setIsDropdownOpen(false)
  }

  return (
    <Container>
      <TopNavWrap />
      <NavTitle />
      <nav className="navbar">
        <div className="navbar-brand">
          <h1>Logo</h1>
        </div>
        <div
          className="navbar-menu"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button className="navbar-toggle" onClick={toggleDropdown}>
            Menu
          </button>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li>
                <a href="#">Item 1</a>
              </li>
              <li>
                <a href="#">Item 2</a>
              </li>
              <li>
                <a href="#">Item 3</a>
              </li>
              <li>
                <a href="#">Item 4</a>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </Container>
  )
}

export default Navbar

const Container = styled.nav`
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    color: #fff;
    padding: 1rem;
  }

  .navbar-brand h1 {
    margin: 0;
  }

  .navbar-menu {
    position: relative;
  }

  .navbar-toggle {
    background-color: transparent;
    border: none;
    color: #fff;
    cursor: pointer;
  }

  .dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #333;
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
  }

  .dropdown-menu li {
    padding: 0.5rem 1rem;
  }

  .dropdown-menu li a {
    color: #fff;
    text-decoration: none;
  }

  .dropdown-menu li:hover {
    background-color: #555;
  }
`
