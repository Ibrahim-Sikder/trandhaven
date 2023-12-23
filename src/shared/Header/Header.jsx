import './Header.css'
import { Person, ShoppingCart, Search, ExpandMore} from '@mui/icons-material';
import TopBar from './TopBar';

const Header = () => {
    return (
        <div className=''>
            <div>
               <TopBar/>
               <div className="navBarWrap">
               <div className="headerWrap">
                <div className="header">
                    <h3 className="text-3xl font-bold">Trendhaven</h3>
                    <div className='search'>
                        <input type="text" placeholder='Search here...' autoComplete='off'/>
                        <button><Search className='searchIcon'/> </button>
                    </div>
                   
                  <div className="flex items-center">
                  <div className="onlinShopping">
                        <Person className='personIcon'/>
                    </div>
                    <div className="cart">
                       <div className="shoppingCart">
                       <ShoppingCart className='shoopingCartIcon'/>
                       <h6 className="price">0</h6>
                       </div>
                        <div className='ml-2'>
                            <span>$00</span>
                            <p>Cart</p>
                        </div>
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
        </div>
    );
};

export default Header;