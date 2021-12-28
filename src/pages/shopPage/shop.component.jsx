import React from "react";
import {Routes,Route } from "react-router";

import CollectionsOverview from '../../compenents/collection-overview/collection-overview.component'



const  ShopPage = ({match}) =>{
    return(
    <div className='shop-page'>
        <Routes>
            <Route  path='/' element={<CollectionsOverview/>}/>
        </Routes>     
    </div>
    )}
    



export default (ShopPage)