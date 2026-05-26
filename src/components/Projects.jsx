const projectData = [
    {
        name: '🤖 Chatbot using Gemini 2.5 Flash',
        bullets: [
            'Implemented multi-turn conversation memory and dynamic response generation.',
            'Designed structured input-handling pipelines.',
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
