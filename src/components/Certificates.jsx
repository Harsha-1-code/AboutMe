import { useState, useEffect } from 'react';
import certificatesData from '../data/certificates';

function Certificates() {
    const [activeCert, setActiveCert] = useState(null);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                setActiveCert(null);
            }
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
        <section className="section fade-in">
            <h2 className="section-title">
                <span className="icon">📜</span> Hackathon Certificates
            </h2>
            <div className="certificates-grid">
                {certificatesData.map((cert, index) => (
                    <div className="certificate-card" key={index}>
                        <div className="certificate-header">
                            <span className="certificate-badge">🏅</span>
                            <div className="certificate-info">
                                <div className="certificate-title">{cert.title}</div>
                                <div className="certificate-issuer">{cert.issuer}</div>
                                <div className="certificate-date">{cert.date}</div>
                            </div>
                        </div>

                        {cert.image && (
                            <div 
                                className="certificate-preview" 
                                onClick={() => setActiveCert(cert)}
                                title="Click to view full certificate"
                            >
                                <img src={cert.image} alt={cert.title} />
                                <div className="certificate-preview-overlay">
                                    <span className="zoom-icon">🔍 View Full Size</span>
                                </div>
                            </div>
                        )}

                        {cert.link && (
                            <a
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="certificate-link"
                            >
                                Verify Certificate ↗
                            </a>
                        )}
                    </div>
                ))}
            </div>

            {activeCert && (
                <div className="cert-modal-backdrop" onClick={() => setActiveCert(null)}>
                    <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button 
                            className="cert-modal-close" 
                            onClick={() => setActiveCert(null)}
                            aria-label="Close modal"
                        >
                            &times;
                        </button>
                        <img src={activeCert.image} alt={activeCert.title} className="cert-modal-image" />
                        <div className="cert-modal-caption">
                            <h3>{activeCert.title}</h3>
                            <p>{activeCert.issuer} &bull; {activeCert.date}</p>
                            {activeCert.link && (
                                <a 
                                    href={activeCert.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="cert-modal-link"
                                >
                                    Verify Certificate ↗
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Certificates;

