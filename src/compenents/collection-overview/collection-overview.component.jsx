import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";


import './collection-overview.styles.scss'
import CollectionPreview from '../preview-collection/collection-preview.component'
import { selectCollections } from "../../redux/shopData/shop.selector";

const CollectionsOverview = ({collections}) =>(
    <div className='collections-preview'>
    {
        collections.map(({id, ...otherCollectionProps})=>(
            <CollectionPreview key={id} {...otherCollectionProps}  />
        ))
    }
</div>
)    

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(CollectionsOverview)