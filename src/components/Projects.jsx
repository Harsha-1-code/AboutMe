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
        name: '📚 AI Study Buddy',
        bullets: [
            'Developed an AI-powered study companion capable of summarizing notes, generating quizzes, and tracking progress.',
            'Integrated retrieval-based memory, personalized study paths, and LLM-driven assistance.',
            'Designed to enhance learning efficiency and automate study workflows.',
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
