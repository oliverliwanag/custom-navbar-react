import portfolio from '../assets/portfolio.png'
import responsivewebsite from '../assets/responsive-website.png'
import books from '../assets/books.png'

function Projects() {
    return (
        <div>
            <div className="projectSection">
                <h1 className="heading">PROJECTS</h1>
                <p className="subheading">some of my recent works</p>
                <div className="projectsList">
                    <div className="project">
                        <img src={portfolio} alt="Project" className="projectImg" />
                        <p>Portfolio</p>
                        <button onClick={() => window.open('https://cosmic-squirrel-fd90bf.netlify.app/', '_blank')}>Visit Website</button>
                    </div>
                    <div className="project">
                        <img src={responsivewebsite} alt="Project" className="projectImg" />
                        <p>Responsive Website</p>
                        <button onClick={() => window.open('https://oliverliwanag.github.io/responsive-navbar-cards/', '_blank')}>Visit Website</button>
                    </div>
                    <div className="project">
                        <img src={books} alt="Project" className="projectImg" />
                        <p>Book Finder</p>
                        <button onClick={() => window.open('https://merry-tarsier-fcfebb.netlify.app/', '_blank')}>Visit Website</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;