import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    height: 60px;
   
`
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 8px 20px;
        align-items: center;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`
const Input = styled.input`
  border: none;
`
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  padding: 5px;
    margin-left: 25px;
`
const Center = styled.div`
  flex: 1;
  text-align: center;
  
`

const Logo = styled.div`
  font-weight: bold;
  font-size: 35px;
`
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 35px;
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
      <Left>
        <Language>EN</Language>
        <SearchContainer>
          <Input placeholder="Search" />
          <Search style={{color:"gray", fontSize:"16"}}></Search>
        </SearchContainer>
      </Left>
      <Center>
        <Logo>Jd.</Logo>
      </Center>
      <Right>
        <MenuItem>Register</MenuItem>
       <MenuItem>Sign-in</MenuItem>
        <MenuItem>
          <Badge badgeContent={4} color="secondary">
            <ShoppingCartOutlined />
          </Badge>  
        </MenuItem>
      </Right>
      
      </Wrapper>
      
      
      </Container>
  )
}

export default Navbar