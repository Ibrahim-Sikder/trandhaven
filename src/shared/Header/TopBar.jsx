import { Link } from 'react-router-dom';
import './Header.css'
const TopBar = () => {
    return (
        <div className='topBar'>
             <div className="topBarWrap">
                    <span>Welcome to TrendHaven</span>
                    <div className='topbarRightSide'>
                        <span>Order Tracking</span>
                      <Link to='/wishlist'>  <span>My Wishlist</span></Link>
                    </div>
                </div>
        </div>
    );
};

export default TopBar;