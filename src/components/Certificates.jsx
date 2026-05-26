import certificatesData from '../data/certificates';

function Certificates() {
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
                            <div className="certificate-preview" style={{ marginTop: '12px', overflow: 'hidden', borderRadius: '8px' }}>
                                <img src={cert.image} alt={cert.title} style={{ width: '100%', display: 'block', borderRadius: '8px' }} />
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
        </section>
    );
}

export default Certificates;
