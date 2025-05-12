import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

function Contact() {
    return (
        <div className="contactSection">
            <h1 className="heading">CONTACT</h1>
            <p className="subheading">feel free to reach out</p>
            <div class="contactContent">
                <div class="contactInfo">
                    <div class="infoBox">
                        <FaEnvelope size={30} />
                        <a href="mailto:oliveralvarezliwanag@gmail.com">oliveralvarezliwanag@gmail.com</a>
                    </div>
                    <div class="infoBox">
                        <FaPhoneAlt size={30}/>                            
                        <a href="tel:09605116853">09605116853</a>
                    </div>
                    <div class="infoBox">
                        <FaMapMarkerAlt size={30}/>                            
                        <a href="">Ilayang Iyam, Lucena City</a>
                    </div>
                </div>
                <div class="socials">
                    <div class="account">
                        <a href="https://www.facebook.com/o.oliverliwanag/" target="_blank">
                            <span className="icon"><FaFacebook size={40}/></span>
                        </a>
                        <a href="https://www.facebook.com/o.oliverliwanag/" target="_blank" className="text">Facebook</a>
                    </div>
                    <div class="account">
                        <a href="https://www.facebook.com/o.oliverliwanag/" target="_blank">
                            <span className="icon"><FaInstagram size={35}/></span>
                        </a>
                        <a href="https://www.facebook.com/o.oliverliwanag/" target="_blank" className="text">Instagram</a>
                    </div>
                    <div class="account">
                        <a href="https://github.com/oliverliwanag" target="_blank">
                            <span className="icon"><FaGithub size={40}/></span>
                        </a>
                        <a href="https://github.com/oliverliwanag" target="_blank" className="text">Github</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;