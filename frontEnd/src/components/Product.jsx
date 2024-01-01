/* eslint-disable react/prop-types */

// import { Link } from "react-router-dom";
import styles from './Product.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { bagActions } from "../store/bagSlice"
const  Product =({item})=>{

  const bagitem=useSelector(store=>store.bag);
  const found = bagitem.indexOf(item.id)>=0;


  const dispatch=useDispatch();
  const handleAddToBag=()=>{
    dispatch(bagActions.addToBag(item.id));
  } 
  const handleRemoveBag=()=>{
    dispatch(bagActions.removeFromBag(item.id));
  } 

    return (

        <div className={`col `}>
              <div className={`card h-100 ${styles.product}`}>
                <img src={item.img} className={`card-img-top ${styles.productImage}`} alt={item.img}/>
                <div className={`card-body ${styles.carBody}`}>
                  <h5 className="card-title" style={{textAlign:"center"}} >{item.name}</h5>
                  <p className="card-text" style={{ textAlign:"justify"}}>{
                  item.description.split(".")
                  }</p> 
                  <div className="row" style={{display: "flex",justifyContent:"space-evenly"}}>
                 {
                 !found? 
                  <button type="button" className={`col-10 btn btn-primary ${styles.hoverToAdd}`} onClick={handleAddToBag} ><span>${item.price}</span></button>
                  :
                  <button type="button" className={`col-10 btn  ${styles.remove}`} onClick={handleRemoveBag} ><span>Remove from bag</span></button>
                  }</div>
                </div>
              </div>
        </div>
  );

}


export default Product;