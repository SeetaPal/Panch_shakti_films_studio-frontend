import { useSearchParams } from "react-router-dom";
import { Pagination } from "../Pagination";
export const AdminPricingPlanContent = () => {
    const [searchparams] = useSearchParams();
    const ScreenName = searchparams.get("ScreenName"); // only from query string

    return (
        <div className="row mt-2 rounded pt-2" style={{ background: '#0B0C0E' }}>
            <h6 className="golden_color pt-2 pb-2 fw-bold">{ScreenName}</h6>

            <div className="col-12 pb-0 ">
                <div style={{ overflowX: 'scroll' }}>
                    <table className="table table-striped w-100">
                        <tr>
                            <th style={{ width: '70px' }}>Sr. No.</th>
                            <th>Owner Name </th>
                            <th>Method </th>
                            <th>Plan Type </th>
                            <th>Price </th>
                            <th>Started At  </th>
                            <th>Next Billing Date  </th>
                            <th style={{ width: '200px' }}>Action</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>abcd</td>
                            <td>Paypal</td>
                            <td>Single Model</td>
                            <td>700</td>
                            <td>16 Sep 2025
                                <hr className="p-0 m-0 text-white" />
                                06:22 PM</td>
                            <td>16 Oct 2025</td>
                            <td>
                                <button className="py-0 btn_height_table  text-white fw-lighter mx-1 bg-success border border-success mt-1"><i className="fa-solid fa-file"></i> PDF</button>
                                <button className="py-0 btn_height_table  text-white fw-lighter mx-1 bg-danger border border-danger my-1"><i className="fa-solid fa-trash fs-7 fs-7"></i> Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>abcd</td>
                            <td>Strip</td>
                            <td>Single Model</td>
                            <td>700</td>
                            <td>16 Sep 2025
                                <hr className="p-0 m-0 text-white" />
                                06:22 PM</td>
                            <td>16 Oct 2025</td>
                            <td>
                                <button className="py-0 btn_height_table  text-white fw-lighter mx-1 bg-success border border-success mt-1"><i className="fa-solid fa-file"></i> PDF</button>
                                <button className="py-0 btn_height_table  text-white fw-lighter mx-1 bg-danger border border-danger my-1"><i className="fa-solid fa-trash fs-7"></i> Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>abcd</td>
                            <td>Paypal</td>
                            <td>Single Model</td>
                            <td>700</td>
                            <td>16 Sep 2025
                                <hr className="p-0 m-0 text-white" />
                                06:22 PM</td>
                            <td>16 Oct 2025</td>
                            <td>
                                <button className="py-0 btn_height_table  text-white fw-lighter mx-1 bg-success border border-success mt-1"><i className="fa-solid fa-file"></i> PDF</button>
                                <button className="py-0 btn_height_table  text-white fw-lighter mx-1 bg-danger border border-danger my-1"><i className="fa-solid fa-trash fs-7"></i> Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>abcd</td>
                            <td>Paypal</td>
                            <td>Single Model</td>
                            <td>700</td>
                            <td>16 Sep 2025
                                <hr className="p-0 m-0 text-white" />
                                06:22 PM</td>
                            <td>16 Oct 2025</td>
                            <td>
                                <button className="py-0 btn_height_table  text-white fw-lighter mx-1 bg-success border border-success mt-1"><i className="fa-solid fa-file"></i> PDF</button>
                                <button className="py-0 btn_height_table  text-white fw-lighter mx-1 bg-danger border border-danger my-1"><i className="fa-solid fa-trash fs-7"></i> Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>abcd</td>
                            <td>Paypal</td>
                            <td>Single Model</td>
                            <td>700</td>
                            <td>16 Sep 2025
                                <hr className="p-0 m-0 text-white" />
                                06:22 PM</td>
                            <td>16 Oct 2025</td>
                            <td>
                                <button className="py-0 btn_height_table  text-white fw-lighter mx-1 bg-success border border-success mt-1"><i className="fa-solid fa-file"></i> PDF</button>
                                <button className="py-0 btn_height_table  text-white fw-lighter mx-1 bg-danger border border-danger my-1"><i className="fa-solid fa-trash fs-7"></i> Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>abcd</td>
                            <td>Paypal</td>
                            <td>Single Model</td>
                            <td>700</td>
                            <td>16 Sep 2025
                                <hr className="p-0 m-0 text-white" />
                                06:22 PM</td>
                            <td>16 Oct 2025</td>
                            <td>
                                <button className="py-0 btn_height_table  text-white fw-lighter mx-1 bg-success border border-success mt-1"><i className="fa-solid fa-file"></i> PDF</button>
                                <button className="py-0 btn_height_table  text-white fw-lighter mx-1 bg-danger border border-danger my-1"><i className="fa-solid fa-trash fs-7"></i> Delete</button>
                            </td>
                        </tr>

                        <tr>
                            <td>7</td>
                            <td>abcd</td>
                            <td>Paypal</td>
                            <td>Single Model</td>
                            <td>700</td>
                            <td>16 Sep 2025
                                <hr className="p-0 m-0 text-white" />
                                06:22 PM</td>
                            <td>16 Oct 2025</td>
                            <td>
                                <button className="py-0 btn_height_table  text-white fw-lighter mx-1 bg-success border border-success mt-1"><i className="fa-solid fa-"></i> PDF</button>
                                <button className="py-0 btn_height_table  text-white fw-lighter mx-1 bg-danger border border-danger my-1"><i className="fa-solid fa-trash fs-7"></i> Delete</button>
                            </td>
                        </tr>

                        <tr>
                            <td>8</td>
                            <td>abcd</td>
                            <td>Paypal</td>
                            <td>Single Model</td>
                            <td>700</td>
                            <td>16 Sep 2025
                                <hr className="p-0 m-0 text-white" />
                                06:22 PM</td>
                            <td>16 Oct 2025</td>
                            <td>
                                <button className="py-0 btn_height_table  text-white fw-lighter mx-1 bg-success border border-success mt-1"><i className="fa-solid fa-file"></i> PDF</button>
                                <button className="py-0 btn_height_table  text-white fw-lighter mx-1 bg-danger border border-danger my-1"><i className="fa-solid fa-trash fs-7"></i> Delete</button>
                            </td>
                        </tr>



                    </table>
                </div>
            </div>

            <Pagination />

        </div>

    );
};
