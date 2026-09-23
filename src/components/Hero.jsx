import "./Hero.css";
function Hero(){
    return(
        <section className="hero" id="home">
            <div className="container hero-inner">
                <div className="hero-text">
                    <p claasName="hero-greeting">Hi' I'm</p>
                    <h1 className="hero-name">Vidyanshu Mishra</h1>
                    <h2 className="hero-title">MERN Stack Developer</h2>
                    <p className="hero-tagline">
                        I build simple,first web apps with React and Node.js and
                         I'm looking for my first role as a full-stack Developer

                    </p>
                    <div className="hero-buttons">
                        <a href="#projects" className="btn btn-primary">
                            See my projects
                        </a>
                        <a href="#contact"className="btn btn-outline">
                            Contact me
                        </a>
                    </div>

                </div>
                <div className="hero-photo">
                    <img src="/profile.jpg" alt="Vidyanshu Mishra"/>    

                </div>
            </div>

        </section>
    );
}
export default Hero;