import React from "react";

import {Link,Navigate,Route} from 'react-router-dom'

import './menu-item.styles.scss';

const MenuItem = ({title, imageUrl, size, history, linkUrl}) =>(
    <div 
    className={`${size} menu-item`} 
    >
        <div className="background-image"
        style = {{
            backgroundImage:`url(${imageUrl})`
        }}
        />
              <div className='content'>
                  <h1 className='title'>{title.toUpperCase()}</h1>
               <Link to="/shop"><span className='subtitle'>SHOP NOW</span></Link>                
              </div>
          </div>
);


export default MenuItem
// onClick={()=> navigate(`${match.url}${linkUrl}`)}