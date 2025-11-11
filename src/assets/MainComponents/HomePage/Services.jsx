import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export const Services = () => {
    const options = {
        loop: true,
        dot:false,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: true,
        lazyLoad: false,
        smartSpeed: 1000, // fixed too high speed
        responsive: {
            0: { items: 1 },
            576: { items: 2 },
            768: { items: 3 },
            992: { items: 6 }
        }
    };

    return (
        <div className="row pt-5 mt-lg-5">
            <section id="popular-services" className="section-padding">
                <div className="container">
                    <h2 className="section-title fade-in-element fw-bold">Popular Services</h2>

                    <div className="work-grid-container fade-in-element">
                        {/* ✅ FIX: work-item is now directly inside OwlCarousel */}
                        <OwlCarousel className="owl-theme " {...options}>
                            <div className="work-item">
                                <div className="work-item-inner ">
                                    <div className="work-title-box"><h4>Product Ad<br />Shoot</h4></div>
                                    <div className="work-image-wrapper">
                                        <img src="Assets/Images/Product.jpg" alt="Product Ad Shoot" />
                                    </div>
                                </div>
                            </div>
                            <div className="work-item">
                                <div className="work-item-inner">
                                    <div className="work-title-box"><h4>Casting & Modelling<br />Platform</h4></div>
                                    <div className="work-image-wrapper">
                                        <img src="Assets/Images/Casting & Modelling.jpg" alt="Casting & Modelling Platform" />
                                    </div>
                                </div>
                            </div>

                            <div className="work-item">
                                <div className="work-item-inner">
                                    <div className="work-title-box"><h4>Website Development</h4></div>
                                    <div className="work-image-wrapper">
                                        <img src="Assets/Images/web_dev.jpg" alt="Voice Over" />
                                    </div>
                                </div>
                            </div>

                            <div className="work-item">
                                <div className="work-item-inner">
                                    <div className="work-title-box"><h4>Model<br />Photoshoot</h4></div>
                                    <div className="work-image-wrapper">
                                        <img src="Assets/Images/Model Portfolio Shoot.jpg" alt="Model Photoshoot" />
                                    </div>
                                </div>
                            </div>

                            <div className="work-item">
                                <div className="work-item-inner">
                                    <div className="work-title-box"><h4>Voice Over</h4></div>
                                    <div className="work-image-wrapper">
                                        <img src="Assets/Images/Voice.jpg" alt="Voice Over" />
                                    </div>
                                </div>
                            </div>

                            <div className="work-item">
                                <div className="work-item-inner">
                                    <div className="work-title-box"><h4>Music<br />Albums Shoot</h4></div>
                                    <div className="work-image-wrapper">
                                        <img src="Assets/Images/MusicAlbums.jpg" alt="Music Albums Shoot" />
                                    </div>
                                </div>
                            </div>

                            <div className="work-item">
                                <div className="work-item-inner">
                                    <div className="work-title-box"><h4>Social Media &<br />Digital Marketing</h4></div>
                                    <div className="work-image-wrapper">
                                        <img src="Assets/Images/SocialMedia.jpg" alt="Social Media & Digital Marketing" />
                                    </div>
                                </div>
                            </div>

                            {/* Add more items if needed */}
                        </OwlCarousel>
                    </div>

                    <div className="view-all-btn fade-in-element">
                        <a href="/our-expertise" className="btn btn-outline">View All Services</a>
                    </div>
                </div>
            </section>
        </div>
    );
};
