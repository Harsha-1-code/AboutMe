const interests = [
    { label: 'Keyboard', emoji: '⌨️' },
    { label: 'Music', emoji: '🎵' },
    { label: 'Badminton', emoji: '🏸' },
];

function Interests() {
    return (
        <section className="slide slide--light" data-section="10">
            <div className="slide__frame">
                <span className="slide__number" data-animate="fade-left">11</span>

                <h2 className="interests__heading" data-animate="fade-up">
                    INTERESTS
                </h2>

                <div className="interests__list">
                    {interests.map((item, index) => (
                        <div
                            className="interest-chip"
                            key={item.label}
                            data-animate="fade-up"
                            data-delay={String(index + 2)}
                        >
                            <span className="interest-chip__emoji">{item.emoji}</span>
                            {item.label}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Interests;
