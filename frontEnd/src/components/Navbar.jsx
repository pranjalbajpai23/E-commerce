/* eslint-disable react/prop-types */
import { FcTwoSmartphones } from "react-icons/fc";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import {useDispatch, useSelector} from 'react-redux'
import { activeAction } from "../store/activeSlice";
const Navbar=()=>{
  const bag= useSelector(store=>store.bag);
  const active=useSelector(store=>store.active);
  const dispatch=useDispatch();
    return <>
        <nav className="navbar navbar-expand-xl navbar-dark bg-dark" aria-label="Sixth navbar example">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand" href="#"><FcTwoSmartphones size={"24"} /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample06" aria-controls="navbarsExample06" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarsExample06">
              <ul className="navbar-nav me-auto mb-2 mb-xl-0">
                <li className="nav-item">
                <Link to="/" className={`nav-link ${active.val == "home" && "active"}`} aria-current="page" href="#" onClick={() =>dispatch(activeAction.activeHome())}>Home</Link>
                </li>
                <li className="nav-item">
                <Link to="/listing" className={`nav-link ${active.val == "product" && "active"}`} href="#" onClick={()=>dispatch(activeAction.activeProduct())} >Product</Link>
                </li>
                {/* <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li> */}
              </ul>
              
              <Link to="/login" className="btn" style={{marginLeft:"10px"}}> <FaUser style={{color:"white"}}/></Link>
              <Link to="/bag" type="button" className="btn position-relative" style={{marginLeft:"10px", marginRight:"10px", color:"white"}}>
                <FaShoppingBag />
                <span className="position-absolute start-100 translate-middle badge rounded-pill bg-danger" style={{top:"10px"}}>
                  {bag.length}
                  <span className="visually-hidden">bag Items</span>
                </span>
              </Link>
            </div>
          </div>
        </nav>
    </>
}
export default Navbar;

