import "./Skills.css";

function Skills({ skills }) {
    const categories = ["Frontend", "Backend", "Tools"];

    return (
        <section className="Section skills" id="skills">
            <div className="container">
                <h2 className="Section__title">Skills</h2>
                <p className="Section__description">
                    I have a strong foundation in web development and a passion for creating efficient and scalable
                    applications. My skills span across various technologies and frameworks, allowing me to adapt 
                    to different project requirements.
                </p>
                <div className="skills__grid">
                    {categories.map((category) => (
                        <div className="skills-group" key={category} >
                            <h3>{category}</h3>
                            <div className="skills-list">
                                {skills
                                    .filter((skill) => skill.category === category)
                                    .map((skill) => (
                                        <span className = "skill-chip" key={skill._id}>{skill.name}</span>
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;