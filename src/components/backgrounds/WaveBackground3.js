import React from "react"
import styled from "styled-components"

export default function WaveBackground3() {
  return <Wrapper src="images/waves/BGWaves3.svg" />
}

const Wrapper = styled.img`
  top: 150px;
  z-index: -1;
  position: absolute;
`
