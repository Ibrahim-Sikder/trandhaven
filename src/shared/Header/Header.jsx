import './Header.css'
import { Person, ShoppingCart, Search, ExpandMore} from '@mui/icons-material';
import TopBar from './TopBar';
import img from '../../../public/assets/vegetable.jpg'
import { Link } from 'react-router-dom';
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
                       <Link to='/my-account'> <Person className='personIcon'/></Link>
                    </div>
                    <div className="cart">
                      <Link to='/cart'>
                      <div className="shoppingCart">
                       <ShoppingCart className='shoopingCartIcon'/>
                       <h6 className="price">0</h6>
                       </div>
                      </Link>
                        <div className='ml-2'>
                            <span>$00</span>
                            <p>Cart</p>
                        </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                <ul className='nav'>
                    <li className='ShopDropDownMenu'>Home <ExpandMore/> 
                    <div className="dropDownMenu">
                      <div>
                        <ul>
                        <h3 className="text-xl font-bold">Shop Category</h3>
                      <li>  Shop Default Grid</li>  
                      <li>Shop Default Listing</li>  
                      <li>Shop Left Sidebar</li>  
                      <li>Shop Right Sidebar</li>  
                      <li>Shop Category</li>  
                      <li>Shop Flash Sales</li>  
                      <li>Add to Cart + Popup</li>  
                      <li>Add to Cart + None Popup</li>  
                      <li>Add to Cart + Quantity Mode</li>  
                      </ul> </div>
                      <div>
                        <ul>
                        <h3 className="text-xl font-bold">Product Types </h3>
                      <li>Product Out Of Stock</li>  
                      <li>Product Count Down</li>  
                      <li>External/Affiliate Product</li>  
                      <li>Variable Product</li>  
                      <li>Product Video</li>  
                      <li>Product Variable Color</li>  
                      <li>Product Image Swatches</li>  
                      <li>Product Image Review Thumbna</li>  
                      </ul>
                      </div>
                      <div>
                        <ul>
                        <h3 className="text-xl font-bold">Product Layout </h3>
                      <li>   Product Image Vertical</li>  
                      <li>Product Image Horizontal</li>  
                      <li>Product Left – Main Sidebar</li>  
                      <li>Product Right – Main Sidebar</li>  
                      <li>Tab Default</li>  
                      <li>Tab Horizontal</li>  
                      <li>Tab Vertical</li>  
                      <li>Tab Accordion</li>  
                      </ul>
                      </div>
                      <div>
                        <ul>
                        <h3 className="text-xl font-bold">Woocomerce </h3>
                      <li>My Wishlist</li>  
                      <li>Shopping Cart</li>  
                      <li>Checkout</li>  
                      <li>Track My Order</li> 
                      <li>My account</li>  
                      </ul>
                      </div>
                    </div>
                    
                    </li>
                    <li className='ShopDropDownMenu'><Link to='/shop'>Shope</Link> <ExpandMore/> 
                    <div className="dropDownMenu">
                      <div>
                        <ul>
                        <h3 className="text-xl font-bold">Shop Category</h3>
                      <li>  Shop Default Grid</li>  
                      <li>Shop Default Listing</li>  
                      <li>Shop Left Sidebar</li>  
                      <li>Shop Right Sidebar</li>  
                      <li>Shop Category</li>  
                      <li>Shop Flash Sales</li>  
                      <li>Add to Cart + Popup</li>  
                      <li>Add to Cart + None Popup</li>  
                      <li>Add to Cart + Quantity Mode</li>  
                      </ul> </div>
                      <div>
                        <ul>
                        <h3 className="text-xl font-bold">Product Types </h3>
                      <li>Product Out Of Stock</li>  
                      <li>Product Count Down</li>  
                      <li>External/Affiliate Product</li>  
                      <li>Variable Product</li>  
                      <li>Product Video</li>  
                      <li>Product Variable Color</li>  
                      <li>Product Image Swatches</li>  
                      <li>Product Image Review Thumbna</li>  
                      </ul>
                      </div>
                      <div>
                        <ul>
                        <h3 className="text-xl font-bold">Product Layout </h3>
                      <li>   Product Image Vertical</li>  
                      <li>Product Image Horizontal</li>  
                      <li>Product Left – Main Sidebar</li>  
                      <li>Product Right – Main Sidebar</li>  
                      <li>Tab Default</li>  
                      <li>Tab Horizontal</li>  
                      <li>Tab Vertical</li>  
                      <li>Tab Accordion</li>  
                      </ul>
                      </div>
                      <div>
                        <ul>
                        <h3 className="text-xl font-bold">Woocomerce </h3>
                      <li>My Wishlist</li>  
                      <li>Shopping Cart</li>  
                      <li>Checkout</li>  
                      <li>Track My Order</li> 
                      <li>My account</li>  
                      </ul>
                      </div>
                    </div>
                    </li>
                    <li>Pages <ExpandMore/> </li>
                    <li className='ShopDropDownMenu'>Vegetable <ExpandMore/> 
                    <div className="dropDownMenu">
                      <div>
                        <ul>
                        <h3 className="text-xl font-bold">Top Category</h3>
                      <li>Asparagus</li>  
                      <li>Beans & Peas</li>  
                      <li>Beetroot & Radish</li>  
                      <li>Broccoli & Cauliflower</li>  
                      <li>Cabbage & Spinach</li>  
                      <li>Celery & Fennel</li>  
                      <li>Carrots & Root</li> 
                      </ul> </div>
                      <div>
                        <ul>
                        <h3 className="text-xl font-bold">FEATURED SUPPLIERS </h3>
                      <li>Product Out Of Stock</li>  
                      <li>Product Count Down</li>  
                      <li>External/Affiliate Product</li>  
                      <li>Variable Product</li>  
                      <li>Product Video</li>  
                      <li>Product Variable Color</li>  
                      <li>Product Image Swatches</li>  
                      <li>Product Image Review Thumbna</li>  
                      </ul>
                      </div>
                      <div className='w-[430px]'>
                        <img src={img} alt="fruit" />
                      </div>
                    </div>
                    </li>
                    <li>Blog <ExpandMore/> </li>
                    <li>Flash Salse <ExpandMore/> </li>
                </ul>
                <div className='flex items-center'>
                    <h3 className=" font-bold">Recently Viewed Products </h3>
                    <ExpandMore/> 
                </div>
                </div>
                </div>
               </div>
            </div>
        </div>
    );
};

export default Header;