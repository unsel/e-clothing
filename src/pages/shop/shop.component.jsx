import React,{useState,useEffect} from 'react';

import SHOP_DATA from './shop.data';

import { firestore } from '../../firebase/firebase.utils';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

const ShopPage = () => {

    // eslint-disable-next-line
    const [collections,setCollections] = useState(SHOP_DATA)

    var unsubscribeFromSnapshot=null;
    useEffect(()=>{

        const collectionRef=firestore.collection('users');
        collectionRef.onSnapshot(async snapshot =>{
            console.log(snapshot.data);
        })
    })

    return (
        <div className='shop-page'>
            {
                collections.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps}/>
                ))
            }
        </div>
    )
} 



export default ShopPage;