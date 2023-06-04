import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchdata } from '../../../slices/productSlice';
import SingleProduct from "../singleProduct/SingleProduct";
import "./ProductList.css"
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

export default function ProductList() {

  const dispatch = useDispatch();
  const products = useSelector(state => state.productReducer.products)
  const status = useSelector(state => state.productReducer.status);
  // async function fetchdata(){
  //     const response = await fetch('https://fakestoreapi.com/products');
  //     const data = await response.json();
  //     dispatch(loadProducts(data))
  // }

  useEffect(() => {
    // fetchdata();
    dispatch(fetchdata());
  }, [])

  if (status === 'loading') {
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

    return <div className='spin' >
          <Spin indicator={antIcon} />
                <h2>laoding....</h2> 
          </div>     
    }
  return (
    <div className="ProductList">{products.map(items => <SingleProduct key={items.id} product={items} /> )}</div>
  )
}