function Footer() {
    return (
        <section className="contact" data-section="11">
            <h2 className="contact__heading" data-animate="fade-up" data-delay="1">
                WORK WITH ME
            </h2>

            <div className="contact__name" data-animate="fade-up" data-delay="2">
                Harsha Vardhan Dasam
            </div>

            <div className="contact__details" data-animate="fade-up" data-delay="3">
                <div className="contact__item">
                    📍 Bengaluru, India
                </div>
                <div className="contact__item">
                    📞 +91 9886664139
                </div>
                <div className="contact__item">
                    ✉️{' '}
                    <a href="mailto:harshavardhan.dasam@gmail.com">
                        harshavardhan.dasam@gmail.com
                    </a>
                </div>
            </div>

            <div className="contact__links" data-animate="fade-up" data-delay="5">
                <a
                    href="mailto:harshavardhan.dasam@gmail.com"
                    className="contact__link"
                >
                    Email
                </a>
                <a
                    href="https://linkedin.com/in/harsha-vardhan-983561365"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__link"
                >
                    LinkedIn
                </a>
                <a
                    href="https://github.com/Harsha-1-code"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__link"
                >
                    GitHub
                </a>
            </div>

            <div className="contact__copyright">
                © 2025 Harsha Vardhan Dasam. All rights reserved.
            </div>
        </section>
    );
}

export default Footer;
