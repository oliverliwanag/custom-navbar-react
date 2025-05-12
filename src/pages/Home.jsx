import { Link } from "react-router-dom";
import icon from '../assets/icon.png'

function Home() {
    return (
        <section className="home">
            <div className="heroContent">
                <h1 className="header">Hello!</h1>
                <div className="description">
                    <p className="introText">I'm <span className="highlight"> John Oliver Liwanag</span></p>
                    <p className="moreText">IT student with a passion for design and development.</p>
                </div>
                <div className="button"><Link to="/about" className="moreBtn">More About Me</Link></div>
            </div>
            <img src={icon} alt="Image of Me" className="heroImg" />
        </section>
    )
}

export default Home;