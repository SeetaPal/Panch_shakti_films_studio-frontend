export const Testimonials = () => {
    return (
        <div>
            <section id="reviews" className="section-padding pt-5 mt-lg-5">
                <div className="container pt-lg-5">
                    <h2 className="section-title fade-in-element fw-bold">What Clients Say</h2>
                    <div className="reviews-grid">
                        {/* Review Cards... */}
                        <div className="review-card fade-in-element">
                            <p>We hired Panch Shakti to create our new brand identity and a launch video. Their team's creativity is off the charts. They didn't just deliver a video; they told our story. The project was handled with immense professionalism and care.</p>
                            <div className="stars">
                                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                            </div>
                            <div className="client-info">
                                <img src="https://i.pravatar.cc/100?u=a" alt="Client 1" />
                                <div>
                                    <h4>Arnav Shah</h4>
                                    <span>Mumbai, India</span>
                                </div>
                            </div>
                        </div>
                        <div className="review-card fade-in-element">
                            <p>I'm an independent filmmaker and their post-production services are a lifesaver. The color grading and sound design on my short film were cinema-grade. They are true collaborators who respect the artist's vision while elevating it with professionalism and care.</p>
                            <div className="stars">
                                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                            </div>
                            <div className="client-info">
                                <img src="https://i.pravatar.cc/100?u=b" alt="Client 2" />
                                <div>
                                    <h4>Chetan Bhavsar</h4>
                                    <span>Pune, India</span>
                                </div>
                            </div>
                        </div>
                        <div className="review-card fade-in-element">
                            <p>The model portfolio shoot exceeded all my expectations. The photographers knew exactly how to direct the session to get the perfect shots. They handled everything from location scouting to final edits seamlessly, with total professionalism and care.</p>
                            <div className="stars">
                                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                            </div>
                            <div className="client-info">
                                <img src="https://i.pravatar.cc/100?u=c" alt="Client 3" />
                                <div>
                                    <h4>Isha Kashid</h4>
                                    <span>Delhi, India</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}