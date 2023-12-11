import './Header.css'
import { LocalPhone,Person, ShoppingCart, Search, ExpandMore} from '@mui/icons-material';
import TopBar from './TopBar';

const Header = () => {
    return (
        <div className=''>
            <div>
               <TopBar/>
                <div className="headerWrap">
                <div className="header">
                    <h3 className="text-3xl font-bold">Trendhaven</h3>
                    <div className='search'>
                        <input type="text" placeholder='Search here...' autoComplete='off'/>
                        <button><Search className='searchIcon'/> </button>
                    </div>
                    <div className="onlinShopping">
                        <LocalPhone className='searchIcon'/>
                        <div className='ml-2'>
                        <h4>Online Shopping </h4>
                        <span>+4748484959</span>
                        </div>
                    </div>
                    <div className="onlinShopping">
                        <Person className='searchIcon'/>
                        <div className='ml-2'>
                        <h4>Account </h4>
                        <span>Login/Register</span>
                        </div>
                    </div>
                    <div className="cart">
                       <div className="shoppingCart">
                       <ShoppingCart className='searchIcon'/>
                       <h6 className="price">0</h6>
                       </div>
                        <div className='ml-2'>
                            <span>$00</span>
                            <p>Cart</p>
                        </div>
                    </div>
                </div>
                <ul className='nav'>
                    <li>Home <ExpandMore/> </li>
                    <li>Shope <ExpandMore/> </li>
                    <li>Pages <ExpandMore/> </li>
                    <li>Vegetable <ExpandMore/> </li>
                    <li>Blog <ExpandMore/> </li>
                    <li>Flash Salse <ExpandMore/> </li>
                </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;