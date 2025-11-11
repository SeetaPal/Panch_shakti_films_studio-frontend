import { useState } from "react";

export const DiscriptionInfoReview = () => {
    const [activeBtn, setActiveBtn] = useState(1);

    return (
        <div>
            {/* Buttons Row */}
            <div className="container">
                <div className="row text-center py-5 px-0 ">
                    <div className="col-12 col-lg-4 ">
                        <div>
                            <h5 onClick={() => setActiveBtn(1)}
                                className={`px-5 py-2 cursor-pointer ${activeBtn === 1 ? "active_description" : "text-gray"}`}>Description</h5>
                        </div>
                    </div>

                    <div className="col-12 col-lg-4 ">
                        <div>
                            <h5
                                className={`px-5 py-2 cursor-pointer ${activeBtn === 2 ? "active_description" : "text-gray"}`}
                                onClick={() => setActiveBtn(2)}>Additional information</h5>
                        </div>
                    </div>

                    <div className="col-12 col-lg-4 ">
                        <div>
                            <h5
                                className={`px-5 py-2 cursor-pointer ${activeBtn === 3 ? "active_description" : "text-gray"}`}
                                onClick={() => setActiveBtn(3)}>Reviews (0)</h5>
                        </div>
                    </div>
                </div>

                {/* Content Row */}
                <div className="row col-12 mx-auto pb-5 mb-lg-5">
                    {activeBtn === 1 && (
                        <div className="col-12 px-3 px-lg-0">
                            <h6 className="text-white fw-lighter" style={{ textAlign: 'justify' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut elit felis. Mauris vehicula ac massa ac viverra. Vivamus laoreet eget ipsum id
                                ultrices. Curabitur rhoncus justo neque, ac laoreet est fringilla quis. Morbi id erat quis ligula suscipit gravida vel nec justo. Vestibulum condimentum
                                placerat nulla a commodo. Vivamus pharetra dolor nec neque egestas pharetra. Suspendisse mattis facilisis mauris. Sed gravida et est at mattis. Proin a
                                dignissim diam. Ut condimentum nec elit sit amet tristique. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                Pellentesque a blandit enim, id hendrerit risus. Aliquam erat volutpat.   </h6>
                            <h6 className="text-white fw-lighter pt-3" style={{ textAlign: 'justify' }}>
                                Suspendisse mattis facilisis mauris. Sed gravida et est at mattis. Proin a
                                dignissim diam. Ut condimentum nec elit sit amet tristique. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                Pellentesque a blandit enim, id hendrerit risus. Aliquam erat volutpat.   </h6>
                        </div>
                    )}
                    {activeBtn === 2 && (
                        <div className="col-12 px-3 px-lg-0">
                            <h6 className="text-white fw-lighter" style={{ textAlign: 'justify' }}>
                                Vivamus pharetra dolor nec neque egestas pharetra. Suspendisse mattis facilisis mauris. Sed gravida et est at mattis. Proin a
                                dignissim diam. Ut condimentum nec elit sit amet tristique. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                Pellentesque a blandit enim, id hendrerit risus. Aliquam erat volutpat.   </h6>
                            <h6 className="text-white fw-lighter pt-3" style={{ textAlign: 'justify' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut elit felis. Mauris vehicula ac massa ac viverra. Vivamus laoreet eget ipsum id
                                ultrices. Curabitur rhoncus justo neque, ac laoreet est fringilla quis. Morbi id erat quis ligula suscipit gravida vel nec justo. Vestibulum condimentum
                                placerat nulla a commodo.  Suspendisse mattis facilisis mauris. Sed gravida et est at mattis. Proin a
                                dignissim diam. Ut condimentum nec elit sit amet tristique. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                Pellentesque a blandit enim, id hendrerit risus. Aliquam erat volutpat.   </h6>
                        </div>
                    )}
                    {activeBtn === 3 && (
                        <div className="col-12 px-3 px-lg-0">
                            <h6 className="text-white fw-lighter" style={{ textAlign: 'justify' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut elit felis. Mauris vehicula ac massa ac viverra. Vivamus laoreet eget ipsum id
                                ultrices. Curabitur rhoncus justo neque, ac laoreet est fringilla quis. Morbi id erat quis ligula suscipit gravida vel nec justo. Vestibulum condimentum
                                placerat nulla a commodo. Vivamus pharetra dolor nec neque egestas pharetra. Suspendisse mattis facilisis mauris. Sed gravida et est at mattis. Proin a
                                dignissim diam. Ut condimentum nec elit sit amet tristique. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                Pellentesque a blandit enim, id hendrerit risus. Aliquam erat volutpat.   </h6>
                            <h6 className="text-white fw-lighter pt-3" style={{ textAlign: 'justify' }}>
                                Suspendisse mattis facilisis mauris. Sed gravida et est at mattis. Proin a
                                dignissim diam. Ut condimentum nec elit sit amet tristique. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                Pellentesque a blandit enim, id hendrerit risus. Aliquam erat volutpat.   </h6>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
