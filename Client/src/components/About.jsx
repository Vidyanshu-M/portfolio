import "./About.css";

function About(){
    return(
        <section className="section about" id="about">
            <div className="about-container">
                {/* Left Side Content */}
                <div className="about-main">
                    <h2 className="section-title">About me</h2>
                    <p className="about-text">
                        I'm a B.Tech 3rd year (CSE) student at SHEAT College of Engineering, Varanasi.
                        I enjoy turning ideas into working websites, and I've spent the last year 
                        building projects with the MERN stack.  
                    </p>
                    <a href="#" className="btn btn-primary" target="_blank" rel="noreferrer">
                        Download resume
                    </a>
                </div>

                {/* Right Side Info Box */}
                <ul className="about-facts">
                    <li>
                        <span className="fact-label">Location</span>
                        <span className="fact-value">Varanasi, India</span>
                    </li>
                    <li>
                        <span className="fact-label">Email</span>
                        <a href="mailto:Vidyanshu@example.com" className="fact-value">Vidyanshu@example.com</a>
                    </li>
                    <li>
                        <span className="fact-label">GitHub</span>
                        <a href="https://github.com/Vidyanshu-M" target="_blank" rel="noreferrer" className="fact-value">
                            github.com/Vidyanshu-M
                        </a>
                    </li>
                    <li>
                        <span className="fact-label">LinkedIn</span>
                        <a href="https://www.linkedin.com/in/vidyanshu-mishra-46a622342/" target="_blank" rel="noreferrer" className="fact-value">
                            Vidyanshu Mishra
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default About;