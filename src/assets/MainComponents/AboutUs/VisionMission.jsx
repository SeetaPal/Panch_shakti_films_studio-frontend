import { useState } from "react";

export const VisionMission = () => {
    const [activeBtn, setActiveBtn] = useState(1);

    return (
        <div>
            {/* Buttons Row */}
            <div className="row p-5 text-center">
                <div className="col-12 col-lg-4">
                    <div>
                        <h2 onClick={() => setActiveBtn(1)}
                            className={`p-3 cursor-pointer ${activeBtn === 1 ? "active_vmv" : "text-gray"}`}>Our Vision</h2>
                    </div>
                </div>

                <div className="col-12 col-lg-4">
                    <div>
                        <h2
                            className={`p-3 cursor-pointer ${activeBtn === 2 ? "active_vmv" : "text-gray"}`}
                            onClick={() => setActiveBtn(2)}>Our Mission</h2>
                    </div>
                </div>

                <div className="col-12 col-lg-4">
                    <div>
                        <h2
                            className={`p-3 cursor-pointer ${activeBtn === 3 ? "active_vmv" : "text-gray"}`}
                            onClick={() => setActiveBtn(3)}>Our Value</h2>
                    </div>
                </div>
            </div>

            {/* Content Row */}
            <div className="row col-12 col-lg-10 mx-auto pb-5 mb-lg-5">
                {activeBtn === 1 && (
                    <div className="col-12 px-5">
                        <h5 className="text-white fw-lighter">
                            To become a leading creative force in the media industry by consistently delivering innovative, visually compelling, and emotionally engaging content. We strive to build lasting relationships with our clients by helping their brands stand out and thrive in a competitive digital world.
                        </h5>
                    </div>
                )}
                {activeBtn === 2 && (
                    <div className="col-12 px-5">
                        <h5 className="text-white fw-lighter">
                            To offer complete brand-building solutions through the perfect blend of creativity, strategy, and technical expertise. We produce memorable advertisements across various formats—video, photography, and digital media—along with professional film direction and casting services. Additionally, we provide celebrity management and launch support to ensure impactful brand promotions and sustainable growth.
                        </h5>
                    </div>
                )}
                {activeBtn === 3 && (
                    <div className="col-12 px-5">
                        <h5 className="text-white fw-lighter">
                            We are guided by a commitment to purposeful creativity, client-focused collaboration, and uncompromising quality. By combining artistic vision with strategic thinking, we create impactful visual experiences that align with brand goals. With integrity, innovation, and professionalism at our core, we build trusted partnerships and deliver lasting value.
                        </h5>
                    </div>
                )}
            </div>
        </div>
    );
};
