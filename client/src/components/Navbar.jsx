import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/SearchSharp';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {mobile} from '../responsive';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

const Container = styled.div`
    height: 60px;
    ${mobile({height:'50px'})}

`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    ${mobile({padding:'10px 0px'})}

`

const Left = styled.div`
flex: 1;
display: flex;
`
const Language = styled.span`
font-size: 14px;
cursor: pointer;
align-items: center;
${mobile({display:'none'})}

`
const SearchContainer = styled.div`
    border: 0.5px solid lightgreen;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`
const Input = styled.input`
    border: none;
    ${mobile({width:'40px'})}
`

const Center = styled.div`
flex: 1;
text-align: center;
`
const Logo = styled.h1`
    font-weight: bold;
    ${mobile({fontSize:'20px'})}
`
const Right = styled.div`
flex: 1; 
display: flex;
align-items: center;
justify-content: flex-end;
${mobile({justifyContent: 'center', flex:2})}
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px; 
    ${mobile({fontSize: '12px',marginLeft: '8px'})} 
`
const Navbar = () => {
    const quantity = useSelector(state=>state.cart.quantity)
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                        <SearchContainer>
                            <Input placeholder='Search'/>
                            <SearchIcon style={{color: 'gray', fontSize: '16px'}}/>
                        </SearchContainer>
                </Left>

                <Center>
                    <Logo>MJeCommerce</Logo>
                </Center>

                <Right>
                    <Link to="/register" style={{textDecoration: 'none' }}>
                        <MenuItem>Register</MenuItem>
                    </Link>
                    <Link to="/login" style={{textDecoration: 'none' }}>
                        <MenuItem>Login</MenuItem>
                    </Link>
                    <MenuItem>
                    <Badge badgeContent={quantity} color="primary">
                        <ShoppingCartOutlinedIcon color="action" />
                    </Badge>
                    </MenuItem>
                </Right>

            </Wrapper>
           
        </Container>
      );
}
 
export default Navbar;