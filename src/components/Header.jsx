import { useState } from 'react';

function Header() {
    const [imgError, setImgError] = useState(false);

    return (
        <header className="hero fade-in">
            <div className="avatar-wrapper">
                {!imgError ? (
                    <img
                        className="avatar"
                        src="profile/DSC_8280copy.jpg"
                        alt="Harsha Vardhan Dasam"
                        onError={() => setImgError(true)}
                    />
                ) : (
                    <div className="avatar-initials">HD</div>
                )}
                <span className="status-dot"></span>
            </div>
            <h1 className="hero-name">Harsha Vardhan Dasam</h1>
            <p className="hero-tagline">Software Developer • AI/ML Enthusiast</p>

            <div className="hero-meta">
                <span className="meta-item">📍 Bengaluru, India</span>
                <span className="meta-item">📞 +91 9886664139</span>
                <span className="meta-item">
                    ✉️{' '}
                    <a href="mailto:harshavardhan.dasam@gmail.com">
                        harshavardhan.dasam@gmail.com
                    </a>
                </span>
                <span className="meta-item">
                    🔗{' '}
                    <a
                        href="https://linkedin.com/in/harsha-vardhan-983561365"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>
                </span>
            </div>
        </header>
    );
}

export default Header;
