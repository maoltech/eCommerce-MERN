import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: #ff1493;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
    
`

const Anouncement = () => {
    return (  
        <Container>
            Super Deal! Free Shipping on Orders over &#8358;5000.
        </Container>
    
        );
}
 
export default Anouncement;