import { useEffect, useRef, useState, useCallback } from 'react';
import Header from './components/Header';
import Summary from './components/Summary';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Quote from './components/Quote';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Certificates from './components/Certificates';
import Certifications from './components/Certifications';
import Interests from './components/Interests';
import Footer from './components/Footer';

function App() {
    const containerRef = useRef(null);
    const [activeSection, setActiveSection] = useState(0);

    // Intersection Observer for scroll-triggered animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                    }
                });
            },
            {
                root: containerRef.current,
                threshold: 0.15,
                rootMargin: '0px 0px -50px 0px',
            }
        );

        // Observe all elements with data-animate attribute
        const animatedElements = containerRef.current?.querySelectorAll('[data-animate]');
        animatedElements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    // Track active section for nav dots
    useEffect(() => {
        const sections = containerRef.current?.querySelectorAll('[data-section]');
        if (!sections) return;

        const sectionObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.getAttribute('data-section'), 10);
                        setActiveSection(index);
                    }
                });
            },
            {
                root: containerRef.current,
                threshold: 0.5,
            }
        );

        sections.forEach((section) => sectionObserver.observe(section));
        return () => sectionObserver.disconnect();
    }, []);

    const scrollToSection = useCallback((index) => {
        const section = containerRef.current?.querySelector(`[data-section="${index}"]`);
        section?.scrollIntoView({ behavior: 'smooth' });
    }, []);

    const sectionCount = 12;
    const darkSections = [0, 11]; // hero and contact are dark

    return (
        <div className="app-container" ref={containerRef}>
            {/* Navigation Dots */}
            <nav className="nav-dots">
                {Array.from({ length: sectionCount }, (_, i) => (
                    <button
                        key={i}
                        className={`nav-dot ${activeSection === i ? 'nav-dot--active' : ''} ${
                            !darkSections.includes(activeSection) ? 'nav-dot--light' : ''
                        }`}
                        onClick={() => scrollToSection(i)}
                        aria-label={`Go to section ${i + 1}`}
                    />
                ))}
            </nav>

            <Header />
            <Summary />
            <Experience />
            <Skills />
            <Projects />
            <Quote />
            <Education />
            <Achievements />
            <Certifications />
            <Certificates />
            <Interests />
            <Footer />
        </div>
    );
}

export default App;
