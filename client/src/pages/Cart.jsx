import styled from 'styled-components';
import Anouncement from '../components/Anouncement';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import {mobile} from '../responsive';
import StripeCheckout from 'react-stripe-checkout';
import {useSelector} from 'react-redux';
import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {userRequest} from '../requestMethod';

const KEY = process.env.REACT_APP_STRIPE;



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
font-size: 10;
border: 0.5px solid lightgray;
border-radius: 10px;
padding: 15px;
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
/*const StripeCheckout = styled.button`
width: 100%;
padding: 10px;
background-color: black;
color: white;
font-weight: 600;
border-radius: 20px;
cursor: pointer;
`
*/
const Cart = () => {
    const cart = useSelector(state=>state.cart);
    const [stripeToken, setStripeToken] = useState(null);
    const navigate = useNavigate()

    const onToken = (token)=>{
        setStripeToken(token)
    }

    useEffect(()=>{
        const makeRequest = async () =>{
            try {
                const res = await userRequest.post('/checkout/payment', {
                    tokenId: stripeToken.id,
                    amount: cart.total*100,
                    
                });
                navigate('/success',{data:res.data})
            } catch (error) {
                navigate('/failed')
                console.log(error.messsage);
             }
         };
         stripeToken && cart.total >= 1 && makeRequest();

    },[stripeToken, cart.total,navigate])


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
                        {cart.products.map(product=>(<Product>
                            <ProductDetail>
                                <Image src={require('../images/blender.jpg')}/>
                                <Details>
                                    <ProductName><b>Product:</b> {product.title}</ProductName>
                                    <ProductID><b>ID:</b> {product._id}</ProductID>
                                    <ProductColor color={product.color}/>
                                    <ProductSize><b>SIZE:</b> {product.size}</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <AddIcon/>
                                    <ProductAmount>{product.quantity}</ProductAmount>
                                    <RemoveIcon/>
                                </ProductAmountContainer>
                            </PriceDetail>
                            <ProductPrice>&#8358;{product.price}</ProductPrice>
                        </Product>))}
                        <Hr/>
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>&#8358;{cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>&#8358;5000</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>-&#8358;{cart.total*0.25}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type='total'>
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>&#8358;{cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <StripeCheckout
                            name='MJecommerce'
                            image='https://avatars.githubusercontent.com/u/1486366?v=4'
                            billingAddress
                            shippingAddress
                            description={`Your total is ${cart.total}`}
                            amount={cart.total*100}
                            token={onToken}
                            stripeKey={KEY}
                         />
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
     );
}
 
export default Cart;