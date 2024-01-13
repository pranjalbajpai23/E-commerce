import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { activeAction } from "../store/activeSlice";
const Hero=()=>{
  const dispatch = useDispatch();
    return(<>
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
    <div className="col-md-6 p-lg-5 mx-auto my-5">
      <h1 className="display-3 fw-bold">Thinking of buying a phone?</h1>
      <h3 className="fw-normal text-muted mb-3">We got your back, from necessity to luxruy</h3>
      <div className="d-flex gap-3 justify-content-center lead fw-normal">
            <Link to="/listing" className="icon-link" href="#" onClick={() => dispatch(activeAction.activeProduct())}>
          Learn more
          <svg className="bi"><use xlinkHref="#chevron-right"></use></svg>
        </Link>
            <Link to="/listing" className="icon-link" href="#" onClick={() => dispatch(activeAction.activeProduct())}>
          Buy
          <svg className="bi"><use xlinkHref="#chevron-right"></use></svg>
        </Link>
      </div>
    </div>
    <div className="product-device shadow-sm d-none d-md-block"></div>
    <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
  </div>
    </>)
}
export default Hero;