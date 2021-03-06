import React from "react"
import styled from "styled-components"
import {
  menuData,
  aboutSubmenuData,
  programSubmenuData,
} from "../../data/menuData"
import MenuButton from "../buttons/MenuButton"
import { SmallText } from "../styles/TextStyles"

export default function Footer() {
  return (
    <Wrapper>
      <MenuWrapper>
        {menuData.map((item, index) => {
          if (item.title) {
            return (
              <MenuButton
                item={item}
                title={item.title}
                key={index}
                textColor={(item.textColor = "")}
              />
            )
          }
        })}
        {aboutSubmenuData.map((item, index) => {
          return (
            <MenuButton
              item={item}
              title={item.title}
              key={index}
              textColor={(item.textColor = "")}
            />
          )
        })}
        {programSubmenuData.map((item, index) => {
          return (
            <MenuButton
              item={item}
              title={item.title}
              key={index}
              textColor={(item.textColor = "")}
            />
          )
        })}
      </MenuWrapper>
      <CopyRight>Copywriting</CopyRight>

      <BackgroundWrapper>
        <img src="images/waves/footer-wave2.svg" />
        <img src="images/waves/footer-wave1.svg" />
        <img src="images/waves/footer-wave3.svg" />
        <img src="images/waves/CircleGaps.svg" />
      </BackgroundWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 866px;
  position: relative;
  display: grid;

  justify-content: center;
  align-content: center;
  justify-items: center;
  align-items: center;
`
// const ContentWrapper = styled.div`
//   position: absolute;
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   width: 100%;

//   align-items: center;
//   justify-items: center;
// `

const MenuWrapper = styled.div`
  display: grid;
  position: absolute;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 450px) {
    grid-template-columns: 1fr 1fr;
    margin-left: 30px;
  }
`
const BackgroundWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  * {
    z-index: -1;
    position: absolute;
    :nth-child(2) {
      transform: scale(1.2);
    }
    :nth-child(1) {
      transform: scale(1.2);
      left: 200px;
    }
  }
  @media (max-width: 450px) {
    * {
      :nth-child(1) {
        left: 0px;
      }
    }
  }
`

const CopyRight = styled(SmallText)`
  position: absolute;
  top: 200px;
  color: white;
  @media (max-width: 450px) {
    top: 700px;
  }
`
