function Experience() {
    return (
        <section className="section fade-in">
            <h2 className="section-title">
                <span className="icon">💼</span> Experience
            </h2>
            <div className="experience-item">
                <div className="experience-role">
                    Python Development Intern —{' '}
                    <span className="experience-company">CodexIntern</span>
                </div>
                <div className="experience-date">July 2025</div>
                <ul className="experience-bullets">
                    <li>
                        Built a regression model achieving R² = 0.82 for predicting house
                        prices.
                    </li>
                    <li>Developed a multi-turn chatbot using Gemini API.</li>
                    <li>
                        Strengthened debugging, ML workflows, and documentation practices.
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Experience;
