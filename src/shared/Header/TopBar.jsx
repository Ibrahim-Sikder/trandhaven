import './Header.css'
const TopBar = () => {
    return (
        <div className='topBar'>
             <div className="topBarWrap">
                    <span>Welcome to TrendHaven</span>
                    <div className='topbarRightSide'>
                        <span>Order Tracking</span>
                        <span>My Wishlist</span>
                        <span>Recent Viewed Products</span>
                    </div>
                </div>
        </div>
    );
};

export default TopBar;