import { useEffect, useState } from "react";
import Product from "../components/Product";
import Nothingfound from "../components/Nothingfound"; 
import { useDispatch, useSelector } from "react-redux";
import { itemActions } from "../store/itemSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";
const ProductListing=()=>{
    const fetchStatus=useSelector(store=>store.fetchStatus);
    const dispatch=useDispatch();
    useEffect(() => {
      async function fetchData() {

        if(fetchStatus.fetchDone)return;
        
        const controler=new AbortController();
        const signal=controler.signal;
        dispatch(fetchStatusActions.mrkFetchStarted());
        fetch(`http://localhost:8080/items/`,{signal})
        .then(res=>res.json()).then(data=>{
          dispatch(fetchStatusActions.mrkFetchDone());
          dispatch(itemActions.addInitialItem(data))
          dispatch(fetchStatusActions.mrkFetchFinished());
        });
        return ()=>{
          controler.abort();
        };     
      }
      fetchData();
    },[fetchStatus]);
  const [search, setSearch ]=useState('');
  const item=useSelector(store=>store.item);
    return (<>
      <form role="search" style={{ display:"flex",justifyContent:"end",padding:"10px" }}>
        <input style={{ width: "20%" }} className="form-control" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>setSearch(e.target.value)}/>
      </form>
      {

        (item.length == 0 || item.length==undefined) ? <Nothingfound /> :
        <div className="row row-cols-1 row-cols-md-5 g-5" style={{ marginLeft: "0", marginRight: "0", marginTop: "10px" }}>
            
          {item.filter((item=>{
            return search.toLocaleLowerCase==''?item:item.name.toLocaleLowerCase().includes(search)
          })).map((item) => <Product key={item.name} item={item}></Product>)}

        </div>
       }
    </>)
}
export default ProductListing;