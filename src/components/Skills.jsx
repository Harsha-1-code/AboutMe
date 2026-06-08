function Skills() {
    return (
        <section className="slide slide--light" data-section="3">
            <div className="slide__frame">
                <span className="slide__number" data-animate="fade-left">04</span>

                <h2 className="skills__heading" data-animate="fade-up">
                    SKILLS &amp;<br />EXPERTISE
                </h2>

                <div className="skills__content">
                    <div>
                        <img
                            className="skills__photo"
                            src="profile/DSC_8280copy.jpg"
                            alt="Harsha coding"
                            data-animate="fade-up"
                            data-delay="1"
                        />
                    </div>

                    <div className="skills__grid">
                        <div data-animate="fade-up" data-delay="2">
                            <h3 className="skills__category-title">Programming</h3>
                            <div className="skills__item">Python</div>
                            <div className="skills__item">Java</div>
                            <div className="skills__item">C</div>
                        </div>

                        <div data-animate="fade-up" data-delay="3">
                            <h3 className="skills__category-title">AI / ML</h3>
                            <div className="skills__item">Regression Models</div>
                            <div className="skills__item">Transformers</div>
                            <div className="skills__item">LangChain</div>
                            <div className="skills__item">RAG</div>
                            <div className="skills__item">TensorFlow</div>
                            <div className="skills__item">scikit-learn</div>
                        </div>

                        <div data-animate="fade-up" data-delay="4">
                            <h3 className="skills__category-title">Tools</h3>
                            <div className="skills__item">Git</div>
                            <div className="skills__item">VS Code</div>
                            <div className="skills__item">Jupyter Notebook</div>
                        </div>

                        <div data-animate="fade-up" data-delay="5">
                            <h3 className="skills__category-title">Concepts</h3>
                            <div className="skills__item">OOP</div>
                            <div className="skills__item">Data Structures</div>
                            <div className="skills__item">ML Evaluation</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
