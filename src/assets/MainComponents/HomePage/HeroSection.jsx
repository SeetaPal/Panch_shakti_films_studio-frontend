import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
    const Navigate = useNavigate()

    return (
        <div className="hero-wrapper">
            <section id="hero">
                <div className="container">
                    <h1 className="heading_font fw-lighter"><span>Crafting</span> <span>Visual Stories</span>  <br /> <span>That Inspire...</span> </h1>

                    <button className="btn btn-primary  border_line "
                        onClick={() => Navigate('/Services')} >Explore Services <i className="fas fa-arrow-right"></i></button>

                </div>
            </section>
        </div>
    );
}