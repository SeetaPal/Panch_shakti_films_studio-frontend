import { useNavigate } from "react-router-dom";
import { Header } from "../../HomePage/Header";
import { LeftFilter } from "./LeftFilter";
import ContactSection from "../../ContactSection";
import { Footer } from "../../HomePage/Footer";
export default function CastingAgency() {
    const navigate = useNavigate();
    const models = [
        {
            id: 1,
            name: "Miky Shah",
            age: 26,
            city: "Mumbai",
            img: "publicAssets/images/niya.webp",
            path: "/CastingAndModelling",
        },
        {
            id: 2,
            name: "Divya Ratnakar",
            age: 25,
            city: "Pune",
            img: "publicAssets/images/divya.webp",
        },
        {
            id: 3,
            name: "Niyesh George",
            age: 27,
            city: "Pune",
            img: "publicAssets/images/milaka.webp",
        },
        {
            id: 4,
            name: "Miky Shah",
            age: 26,
            city: "Mumbai",
            img: "publicAssets/images/niya.webp",
            path: "/CastingAndModelling",
        },
        {
            id: 5,
            name: "Divya Ratnakar",
            age: 25,
            city: "Pune",
            img: "publicAssets/images/divya.webp",
        },
        {
            id: 6,
            name: "Niyesh George",
            age: 27,
            city: "Pune",
            img: "publicAssets/images/milaka.webp",
        },
          {
            id: 7,
            name: "Miky Shah",
            age: 26,
            city: "Mumbai",
            img: "publicAssets/images/niya.webp",
            path: "/CastingAndModelling",
        },
        {
            id: 8,
            name: "Divya Ratnakar",
            age: 25,
            city: "Pune",
            img: "publicAssets/images/divya.webp",
        },
        {
            id: 9,
            name: "Niyesh George",
            age: 27,
            city: "Pune",
            img: "publicAssets/images/milaka.webp",
        },
    ];

    return (
        <div className="row bg_services2" onLoad={() => window.scrollTo(0, 0)}>
            <Header active="Services" />
            <div className="container casting-page padding_top_services text-light">
                {/* Hero Section */}
                <section className="hero mb-5 ">
                    <h6 className="golden_color pb-3">Our Service</h6>
                    <h2 className="fw-bold display-6 d-flex justify-content-between">
                        Casting & Modelling Agency Platform
                        <button className="btn btn-primary mt-3 rounded-pill">
                            Register For Free <i className="fas fa-arrow-right"></i>
                        </button>
                    </h2>
                </section>

                <div className="container-fluid">
                    <div className="row">
                        {/* Sidebar Filters */}
                        <div className="col-md-4 bg-black pt-4">
                            <LeftFilter />
                        </div>

                        {/* Models Grid */}
                        <div className=" col-md-8  ">
                            <div className="row ">
                                {models.map((model) => (
                                    <div
                                        className="col-md-4 pt-4"
                                        key={model.id}
                                        onClick={() => model.path && navigate(model.path)}
                                        style={{ cursor: "pointer" }}
                                    >
                                        <figure className="casting-figure ">
                                            <img
                                                src={model.img}
                                                className="card-img-top"
                                                alt={model.name}
                                            />
                                            <figcaption className="pt-3">
                                                <h6 className="card-title mb-1">
                                                    {model.name}, {model.age}
                                                </h6>
                                                <p className="card-text text-gray pb-2">{model.city}</p>
                                            </figcaption>
                                        </figure>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <ContactSection />
                <Footer />

            </div>
        </div>
    );
}

