function Experience() {
    return (
        <section className="slide slide--light" data-section="2">
            <div className="slide__frame">
                <span className="slide__number" data-animate="fade-left">03</span>

                <h2 className="experience__heading" data-animate="fade-up">
                    WORK<br />EXPERIENCE
                </h2>

                <div className="experience__grid">
                    <div>
                        <h3 className="experience__column-title" data-animate="fade-up" data-delay="1">
                            Internship
                        </h3>

                        <div className="experience__block" data-animate="fade-up" data-delay="2">
                            <div className="experience__company">CODEXINTERN</div>
                            <div className="experience__role">Python Development Intern (July 2025)</div>
                        </div>

                        <div data-animate="fade-up" data-delay="3">
                            <div className="experience__detail">
                                Built a regression model achieving R² = 0.82 for predicting house prices
                            </div>
                            <div className="experience__detail">
                                Developed a multi-turn chatbot using Gemini API
                            </div>
                            <div className="experience__detail">
                                Strengthened debugging, ML workflows, and documentation practices
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="experience__column-title" data-animate="fade-up" data-delay="1">
                            Key Highlights
                        </h3>

                        <div className="experience__block" data-animate="fade-up" data-delay="2">
                            <div className="experience__company">AI &amp; ML FOCUS</div>
                            <div className="experience__role">Machine Learning &amp; Backend Development</div>
                        </div>

                        <div data-animate="fade-up" data-delay="3">
                            <div className="experience__detail">
                                End-to-end ML pipeline development with data cleaning and feature engineering
                            </div>
                            <div className="experience__detail">
                                API integration and conversational AI systems
                            </div>
                            <div className="experience__detail">
                                Hands-on experience with TensorFlow, scikit-learn, and LangChain
                            </div>
                        </div>

                        <img
                            className="experience__photo"
                            src="profile/DSC_8280copy.jpg"
                            alt="Harsha working"
                            data-animate="fade-up"
                            data-delay="4"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;
