import { useSearchParams } from "react-router-dom";

export const AddNewPlan = () => {

    const [searchparams] = useSearchParams();
    const ScreenName = searchparams.get("ScreenName"); // only from query string

    return (
        <div className="row mt-2 rounded pt-2" style={{ background: '#0B0C0E' }}>
            <div className="col-12 col-lg-6">
                <h6 className="golden_color pt-2 pb-2 fw-bold">{ScreenName}</h6>
            </div>
            <div className="col-12 col-lg-6">
             <button className="btn golden_color btn-outline-warning float-end px-3 py-1">+ Add Plan</button>
                          
            </div>

            <div className="col-12 pb-0 ">
                <div style={{ overflowX: 'scroll' }}>
                    <table className="table table-striped w-100">
                        <tr>
                            <th className="p-4">Sr. No.</th>
                            <th>Name </th>
                            <th>Plan Type </th>
                            <th>Price </th>
                            <th>Period </th>
                            <th>Model Limits  </th>
                            <th>Ordering</th>
                            <th style={{ width: '200px' }}>Action</th>
                        </tr>
                        <tr>
                            <td className="p-4">1</td>
                            <td>Silver Plan</td>
                            <td>Single Model</td>
                            <td>700</td>
                            <td>Month</td>
                            <td>Unlimited</td>
                            <td>Enabled</td>

                            <td>
                                <button className="py-0 btn_height_table  text-white fw-lighter mx-1 bg-success border border-success mt-1"><i className="fa-solid fa-edit"></i> Edit</button>
                                <button className="py-0 btn_height_table  text-white fw-lighter mx-1 bg-danger border border-danger my-1"><i className="fa-solid fa-trash fs-7 fs-7"></i> Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td className="p-4">2</td>
                            <td>Golden Plan</td>
                            <td>5 Models</td>
                            <td>1000</td>
                            <td>Month</td>
                            <td>Unlimited</td>
                            <td>Enabled</td>

                            <td>
                                <button className="py-0 btn_height_table  text-white fw-lighter mx-1 bg-success border border-success mt-1"><i className="fa-solid fa-edit"></i> Edit</button>
                                <button className="py-0 btn_height_table  text-white fw-lighter mx-1 bg-danger border border-danger my-1"><i className="fa-solid fa-trash fs-7"></i> Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td className="p-4">3</td>
                            <td>Platinum</td>
                            <td>10 Models</td>
                            <td>2000 </td>
                            <td>Month</td>
                            <td>Unlimited</td>
                            <td>Enabled</td>
                            <td>
                                <button className="py-0 btn_height_table  text-white fw-lighter mx-1 bg-success border border-success mt-1"><i className="fa-solid fa-edit"></i> Edit</button>
                                <button className="py-0 btn_height_table  text-white fw-lighter mx-1 bg-danger border border-danger my-1"><i className="fa-solid fa-trash fs-7"></i> Delete</button>
                            </td>
                        </tr>


                    </table>
                </div>
            </div>


        </div>

    );
};
