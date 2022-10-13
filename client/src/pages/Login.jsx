import styled from 'styled-components';
import image from '../images/background.jpg';
import {mobile} from '../responsive';

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
    return ( 
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder='Username'/>
                    <Input placeholder='Password'/>
                    <Button>CREATE</Button>
                    <Link>Do not remember your password</Link>
                    <Link>Create a new account</Link>
                </Form>
            </Wrapper>
        </Container>
     );
}
 
export default Login;