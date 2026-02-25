const interests = [
    { label: 'Keyboard', emoji: '⌨️' },
    { label: 'Music', emoji: '🎵' },
    { label: 'Badminton', emoji: '🏸' },
];

function Interests() {
    return (
        <section className="section fade-in">
            <h2 className="section-title">
                <span className="icon">🎯</span> Interests
            </h2>
            <div className="interests-list">
                {interests.map((item) => (
                    <div className="interest-chip" key={item.label}>
                        <span className="emoji">{item.emoji}</span>
                        {item.label}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Interests;
