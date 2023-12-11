/* eslint-disable react/no-unescaped-entities */
import './Shop.css'
import {StarBorder, } from '@mui/icons-material';
import fruit from '../../../../public/assets/fruit.jpg'

const Shop = () => {
    return (
        <div>
            <div className="shopWrap">
                <h3 className='text-2xl font-bold mb-5'>Nature's Bounty, Delivered Fresh</h3>
                <div className="shopCard">
                   <div className="imgWrap">
                   <img src={fruit} alt="" />
                   </div>
                   <div className='shopContent'>
                    <h3 className="text-2xl font-bold">Apples</h3>
                    <p className='my-1'>"Fruitful Living: Nourishing Your Health, One Bite at a Time"</p>
                    <div >
                         <StarBorder className='reviewIcon'/>
                         <StarBorder className='reviewIcon'/>
                         <StarBorder className='reviewIcon'/>
                         <StarBorder className='reviewIcon'/>
                         <StarBorder className='reviewIcon'/>
                    </div>
                    <span className='block my-1'>BDT 399৳</span>

                    <button className='addToCardBtn'>Add to cart</button>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;