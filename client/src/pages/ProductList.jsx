
import { useState } from 'react';
import {useLocation} from 'react-router';
import styled from 'styled-components';
import Anouncement from '../components/Anouncement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import {mobile} from '../responsive';

const Container = styled.div``

const Title = styled.h1`
    margin: 20px;    
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px;
    ${mobile({width: '0px 20px', display: 'flex', flexDirection: 'column'})}
`

const Filtertext = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;

    ${mobile({marginRight: '0px'})}
`

const Select = styled.select`
 padding: 10px;
 margin-right: 20px;
 cursor: pointer;

 ${mobile({margin: '10px 0px'})}
`

const Option = styled.option`

`
  
const ProductList = () => {
    const location = useLocation();
    const cat = (location.pathname.split("/")[2]);
    const [filters, newFilters] = useState();
    const [sort, newSort] = useState('newest');

    const handleFilters=(e)=>{
         const value = e.target.value;
         newFilters({
             ...filters,
             [e.target.name]: value,
         });
    }

    const handleSort = (e) => {newSort(e.target.value)}
    
    return ( 
        <Container>
            <Anouncement />
            <Navbar />
            <Title>{cat} </Title>
            <FilterContainer>
                <Filter>
                    <Filtertext>Filter Products:</Filtertext>
                    
                    <Select name='color' onChange={handleFilters}>
                        <Option disabled>Colour</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Black</Option>
                        <Option>White</Option>
                    </Select>
                    <Select name='size' onChange={handleFilters}>
                        <Option disabled>Size</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                        <Option>XXL</Option>
                        <Option>XXXL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <Filtertext>Sort Products:</Filtertext>
                    <Select onChange={handleSort}>
                    <Option value='newest'>Newest</Option>
                    <Option value='asc'>Price (asc)</Option>
                    <Option value='desc'>Price (desc)</Option>
                </Select>
                </Filter>

            </FilterContainer>
            <Products cat={cat} filters={filters} sort={sort} />
            <Newsletter />
            <Footer /> 
        </Container>
     );
}
  
export default ProductList; 