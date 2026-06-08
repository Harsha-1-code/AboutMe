function Quote() {
    return (
        <section className="quote" data-section="5">
            <div className="quote__text">
                <span data-animate="fade-up" data-delay="1" style={{ display: 'block' }}>
                    I WAS
                </span>
                <span data-animate="fade-up" data-delay="3" style={{ display: 'block' }}>
                    <em>BUILT</em>
                </span>
                <span data-animate="fade-up" data-delay="5" style={{ display: 'block' }}>
                    TO BUILD
                </span>
            </div>
        </section>
    );
}

export default Quote;
