import { Link } from "react-router-dom";


export const AllServices = () => {
    const cardData = [
        {
            id: 1,
            image: "publicAssets/images/castingAgency.webp",
            title: "Casting Agency / Director  Producer ",
            description:
                "A high-quality, vibrant image of the product showcasing its key features. A high-quality, vibrant image of the product showcasing its key features.",
            ReadMoreBtn: "Read More",
            path: "/CastingAgency"
            // path: "/CastingAndModelling"

        },
        {
            id: 5,
            image: "publicAssets/images/celebMgmt.webp",
            title: "Model & Actor",
            description:
                "A high-quality, vibrant image of the product showcasing its key features. A high-quality, vibrant image of the product showcasing its key features.",
            ReadMoreBtn: "Read More",
        },
        {
            id: 2,
            image: "publicAssets/images/productAdShoots.webp",
            title: "Product Ad Shoot",
            description:
                "A high-quality, vibrant image of the product showcasing its key features. A high-quality, vibrant image of the product showcasing its key features.",
            ReadMoreBtn: "Read More",
        },
        {
            id: 3,
            image: "publicAssets/images/websiteDevelopment.webp",
            title: "Website Development",
            description:
                "A high-quality, vibrant image of the product showcasing its key features. A high-quality, vibrant image of the product showcasing its key features.",
            ReadMoreBtn: "Read More",
        },
        {
            id: 4,
            image: "publicAssets/images/modelPhotoshoot.webp",
            title: "Model Photoshoot",
            description:
                "A high-quality, vibrant image of the product showcasing its key features. A high-quality, vibrant image of the product showcasing its key features.",
            ReadMoreBtn: "Read More",
        },

        {
            id: 6,
            image: "publicAssets/images/musicVideoAlbums.webp",
            title: "Music Video Albums",
            description:
                "A high-quality, vibrant image of the product showcasing its key features. A high-quality, vibrant image of the product showcasing its key features.",
            ReadMoreBtn: "Read More",
        },

        {
            id: 7,
            image: "publicAssets/images/aiMarketing.webp",
            title: "AI Based Digital Marketing",
            description:
                "A high-quality, vibrant image of the product showcasing its key features. A high-quality, vibrant image of the product showcasing its key features.",
            ReadMoreBtn: "Read More",
        },
        {
            id: 8,
            image: "publicAssets/images/celebMgmt.webp",
            title: "Celebrity Management",
            description:
                "A high-quality, vibrant image of the product showcasing its key features. A high-quality, vibrant image of the product showcasing its key features.",
            ReadMoreBtn: "Read More",
        },
        // {
        //     id: 9,
        //     image: "publicAssets/images/celebMgmt.webp",
        //     title: "Product Ad Shoot",
        //     description:
        //         "A high-quality, vibrant image of the product showcasing its key features. A high-quality, vibrant image of the product showcasing its key features.",
        //     ReadMoreBtn: "Read More",
        // },
        {
            id: 9,
            image: "publicAssets/images/graphicsDesigning.webp",
            title: "3D Graphics Designing",
            description:
                "A high-quality, vibrant image of the product showcasing its key features. A high-quality, vibrant image of the product showcasing its key features.",
            ReadMoreBtn: "Read More",
        },
        {
            id: 10,
            image: "publicAssets/images/portfolio.webp",
            title: "Model Portfolio Shoot",
            description:
                "A high-quality, vibrant image of the product showcasing its key features. A high-quality, vibrant image of the product showcasing its key features.",
            ReadMoreBtn: "Read More",
        },
        {
            id: 11,
            image: "publicAssets/images/corporateBranding.webp",
            title: "Corporate Branding",
            description:
                "A high-quality, vibrant image of the product showcasing its key features. A high-quality, vibrant image of the product showcasing its key features.",
            ReadMoreBtn: "Read More",
        },
        {
            id: 12,
            image: "publicAssets/images/videoAdShoot.webp",
            title: "Video Ad Shoot",
            description:
                "A high-quality, vibrant image of the product showcasing its key features. A high-quality, vibrant image of the product showcasing its key features.",
            ReadMoreBtn: "Read More",
        },

    ];

    return (

        <div>

            <div className="text-center container padding_top_services">
                <h1 className="heading_font Services_main display-5 fw-lighter">Services</h1>
                <hr className="gradient-line mb-5" />

                <div className="row justify-content-center">
                    {cardData.map((item) => (
                        <div
                            className="col-12 col-sm-6 col-lg-4  mb-4 p-3"
                            key={item.id}
                        >
                            <div className="card  overflow-hidden " id="">

                                <div className="card-img image-ratio">
                                    <div className="ratio-inner p-3">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="img-fluid"
                                        />
                                    </div>
                                </div>

                                <div className="card-content p-3">
                                    <div className="content">
                                        <h2 className="title heading_all" style={{ textAlign: "left" }}>{item.title}</h2>
                                        <p className="description px-3" style={{ textAlign: "justify" }}>{item.description}</p>
                                        <Link to={item.path} className="actives pt-2 ps-3 d-block" style={{ textAlign: "justify" }}>
                                            {item.ReadMoreBtn} <i className="fas fa-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>




            </div>

        </div>
    );
};
