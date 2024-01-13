import { Link } from 'react-router-dom';
import './Bag.css'
import BagItem from './BagItem';
import BagSummary from "./BagSummary";
import {useSelector} from 'react-redux';
const Bag=()=>{
    const bagItem = useSelector(store => store.bag);
    const itemList = useSelector(store => store.item);
    const finalList=itemList.filter(item=>{
        const idx=bagItem.indexOf(item.id);
        return idx>=0;
    })
    
    return <>
    <div className="body">
        <div className="card">
            <div className="row">
                <div className="col-md-8 cart">
                    <div className="title">
                        <div className="row">
                            <div className="col"><h4><b>Shopping Cart</b></h4></div>
                            <div className="col align-self-center text-right text-muted">{finalList.length} items</div>
                        </div>
                    </div>
                    <div className="row border-top border-bottom">
                        {
                                finalList.map(item => <BagItem key={item.id} item={item} />)
                        }
                        
                    </div>
                    <div className="back-to-shop"><Link to="/listing" style={{fontSize:"30px"}}>&larr;</Link><span className="text-muted">Back to shop</span></div>
                </div>
                <BagSummary/>
            </div>

        </div>
        </div>
        </>
}
export default Bag;