import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 30px;
  background-color: teal;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 400;
  `

const Announcement = () => {
  return (
    <Container>
        Super 20% off on orders above $100
    </Container>
  )
}

export default Announcement