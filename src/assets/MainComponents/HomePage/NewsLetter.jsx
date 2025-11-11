export const NewsLetter = () => {
    return (
        <div className="p-lg-5 my-lg-5">
            <section id="newsletter" className="section-padding p-lg-5">
                <span className="bg-text">Newsletter</span>
                <div className="container pt-3">
                    <div className="newsletter-content fade-in-element">
                        <form id="newsletter-form " className="row">
                            <div className="newsletter-container d-flex justify-content-between">
                                <input type="email" placeholder="Enter your Email Address" className="email-input" />
                                <button className="subscribe-button" style={{background:"#f0c420"}}><i className="fas fa-paper-plane" ></i> Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}