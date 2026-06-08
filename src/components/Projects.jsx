const projectData = [
    {
        icon: '💼',
        name: 'Teak — Premium AI Job Board & Tailored Resume Suite',
        bullets: [
            'Developed a premium job search dashboard with a swipe-based job matching interface, recruiter outreach system, and pipeline management.',
            'Engineered a Flask AI backend with a model cascade system (Hugging Face, Gemini, and local Ollama) for automated ATS resume optimization, cover letter tailoring, and cold outreach drafting.',
            'Integrated Supabase for profile persistence, pipeline state storage, and scrapers to automatically import fresh postings.',
        ],
    },
    {
        icon: '💨',
        name: 'Smoke & Fire Detector Web App',
        bullets: [
            'Developed a smart smoke detection system using ESP32 and Arduino IDE to monitor air quality and detect fire hazards in real-time.',
            'Implemented a dashboard to display air quality data and upload images when smoke is detected.',
        ],
    },
    {
        icon: '📚',
        name: 'Pharmacy LLM',
        bullets: [
            'Engineered a specialized large language model for pharmaceutical and medical queries, ensuring responses adhere to professional medical standards.',
            'Fine-tuned the model on pharmaceutical textbooks and medical references to enhance domain knowledge and accuracy.',
            'Optimized inference performance to ensure reliable, high-integrity responses regarding drug compositions and usages.',
        ],
    },
];

function Projects() {
    return (
        <section className="slide slide--light" data-section="4">
            <div className="slide__frame">
                <span className="slide__number" data-animate="fade-left">05</span>

                <h2 className="projects__heading" data-animate="fade-up">
                    MY<br />PROJECTS
                </h2>

                <div className="projects__list">
                    {projectData.map((project, index) => (
                        <div
                            className="project-card"
                            key={project.name}
                            data-animate="fade-up"
                            data-delay={String(index + 2)}
                        >
                            <div className="project-card__icon">{project.icon}</div>
                            <div>
                                <div className="project-card__name">{project.name}</div>
                                <ul className="project-card__bullets">
                                    {project.bullets.map((b, i) => (
                                        <li key={i}>{b}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
