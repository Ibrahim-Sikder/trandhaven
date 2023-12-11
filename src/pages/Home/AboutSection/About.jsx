/* eslint-disable react/no-unescaped-entities */
import { MedicalInformation} from '@mui/icons-material';
import './About.css'
const About = () => {
    const aboutData= [
        {
            id: 1,
            title: 'Freshness Guarantee:',
            subtitle: '"Our commitment to quality is unwavering. With our freshness guarantee, you can trust that every vegetable you receive is handpicked" ', 
        },
        {
            id: 1,
            title: 'Fast Delivery:',
            subtitle: '"Our commitment to quality is unwavering. With our freshness guarantee, you can trust that every vegetable you receive is handpicked" ', 
        },
        {
            id: 1,
            title: 'Exceptional Quality',
            subtitle: '"Our commitment to quality is unwavering. With our freshness guarantee, you can trust that every vegetable you receive is handpicked" ', 
        },
        {
            id: 1,
            title: 'Certified for Quality',
            subtitle: '"Our commitment to quality is unwavering. With our freshness guarantee, you can trust that every vegetable you receive is handpicked" ', 
        },

    ]
    return (
        <div>
            <div className="aboutWrap">
                <h2 className="text-4xl text-center my-3 font-bol">Why trust Trendhaven ?</h2>
                <div className="about">
               {
                aboutData.map(about=> <div key={about.id} className="aboutCard">
                <MedicalInformation className='aboutIcon'/>
                <h3 className='text-2xl'>{about.title}</h3>                  
                <p>{about.subtitle}</p>
            </div>)
               }
                </div>
            </div>
        </div>
    );
};

export default About;