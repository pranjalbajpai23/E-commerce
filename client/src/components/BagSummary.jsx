import { useSelector } from "react-redux";

const BagSummary=()=>{
    const bagItem=useSelector((state)=>state.bag);
    const totalItem=bagItem.length;
    let totalMRP=0;
    let totalPay=0;
    const itemList = useSelector(store => store.item);
    const finalList = itemList.filter(item => {
        const idx = bagItem.indexOf(item.id);
        return idx >= 0;
    })
    finalList.forEach((item) => {
        totalMRP+=Number(item.price);
        totalPay = totalMRP - 5 * totalItem;
    });
    return<>
        <div className="col-md-4 summary">
            <div><h5><b>Summary</b></h5></div>
            <hr />
            <div className="row">
                <div className="col" style={{ paddingLeft: "0" }}>ITEMS {totalItem}</div>
                <div className="col text-right">$ {totalMRP}</div>
            </div>
            <form>
                <p>SHIPPING</p>
                <select><option className="text-muted">Standard-Delivery- $20</option></select>
            </form>
            <div className="row" style={{ borderTop: "1px solid rgba(0,0,0,.1)", padding: " 2vh 0" }}>
                <div className="col">TOTAL PRICE</div>
                <div className="col text-right">$ {totalPay}</div>
            </div>
            <button className="btn checkoutBtn">CHECKOUT</button>
        </div>
        </>
}
export default BagSummary;