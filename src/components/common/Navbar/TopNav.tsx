import React from "react"

import styled from "styled-components"

import Image from "next/image"

const TopNavWrap = () => {
  return (
    <Container>
      <div className="wrap">
        <div className="currentIP">
          <Image
            className="Rectangle"
            src="/image/common/Rectamgle.png"
            width={5}
            height={5}
            alt="Rectangle"
          />
          <p>현재 접속 IP 123.123.123.123</p>
        </div>
        <ul className="topNavInfo">
          <li>HOME</li>
          <Image
            className="contour"
            src="/image/common/Line.png"
            width={1}
            height={15}
            alt="contour"
          />
          <li>로그인</li>
          <Image
            className="contour"
            src="/image/common/Line.png"
            width={1}
            height={15}
            alt="contour"
          />
          <li>회원가입</li>
        </ul>
      </div>
    </Container>
  )
}

export default TopNavWrap

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  /* min-width: 1072px; */
  height: 36px;
  background-color: #e53032;
  color: #fff;

  .wrap {
    display: flex;
    justify-content: space-between;
    min-width: 1072px;

    .currentIP {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #3e3e3e;
      min-width: 234px;

      .Rectangle {
        padding-right: 10px;
      }
    }

    .topNavInfo {
      display: flex;
      justify-content: space-around;
      align-items: center;
      list-style: none;
      min-width: 192px;
      display: flex;
    }
  }
`
