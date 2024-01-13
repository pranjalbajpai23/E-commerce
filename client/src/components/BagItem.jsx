/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import { bagActions } from "../store/bagSlice";

const BagItem=({item,})=>{
    const dispatch=useDispatch();
    const handleRemove=()=>{
        dispatch(bagActions.removeFromBag(item.id));
    }
    return <>
        <div className="row main align-items-center">
            <div className="col-2"><img className="img-fluid" src={item.img} /></div>
            <div className="col">
                <div className="row text-muted">{item.name}</div>
            </div>
            <div className="col">
                <button className="btn" href="#">1</button>
            </div>
            <div className="col" style={{ width: "100%", display:"flex", justifyContent:"space-between" }} > <span>{item.price} </span><button onClick={handleRemove} className="btn close" >&#10005;</button></div>
        </div>
        </>
}
export default BagItem;