import styled from 'styled-components';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon  from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import {mobile} from '../responsive';

const Container = styled.div`
display: flex;
${mobile({flexDirection:'column'})}
`

const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`
const Logo = styled.h1`

`
const Desc = styled.p`
margin: 20px opx;
`
const SocialContainer = styled.div`
display: flex;
`

const SocialIcon = styled.div`
width:35px;
height: 35px;
border-radius: 50%;
color: white;
background-color: ${props=> props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 5px;
cursor: pointer;
`
const Center = styled.div`
flex: 1;
padding: 20px;
${mobile({display:'none'})}
`
const Title = styled.h3`
margin-bottom: 30px;


`
const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;

`
const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;

`


const Right = styled.div`
flex: 1;
padding : 20px;
${mobile({backgroundColor:'#fff8f8'})}
`

const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`
const Payment = styled.img`
width: 100%;
`

const Footer = () => {
    return ( 
        <Container>
            <Left>
                <Logo>MJeCommerce</Logo>
            <Desc>MJeCommerce</Desc>
            <SocialContainer>
                <SocialIcon color="#3B5999">
                    <FacebookIcon/>
                </SocialIcon> 
                <SocialIcon color="#E4405F">
                    <InstagramIcon/>
                </SocialIcon> 
                <SocialIcon color="#55ACEE">
                    <TwitterIcon/>
                </SocialIcon> 
                <SocialIcon color='green' >
                    <WhatsAppIcon/>
                </SocialIcon> 
                <SocialIcon color='red'>
                    <PinterestIcon/>
                </SocialIcon> 
                <SocialIcon color='black'>
                    <GitHubIcon/>
                </SocialIcon> 
            </SocialContainer>
            </Left>
             <Center>
                <Title>Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Blenders</ListItem>
                    <ListItem>Utensils</ListItem>
                    <ListItem>Others</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wish list</ListItem>
                    <ListItem>About us</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <RoomIcon style={{marginRight:'10px'}}/>
                    5 Prince ifebori alade close, ajasa command, Lagos.
                </ContactItem>
                <ContactItem>
                    <PhoneIcon style={{marginRight:'10px'}}/>
                    +234 814 533 8797
                </ContactItem>
                <ContactItem>
                    <MailIcon style={{marginRight:'10px'}}/>
                    hardeyshinnah.mo@gmail.com
                </ContactItem>
                <Payment src= {require('../images/pay.png')}/>
            </Right>
        </Container>
     );
}
 
export default Footer;