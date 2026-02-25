const skillData = [
    {
        category: 'Programming',
        tags: ['Python', 'Java', 'C'],
    },
    {
        category: 'AI / ML',
        tags: [
            'Regression Models',
            'Transformers',
            'LangChain',
            'RAG',
            'TensorFlow',
            'scikit-learn',
        ],
    },
    {
        category: 'Tools',
        tags: ['Git', 'VS Code', 'Jupyter Notebook'],
    },
    {
        category: 'Concepts',
        tags: ['OOP', 'Data Structures', 'ML Evaluation'],
    },
];

function Skills() {
    return (
        <section className="section fade-in">
            <h2 className="section-title">
                <span className="icon">🛠️</span> Skills
            </h2>
            <div className="skills-grid">
                {skillData.map((skill) => (
                    <div className="skill-card" key={skill.category}>
                        <div className="skill-category">{skill.category}</div>
                        <div className="skill-tags">
                            {skill.tags.map((tag) => (
                                <span className="skill-tag" key={tag}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;
