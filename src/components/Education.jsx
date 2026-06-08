const educationData = [
    {
        institution: 'New Horizon College of Engineering, Bengaluru',
        degree: 'B.Tech in Computer Science',
        period: '2024 – Present',
        score: 'CGPA: 8.25',
    },
    {
        institution: 'New Horizon Gurukul',
        degree: '12th – CBSE',
        period: '2023 – 2024',
        score: '65%',
    },
    {
        institution: 'New Horizon Gurukul',
        degree: '10th',
        period: '2021 – 2022',
        score: '94%',
    },
];

function Education() {
    return (
        <section className="slide slide--light" data-section="6">
            <div className="slide__frame">
                <span className="slide__number" data-animate="fade-left">07</span>

                <h2 className="education__heading" data-animate="fade-up">
                    EDUCATION
                </h2>

                <div className="education__timeline">
                    {educationData.map((edu, i) => (
                        <div
                            className="education__item"
                            key={i}
                            data-animate="fade-up"
                            data-delay={String(i + 2)}
                        >
                            <div className="education__period">{edu.period}</div>
                            <div>
                                <div className="education__institution">{edu.institution}</div>
                                <div className="education__degree">{edu.degree}</div>
                                <span className="education__score">{edu.score}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Education;
