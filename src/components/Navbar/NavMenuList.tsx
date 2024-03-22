"use client"

import React, { useState } from "react"

import Link from "next/link"
import styled, { css } from "styled-components"
import { menuDetailList } from "@/constants/header/menuDetailList"

const NavMenuList = () => {
  return (
    <Container>
      <ul className="dropdownMenu">
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

  .dropdownMenu {
    display: flex;
    justify-content: space-evenly;
    margin-left: 240px;
    /* padding-left: 10px; */
    min-width: 880px;
    color: #3e3e3e;
    list-style: none;

    .serviceguideDynamicip,
    .serviceguideFixedip,
    .serviceapplicationDynaminip,
    .serviceapplicationFixedip,
    .serviceapplicationIpreplacementapplication,
    .serviceapplicationIpreplacementpurchase,
    .usageProgram,
    .usageWindows,
    .usageAndroid,
    .usageIos,
    .customercenterAnnouncement,
    .customercenterAskedquestions,
    .customercenterInquiry,
    .customercenterrRemotesupport,
    .customercenterIplookup {
      &:hover {
        color: red;
        font-weight: bold;
      }
    }

    li {
      font-size: 16px;
      line-height: 30px;
      height: 27px;

      &:hover {
        cursor: pointer;
      }
    }

    li:first-child {
      /* margin-right: -5px; */
    }

    li:nth-child(2) {
      /* margin-left: 10px; */
    }

    li:nth-child(3) {
      /* margin-left: 10px; */
    }

    li:nth-child(4) {
    }

    li:last-child {
      /* padding-left: 10px; */
    }
  }
`
