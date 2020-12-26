import React,{useState,useEffect} from 'react';
import { Route } from 'react-router-dom';

// import { firestore } from '../../firebase/firebase.utils';
import CollectionOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

const ShopPage = ({match}) => { // route automatically pass 3 objects -> match,location,history

    // eslint-disable-next-line
    // const [collections,setCollections] = useState(SHOP_DATA)

    // var unsubscribeFromSnapshot=null;
    // useEffect(()=>{

    //     const collectionRef=firestore.collection('users');
    //     collectionRef.onSnapshot(async snapshot =>{
    //         console.log(snapshot.data);
    //     })
    // })

    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionOverview}/>
            <Route  path={`${match.path}/:collectionId`} component={CollectionPage}/>
        </div>
    )
} 

export default ShopPage;