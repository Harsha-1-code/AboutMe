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
        <section className="section fade-in">
            <h2 className="section-title">
                <span className="icon">🎓</span> Education
            </h2>
            <div className="education-timeline">
                {educationData.map((edu, i) => (
                    <div className="edu-item" key={i}>
                        <div className="edu-content">
                            <div className="edu-institution">{edu.institution}</div>
                            <div className="edu-degree">{edu.degree}</div>
                            <div className="edu-details">{edu.period}</div>
                            <span className="edu-score">{edu.score}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Education;
