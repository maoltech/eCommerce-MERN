import styled from 'styled-components';
import Anouncement from '../components/Anouncement';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import {mobile} from '../responsive';

const Container = styled.div`

`
const Wrapper = styled.div`
padding: 20px;
${mobile({padding: '10px'})}
`
const Title = styled.h1`
font-weight: 300;
text-align: center;

`
const Top = styled.div`
display: flex;
align-item: center;
justify-content: space-between;
padding: 20px;
`

const TopButton = styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
border-radius: 10px;
border: ${props=>props.type === 'filled' && 'none' };
background-color: ${props=>props.type === 'filled' ? 'black' : 'transparent' };
color: ${props=>props.type === 'filled' ? '#fff' : 'black' };

`
const TopTexts = styled.div`
${mobile({display: 'none'})}
`

const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0px 10px;
`

const Bottom = styled.div`
display: flex;
justify-content: space-between;
${mobile({flexDirection: 'column'})}
`

const Info = styled.div`
flex:3;
`

const Product =styled.div`
display: flex;
justify-content: space-between;
margin: 10px 0 10px 0;
${mobile({flexDirection: 'column'})}

`
const ProductDetail =styled.div`
flex: 2;
display: flex;
`
const PriceDetail =styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const Image =styled.img`
width: 200px;
height:200px;
`
const ProductName =styled.span`
`
const ProductID =styled.span`
`
const ProductColor =styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props => props.color};
`
const ProductSize =styled.span`
`
const Details =styled.div`
padding: 20px;
display: flex;
flex-direction:column;
justify-content: space-around;
`

const ProductAmountContainer = styled.div`
display: flex;
align-item: center;
margin-bottom: 20; 
`
const ProductAmount = styled.div`
font-size: 24px;
margin: 5px;
${mobile({margin: '5px 15px'})}
`
const ProductPrice = styled.div`
font-size: 30px;
font-weight: 200;
${mobile({marginBottom: '20px'})}
`
const Hr =styled.hr`
background-color: #eee;
border: none;
height: 1px;
`

const Summary = styled.div`
flex: 1;
border: 0.5px solid lightgray;
border-radius: 10px;
padding: 20px;
height: 50vh;
`

const SummaryItem = styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight: ${props=>props.type === 'total' && '500'};
font-size: ${props=>props.type === 'total' && '24px'};

`

const SummaryTitle = styled.h1`
font-weight: 200;

`

const SummaryItemText = styled.span`

`

const SummaryItemPrice = styled.span``
const Button = styled.button`
width: 100%;
padding: 10px;
background-color: black;
color: white;
font-weight: 600;
border-radius: 20px;
cursor: pointer;
`

const Cart = () => {
    return ( 
        <Container>
            <Anouncement />
            <Navbar />
            <Wrapper>
                <Title> Your Blender </Title>
                <Top>

                    <TopButton>Continue Shopping</TopButton>
                    <TopTexts>
                        <TopText>Shopping Blender(2) </TopText>
                        <TopText>Your Wishlist(0) </TopText>
                    </TopTexts>
                    <TopButton type='filled'>Checkout Now</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src={require('../images/blender.jpg')}/>
                                <Details>
                                    <ProductName><b>Product:</b> DAWOO BLENDER</ProductName>
                                    <ProductID><b>ID:</b> 123456789</ProductID>
                                    <ProductColor color='red'/>
                                    <ProductSize><b>SIZE:</b> 37.5</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <AddIcon/>
                                    <ProductAmount>2</ProductAmount>
                                    <RemoveIcon/>
                                </ProductAmountContainer>
                            </PriceDetail>
                            <ProductPrice>&#8358;20000</ProductPrice>
                        </Product>
                        <Hr/>
                        <Product>
                            <ProductDetail>
                                <Image src={require('../images/airfryer.jpg')}/>
                                <Details>
                                    <ProductName><b>Product:</b> SILVER CREST AIRFRYER</ProductName>
                                    <ProductID><b>ID:</b> 987654321</ProductID>
                                    <ProductColor color='green'/>
                                    <ProductSize><b>SIZE:</b> 40.5</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <AddIcon/>
                                    <ProductAmount>3</ProductAmount>
                                    <RemoveIcon/>
                                </ProductAmountContainer>
                            </PriceDetail>
                            <ProductPrice>&#8358;10000</ProductPrice>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>&#8358;30000</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>&#8358;5000</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>-&#8358;1000</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type='total'>
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>&#8358;34000</SummaryItemPrice>
                        </SummaryItem>
                        <Button>Checkout Now</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
     );
}
 
export default Cart;