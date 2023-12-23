import './VegetableCategory.css'
import icon from '../../../../public/assets/icon.png'
import icon2 from '../../../../public/assets/icon2.png'
import icon3 from '../../../../public/assets/icon3.png'
import icon4 from '../../../../public/assets/icon4.png'
import icon5 from '../../../../public/assets/icon5.png'
const VegetableCategory = () => {
    const vegetableCategory = [
        {
            id:1,
            title: 'Fish',
            icon : icon,

        },
        {
            id:1,
            title: 'Apple',
            icon : icon2,

        },
        {
            id:1,
            title: 'Green Onion ',
            icon : icon3,

        },
        {
            id:1,
            title: 'Mangoes ',
            icon : icon4,

        },
        {
            id:1,
            title: 'Fresh Vegetable',
            icon : icon5,

        },
    ]
    return (
        <div className='wrapContainer'>
            <div className='vegetabelCategoryWraps'>
          {
            vegetableCategory.map(category=>  <div key={category.id} className="vegetabelCategory">
            <div className="vegetableImgWrap">
            <img className='vegetableIcon' src={category.icon} alt="" />
            </div>
              <div className='text-center'>
                  <h3 className='text-xl font-bold hover:text-[#00ab55] transition-all'>{category.title}</h3>
                  <small>33 items </small>
              </div>
          </div>)
          }
            </div>
        </div>
    );
};

export default VegetableCategory;