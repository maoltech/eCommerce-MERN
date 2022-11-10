import styled from 'styled-components';
import image from '../images/background.jpg';
import {mobile} from '../responsive';
import { useState } from 'react';
import { login } from '../redux/apiCalls';
import { useDispatch } from 'react-redux';

const Container = styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(
    rgba(255,255,255,0.5),
    rgba(255,255,255,0.5)
    ),url(${image}) center;

    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;


`
const Wrapper = styled.div`
padding: 20px;
width: 25%;
background-color: #fff;

${mobile({width: '75%'})}

`
const Title = styled.h1`
font-size: 24px;
font-weight: 300;
`
const Form = styled.form`
display: flex;
flex-direction: column;
`
const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 10px 0px;
`

const Button = styled.button`
width: 40%;
border: none;
padding:15px 20px;
background-color: teal;
border-radius: 10px;
color: #fff;
cursor: pointer;


`

const Link = styled.a`
margin: 10px 0px;
font-size: 12px;
text-decoration: underline;
cursor: pointer;

`

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();
        login(dispatch, {username, password});
    }
    return ( 
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input 
                        placeholder='Username'
                        onChange={(e)=> setUsername(e.target.value)}
                    />
                    <Input 
                        placeholder='Password'
                        type='password'
                        onChange={(e)=> setPassword(e.target.value)}
                    />
                    <Button onClick={handleClick}>Login</Button>
                    <Link>Do not remember your password</Link>
                    <Link to='/register'>Create a new account</Link>

                </Form>
            </Wrapper>
        </Container>
     );
}
 
export default Login;