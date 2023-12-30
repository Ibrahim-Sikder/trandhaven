import { Link } from 'react-router-dom';
import './Header.css'
const TopBar = () => {
    return (
        <div className='topBar'>
             <div className="topBarWrap">
                    <span>Welcome to TrendHaven</span>
                    <div className='topbarRightSide'>
                      <Link to='/wishlist'>  <span className='hover:border-b-2 transition-all '>Order Tracking</span></Link>
                      <Link to='/wishlist'>  <span className='hover:border-b-2 transition-all ' >My Wishlist</span></Link>
                    </div>
                </div>
        </div>
    );
};

export default TopBar;