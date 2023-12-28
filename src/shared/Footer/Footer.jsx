import './Footer.css'
import { HiEnvelope,HiMiniPhone ,HiHome } from "react-icons/hi2";
import { FaFacebook,FaInstagramSquare ,FaTwitter,FaLinkedin} from "react-icons/fa";
const Footer = () => {
    return (
        <div className='wrapContainer'>
            <div className="footer">
                <div className='trendHaven'>
                    <h3 className="text-3xl font-bold">Trendhaven</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, hic omnis voluptatum deserunt velit beatae quidem porro quod doloremque quam molestiae quo atque, assumenda, fugiat aliquam quas labore sint saepe.</p>

                    <div>
                        <div className="flex items-center mt-4">
                            <HiEnvelope size={20} className='mr-2'/>
                            <span>softypy@gmail.com</span>
                        </div>
                        <div className="flex items-center my-4">
                            <HiMiniPhone className='mr-2' size={20} />
                            <span>+88-0467484848</span>
                        </div>
                        <div className="flex items-center my-4">
                            <HiHome className='mr-2' size={20} />
                            <span>Dhaka,Gulshan,Jabbar Tower 3rd Floor </span>
                        </div>
                        <div className="flex items-center my-4">
                            <FaFacebook className='mr-2' size={20}/>
                            <FaTwitter className='mr-2' size={20} />
                            <FaLinkedin className='mr-2' size={20} />
                            <FaInstagramSquare className='mr-2' size={20} />
                        </div>
                        <p >@2023, all right reserve by softypy </p>
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-bold">About</h3>
                    <ul>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Help Center</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-bold">Services</h3>
                    <ul>
                        <li>Branding</li>
                        <li>Design</li>
                        <li>Marketing</li>
                        <li>Advertisemen</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-bold">Legal</h3>
                    <ul>
                        <li>Terms of use</li>
                        <li>Privacy policy</li>
                        <li>Cookie policy</li>
                    </ul>
                    


                </div>
                <div>
                    <h3 className="text-xl font-bold">Social Media </h3>
                    <ul>
                        <li>Branding</li>
                        <li>Design</li>
                        <li>Marketing</li>
                        <li>Advertisemen</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;