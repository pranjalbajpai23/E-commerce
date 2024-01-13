import { Link } from "react-router-dom";
const Midsection=()=>{
  const styleLogo={
      display:"flex",
      flexDirection: "column",
      alignItems: "center",
  }
    return (<>
      <div className="row">
        <h1 style={{textAlign:"center"}}>Brands We have</h1>
        <div className="col-lg-3" style={styleLogo}>
          <img className=""   src="https://logowik.com/content/uploads/images/989_samsung.jpg"  />
          <h2 className="fw-normal">Samsung</h2>
        </div>
        <div className="col-lg-3" style={styleLogo}>
          <img className=" "   src="https://logowik.com/content/uploads/images/apple-black8038.jpg"  />
          <h2 className="fw-normal">Apple</h2>

        </div>
        <div className="col-lg-3" style={styleLogo}>
          <img className=" "   src="https://logowik.com/content/uploads/images/xiaomi.jpg"  />
          <h2 className="fw-normal">Xiaomi</h2>
        </div>
        <div className="col-lg-3" style={styleLogo}>
          <img className=" "   src="https://logowik.com/content/uploads/images/realme5985.logowik.com.webp"  />
          <h2 className="fw-normal">Realme</h2>
        </div>
      </div>
        <Link to="">
            <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
                <div className="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                  <div className="my-3 p-3">
                    <h2 className="display-5">Super Fast Delivery</h2>
                    <p className="lead">*no cost door step delivery</p>
                  </div>
                  <div className="bg-dark shadow-sm mx-auto" style={{ width: "80%", height: "500px",display:"flex", borderRadius: "21px 21px 0 0" , justifyContent:"center"}}>
                    <img src="./public/notime.svg" alt="" style={{width:"25rem"}}/>
                  </div>
                </div>
                <div className="text-bg-primary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                  <div className="my-3 py-3">
                    <h2 className="display-5">Only certified Products</h2>
                    <p className="lead">we only sell products certified by experts</p>
                  </div>
                  <div className="bg-body-tertiary shadow-sm mx-auto" style={{width: "80%",height: "500px",display:"flex", borderRadius:"21px 21px 0 0", justifyContent:"center" }}>
                      <img src="./public/certified.svg" alt="" style={{ width: "25rem" }} />
                  </div>
                </div>
            </div>
        </Link>
    </>)
}
export default Midsection;