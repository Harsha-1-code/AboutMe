import { useState } from 'react';

function Header() {
    const [imgError, setImgError] = useState(false);

    return (
        <section className="hero" data-section="0">
            <h1 className="hero__name" data-animate="fade-down" data-delay="1">
                Harsha Vardhan Dasam
            </h1>

            <div className="hero__photo-wrapper" data-animate="scale-up" data-delay="3">
                {!imgError ? (
                    <img
                        className="hero__photo"
                        src="profile/DSC_8280copy.jpg"
                        alt="Harsha Vardhan Dasam"
                        onError={() => setImgError(true)}
                    />
                ) : (
                    <div className="hero__initials">HD</div>
                )}
            </div>

            <div className="hero__title" data-animate="fade-up" data-delay="5">
                PORTFOLIO
            </div>

            <p className="hero__subtitle" data-animate="fade-up" data-delay="7">
                Software Developer &amp; AI/ML Enthusiast
            </p>

            <div className="hero__scroll-indicator" data-animate="fade-up" data-delay="9">
                Scroll
            </div>
        </section>
    );
}

export default Header;
