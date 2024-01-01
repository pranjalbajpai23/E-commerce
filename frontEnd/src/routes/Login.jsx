import { FcTwoSmartphones } from "react-icons/fc";
import { Link } from "react-router-dom";
const Login=()=>{
    return <>
        <form style={{width:"30%",margin:"auto"}}>  
            <FcTwoSmartphones size={"110"} />
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                        <label htmlFor="floatingInput">Email address</label>
                </div>
            <div className="form-floating" style={{ marginTop:"1rem"}}>
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                        <label htmlFor="floatingPassword">Password</label>
                </div>

                <div className="form-check text-start my-3">
                    <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Remember me
                        </label>
                </div>
                <Link to="/listing" className="btn btn-primary w-100 py-2" type="submit">Sign in</Link>
                <p className="mt-5 mb-3 text-body-secondary">© 2023–2024</p>
        </form>
            
    </>
}
export default Login;