/* eslint-disable react/no-unescaped-entities */
import './Shop.css'
import {StarBorder, } from '@mui/icons-material';
import fruit from '../../../../public/assets/vegetable.jpg'
import fruit2 from '../../../../public/assets/vegetable2.png'
import fruit3 from '../../../../public/assets/vegetable3.png'
import fruit4 from '../../../../public/assets/vegetable4.jpg'
import fruit5 from '../../../../public/assets/vegetable5.png'

const Shop2 = () => {
    const shopData = [
        {
            id:1,
            name: "Ginger",
            desc: '"Fruitful Living: Nourishing Your Health, One Bite at a Time"',
            price: 399,
            img: fruit,
        },
        {
            id:1,
            name: "Onion",
            desc: '"Fruitful Living: Nourishing Your Health, One Bite at a Time"',
            price: 399,
            img: fruit2,
        },
        {
            id:1,
            name: "Egge",
            desc: '"Fruitful Living: Nourishing Your Health, One Bite at a Time"',
            price: 399,
            img: fruit3,
        },
        {
            id:1,
            name: "Meat ",
            desc: '"Fruitful Living: Nourishing Your Health, One Bite at a Time"',
            price: 399,
            img: fruit4,
        },
        {
            id:1,
            name: "Garlic",
            desc: '"Fruitful Living: Nourishing Your Health, One Bite at a Time"',
            price: '599',
            img: fruit5,
        },
    ]
    return (
        <div>
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
        </div>
    );
};

export default Shop2;