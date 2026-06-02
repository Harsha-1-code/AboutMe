const projectData = [
    {
        name: '💨Smoke and fire Detector Web App',
        bullets: [
            'Developed a smart smoke detection system using ESP32 and Arduino IDE to monitor air quality and detect fire hazards in real-time.',
            'Implemented a dashboard to display air quality data and upload images when smoke is detected.',
        ],
    },
    {
        name: '🏠 House Price Prediction — Regression Model',
        bullets: [
            'Performed data cleaning, feature engineering, encoding, and regression model training.',
            'Enabled predictions based on size, bedrooms, and location.',
        ],
    },
    {
        name: '📚Pharmacy LLM',
        bullets: [
            'Engineered a specialized large language model for pharmaceutical and medical queries, ensuring responses adhere to professional medical standards.',
            'Fine-tuned the model on pharmaceutical textbooks and medical references to enhance domain knowledge and accuracy.',
            'Optimized the models inference performance to ensure reliable, high-integrity responses regarding drug compositions and usages.',
        ],
    },
];

function Projects() {
    return (
        <section className="section fade-in">
            <h2 className="section-title">
                <span className="icon">🚀</span> Projects
            </h2>
            <div className="projects-grid">
                {projectData.map((project) => (
                    <div className="project-card" key={project.name}>
                        <div className="project-name">{project.name}</div>
                        <ul className="project-bullets">
                            {project.bullets.map((b, i) => (
                                <li key={i}>{b}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
