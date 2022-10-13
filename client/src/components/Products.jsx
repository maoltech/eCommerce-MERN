import { useState, useEffect } from 'react';
import  axios from 'axios';
import styled from 'styled-components';
import { popularProducts } from '../data';
import Product from './Product';


const Container = styled.div`
padding: 20px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;

 
`
 
const Products = ({cat, filters, sort}) => {

    const [products, setProducts] = useState([]);
    const [filtered, setFiltered] = useState([]);

     useEffect(()=>{
         const getProducts =async () =>{ 
             
             try{
                const res = await axios.get(cat ? `http://localhost:5000/api/product?category=${cat}` : 'http://localhost:5000/api/product');
                setProducts(res.data);
             }catch(err){
                 console.log(err.message);
             }
            }
            getProducts();
     },[cat]);

     useEffect(()=>{
         cat && setFiltered(
             products.filter(item=> Object.entries(filters).every(([key, value])=>
                item[key].includes(value)
             ) 
            )
         );
         
     },[products, cat, filters])

     useEffect(()=>{
         if(sort ==='newest'){
                setFiltered(
                    (prev)=>
                    [...prev].sort((a,b)=>a.createdAt - b.createdAt)
                     )
         }else if(sort='asc'){
            setFiltered(
                (prev)=>
                [...prev].sort((a,b)=>a.price - b.price)
                 )
         }else{
            setFiltered(
                (prev)=>
                [...prev].sort((a,b)=>b.price - a.price)
                 )
         } 
     }
         ,[sort])
    
    return ( 
        <Container>
            {
               cat ? filtered.map((item)=>(
                    <Product item={item} key={item.id}/>
                ))
                :popularProducts.slice(0, 8).map((item)=>(
                    <Product item={item} key={item.id}/>
                ))
            }
        </Container>
     );
}
 
export default Products;