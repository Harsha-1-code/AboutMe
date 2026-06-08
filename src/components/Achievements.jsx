function Achievements() {
    return (
        <section className="slide slide--light" data-section="7">
            <div className="slide__frame">
                <span className="slide__number" data-animate="fade-left">08</span>

                <h2 className="achievements__heading" data-animate="fade-up">
                    ACHIEVEMENTS
                </h2>

                <div
                    className="achievement-card"
                    data-animate="fade-up"
                    data-delay="2"
                >
                    <div className="achievement-card__icon">🥉</div>
                    <div className="achievement-card__text">
                        <strong>3rd Place</strong> — AI Heist, Quantum X-25 (NHCE)
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Achievements;
