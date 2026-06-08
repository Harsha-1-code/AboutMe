import { useState, useEffect } from 'react';
import certificationsData from '../data/certifications';

function Certifications() {
    const [activeCert, setActiveCert] = useState(null);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setActiveCert(null);
        };
        if (activeCert) {
            window.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [activeCert]);

    return (
        <section className="slide slide--light" data-section="8">
            <div className="slide__frame">
                <span className="slide__number" data-animate="fade-left">09</span>

                <h2 className="certifications__heading" data-animate="fade-up">
                    CERTIFICATIONS
                </h2>

                <div className="certifications__grid">
                    {certificationsData.map((cert, index) => (
                        <div
                            className="cert-card"
                            key={index}
                            data-animate="fade-up"
                            data-delay={String(index + 2)}
                        >
                            {cert.image && (
                                <div
                                    className="cert-card__image-wrapper"
                                    onClick={() => setActiveCert(cert)}
                                >
                                    <img src={cert.image} alt={cert.title} />
                                    <div className="cert-card__overlay">
                                        🔍 View Full Size
                                    </div>
                                </div>
                            )}
                            <div className="cert-card__info">
                                <div className="cert-card__title">{cert.title}</div>
                                <div className="cert-card__issuer">{cert.issuer}</div>
                                <div className="cert-card__date">{cert.date}</div>
                                {cert.link && (
                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="cert-card__link"
                                    >
                                        Verify Certificate ↗
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {activeCert && (
                    <div className="modal-backdrop" onClick={() => setActiveCert(null)}>
                        <button
                            className="modal-close"
                            onClick={() => setActiveCert(null)}
                            aria-label="Close modal"
                        >
                            ×
                        </button>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <img src={activeCert.image} alt={activeCert.title} />
                            <div className="modal-caption">
                                <h3>{activeCert.title}</h3>
                                <p>{activeCert.issuer} &bull; {activeCert.date}</p>
                                {activeCert.link && (
                                    <a
                                        href={activeCert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Verify Certificate ↗
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Certifications;
