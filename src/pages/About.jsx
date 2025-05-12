import profile from '../assets/profile.jpg'

function About() {
    return (
        <div className="aboutSection">
            <h1 className="heading">ABOUT ME</h1>
            <p className="subheading">who I am & what I do</p>
            <div className="moreDesc">
                <img src={profile} alt="About" className="aboutImg" />
                <p className="moreInfo">I am John Oliver Liwanag, student from Dalubhasaan ng Lungsod ng Lucena currently studying Information Technology with a  strong interest for design and dedicated to turning ideas into  intuitive and visually engaging digital experiences.</p>
            </div>
        </div>
        
    )
}

export default About;