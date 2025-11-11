import { useSearchParams } from "react-router-dom";
import { Pagination } from "../Pagination";

export const AdminContent = () => {
    const [searchparams] = useSearchParams();
    const ScreenName = searchparams.get("ScreenName"); // only from query string

    return (
        <div className="row mt-2 rounded pt-2" style={{ background: '#0B0C0E' }}>
            <h6 className="golden_color pt-2 pb-2 fw-bold">{ScreenName}</h6>

            <div className="col-12 pb-0 ">
                <div style={{ overflowX: 'scroll' }}>
                    <table className="table table-striped w-100 mb-1">
                        <tr>
                            <th>Sr. No.</th>
                            <th>First Name</th>
                            <th>Middle Name</th>
                            <th>Last Name</th>
                            <th>Phone Number </th>
                            <th>E-mail </th>
                            <th>Gender </th>
                            <th>Username </th>
                            <th>Password </th>
                            <th>Confirm Password</th>
                            <th>Website Link</th>
                            <th style={{ width: '200px' }}> Reason to Register</th>
                            <th>Action</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Smith</td>
                            <td>Joni</td>
                            <td>JOhn</td>
                            <td>+91 5656565665</td>
                            <td>abc@gmail.com</td>
                            <td>Male</td>
                            <td>Smith</td>
                            <td>Smith@123</td>
                            <td>Smith@123</td>
                            <td>abcb</td>
                            <td>1 <sup className="bg-transparent  text-white fw-lighter px-0">st</sup>  (Casting)</td>
                            <td>
                                <button className="py-0 btn_height_table  text-white fw-lighter bg-success border border-success mt-1"><i className="fa-solid fa-pen-to-square"></i> Edit</button>
                                <button className="py-0 btn_height_table  text-white fw-lighter bg-danger border border-danger my-1"><i className="fa-solid fa-trash fs-7 fs-7"></i> Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Smith</td>
                            <td>Joni</td>
                            <td>JOhn</td>
                            <td>+91 5656565665</td>
                            <td>abc@gmail.com</td>
                            <td>Male</td>
                            <td>Smith</td>
                            <td>Smith@123</td>
                            <td>Smith@123</td>
                            <td>abcb</td>
                            <td>2 <sup className="bg-transparent  text-white fw-lighter px-0">nd</sup> (Model) </td>
                            <td>
                                <button className="py-0 btn_height_table  text-white fw-lighter bg-success border border-success mt-1"><i className="fa-solid fa-pen-to-square"></i> Edit</button>
                                <button className="py-0 btn_height_table  text-white fw-lighter bg-danger border border-danger my-1"><i className="fa-solid fa-trash fs-7"></i> Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Smith</td>
                            <td>Joni</td>
                            <td>JOhn</td>
                            <td>+91 5656565665</td>
                            <td>abc@gmail.com</td>
                            <td>Male</td>
                            <td>Smith</td>
                            <td>Smith@123</td>
                            <td>Smith@123</td>
                            <td>abcb</td>
                            <td>3 <sup className="bg-transparent  text-white fw-lighter px-0">rd</sup> (Client)</td>
                            <td>
                                <button className="py-0 btn_height_table  text-white fw-lighter bg-success border border-success mt-1"><i className="fa-solid fa-pen-to-square"></i> Edit</button>
                                <button className="py-0 btn_height_table  text-white fw-lighter bg-danger border border-danger my-1"><i className="fa-solid fa-trash fs-7"></i> Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Smith</td>
                            <td>Joni</td>
                            <td>JOhn</td>
                            <td>+91 5656565665</td>
                            <td>abc@gmail.com</td>
                            <td>Male</td>
                            <td>Smith</td>
                            <td>Smith@123</td>
                            <td>Smith@123</td>
                            <td>abcb</td>
                            <td>3 <sup className="bg-transparent  text-white fw-lighter px-0">rd</sup> (Client)</td>
                            <td>
                                <button className="py-0 btn_height_table  text-white fw-lighter bg-success border border-success mt-1"><i className="fa-solid fa-pen-to-square"></i> Edit</button>
                                <button className="py-0 btn_height_table  text-white fw-lighter bg-danger border border-danger my-1"><i className="fa-solid fa-trash fs-7"></i> Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Smith</td>
                            <td>Joni</td>
                            <td>JOhn</td>
                            <td>+91 5656565665</td>
                            <td>abc@gmail.com</td>
                            <td>Male</td>
                            <td>Smith</td>
                            <td>Smith@123</td>
                            <td>Smith@123</td>
                            <td>abcb</td>
                            <td>3 <sup className="bg-transparent  text-white fw-lighter px-0">rd</sup> (Client)</td>
                            <td>
                                <button className="py-0 btn_height_table  text-white fw-lighter bg-success border border-success mt-1"><i className="fa-solid fa-pen-to-square"></i> Edit</button>
                                <button className="py-0 btn_height_table  text-white fw-lighter bg-danger border border-danger my-1"><i className="fa-solid fa-trash fs-7"></i> Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Smith</td>
                            <td>Joni</td>
                            <td>JOhn</td>
                            <td>+91 5656565665</td>
                            <td>abc@gmail.com</td>
                            <td>Male</td>
                            <td>Smith</td>
                            <td>Smith@123</td>
                            <td>Smith@123</td>
                            <td>abcb</td>
                            <td>3 <sup className="bg-transparent  text-white fw-lighter px-0">rd</sup> (Client)</td>
                            <td>
                                <button className="py-0 btn_height_table  text-white fw-lighter bg-success border border-success mt-1"><i className="fa-solid fa-pen-to-square"></i> Edit</button>
                                <button className="py-0 btn_height_table  text-white fw-lighter bg-danger border border-danger my-1"><i className="fa-solid fa-trash fs-7"></i> Delete</button>
                            </td>
                        </tr>


                    </table>
                </div>
            </div>

            <Pagination />

        </div>

    );
};
