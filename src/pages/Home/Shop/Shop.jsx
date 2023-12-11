/* eslint-disable react/no-unescaped-entities */
import './Shop.css'
import {StarBorder, } from '@mui/icons-material';
import fruit from '../../../../public/assets/fruit.jpg'
import fruit2 from '../../../../public/assets/fruit2.jpg'
import fruit3 from '../../../../public/assets/fruit3.jpg'
import fruit4 from '../../../../public/assets/fruit4.jpg'
import fruit5 from '../../../../public/assets/fruit5.jpg'
import fruit10 from '../../../../public/assets/shop.png'
import Shop2 from './Shop2';
import Category from './Category';

const Shop = () => {
    const shopData = [
        {
            id:1,
            name: "Apple",
            desc: '"Fruitful Living: Nourishing Your Health, One Bite at a Time"',
            price: 399,
            img: fruit,
        },
        {
            id:1,
            name: "Apple",
            desc: '"Fruitful Living: Nourishing Your Health, One Bite at a Time"',
            price: 399,
            img: fruit2,
        },
        {
            id:1,
            name: "Apple",
            desc: '"Fruitful Living: Nourishing Your Health, One Bite at a Time"',
            price: 399,
            img: fruit3,
        },
        {
            id:1,
            name: "Apple",
            desc: '"Fruitful Living: Nourishing Your Health, One Bite at a Time"',
            price: 399,
            img: fruit4,
        },
        {
            id:1,
            name: "Apple",
            desc: '"Fruitful Living: Nourishing Your Health, One Bite at a Time"',
            price: 399,
            img: fruit5,
        },
    ]
    return (
        <div className='shopWrap'>
            <div>
                <h3 className='text-2xl font-bold mb-8 shopTitle'>Nature's Bounty, Delivered Fresh</h3>
              <div className="shopCardsWrap">
              {
                shopData.map(shop=> <div key={shop.id} className="shopCard">
                <div className="imgWrap">
                <img src={shop.img} alt="" />
                </div>
                <div className='shopContent'>
                 <h3 className="text-2xl font-bold">{shop.name}</h3>
                 <p className='my-1'>{shop.desc} </p>
                 <div >
                      <StarBorder className='reviewIcon'/>
                      <StarBorder className='reviewIcon'/>
                      <StarBorder className='reviewIcon'/>
                      <StarBorder className='reviewIcon'/>
                      <StarBorder className='reviewIcon'/>
                 </div>
                 <span className='block my-2'>BDT <b>{shop.price}৳</b></span>

                 <button className='addToCardBtn'>Add to cart</button>
                </div>
             </div>)
               }
              </div>
            </div>
            <div className="organicFruits my-16">
                <div className="leftSide">
                    <img src={fruit10} alt="" />
                </div>
                <div className="rightSideContent">
                    <h3 className="text-3xl font-bold mt-2">"PrimePicks: Where Every Vegetable is Verified Perfection"</h3>
                    <h6 className="text-xl font-bold">VeggieVista: Explore the Green Market Online</h6>
                    <p className='my-2'>Our commitment to quality is unwavering. With our freshness guarantee, you can trust that every vegetable you receive is handpicked" </p>
                    <button className='shopBtn'>Shop Now </button>
                </div>
            </div>
               <Shop2/>
               <Category/>
        </div>
    );
};

export default Shop;