function Summary() {
    return (
        <section className="slide slide--light" data-section="1">
            <div className="slide__frame">
                <span className="slide__number" data-animate="fade-left">02</span>

                <div className="about__layout">
                    <div>
                        <h2 className="about__heading" data-animate="fade-up">
                            A LITTLE<br />ABOUT ME
                        </h2>
                    </div>
                    <div data-animate="rotate-in" data-delay="2">
                        <img
                            className="about__photo"
                            src="profile/DSC_8280copy.jpg"
                            alt="Harsha working"
                        />
                    </div>
                </div>

                <div className="about__bottom">
                    <p className="about__text" data-animate="fade-up" data-delay="3">
                        I am a Computer Science student at New Horizon College of Engineering, 
                        Bengaluru. I have been working with Python, machine learning, and backend 
                        development. I am experienced in building AI-driven tools including chatbots, 
                        ML models, and personalized study assistants.
                    </p>
                    <div data-animate="rotate-in" data-delay="4">
                        <img
                            className="about__photo about__photo--tilted"
                            src="profile/DSC_8280copy.jpg"
                            alt="Harsha at desk"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Summary;
