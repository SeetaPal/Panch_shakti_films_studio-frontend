import { useSearchParams } from "react-router-dom";
import { Pagination } from "../Pagination";

export const LoginContent = () => {
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
                            <th>Username </th>
                            <th>Password </th>
                            <th style={{ width: '200px' }}>Action</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>+91 5656565665</td>
                            <td>abc@gmail.com</td> <td>
                                <button className="py-0 btn_height_table  text-white fw-lighter mx-1 bg-success border border-success mt-1"><i className="fa-solid fa-pen-to-square"></i> Edit</button>
                                <button className="py-0 btn_height_table  text-white fw-lighter mx-1 bg-danger border border-danger my-1"><i className="fa-solid fa-trash fs-7 fs-7"></i> Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>+91 5656565665</td>
                            <td>abc@gmail.com</td>
                            <td>
                                <button className="py-0 btn_height_table  text-white fw-lighter mx-1 bg-success border border-success mt-1"><i className="fa-solid fa-pen-to-square"></i> Edit</button>
                                <button className="py-0 btn_height_table  text-white fw-lighter mx-1 bg-danger border border-danger my-1"><i className="fa-solid fa-trash fs-7"></i> Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>+91 5656565665</td>
                            <td>abc@gmail.com</td>
                            <td>
                                <button className="py-0 btn_height_table  text-white fw-lighter mx-1 bg-success border border-success mt-1"><i className="fa-solid fa-pen-to-square"></i> Edit</button>
                                <button className="py-0 btn_height_table  text-white fw-lighter mx-1 bg-danger border border-danger my-1"><i className="fa-solid fa-trash fs-7"></i> Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>+91 5656565665</td>
                            <td>abc@gmail.com</td>
                            <td>
                                <button className="py-0 btn_height_table  text-white fw-lighter mx-1 bg-success border border-success mt-1"><i className="fa-solid fa-pen-to-square"></i> Edit</button>
                                <button className="py-0 btn_height_table  text-white fw-lighter mx-1 bg-danger border border-danger my-1"><i className="fa-solid fa-trash fs-7"></i> Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>+91 5656565665</td>
                            <td>abc@gmail.com</td>
                            <td>
                                <button className="py-0 btn_height_table  text-white fw-lighter mx-1 bg-success border border-success mt-1"><i className="fa-solid fa-pen-to-square"></i> Edit</button>
                                <button className="py-0 btn_height_table  text-white fw-lighter mx-1 bg-danger border border-danger my-1"><i className="fa-solid fa-trash fs-7"></i> Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>+91 5656565665</td>
                            <td>abc@gmail.com</td>
                            <td>
                                <button className="py-0 btn_height_table  text-white fw-lighter mx-1 bg-success border border-success mt-1"><i className="fa-solid fa-pen-to-square"></i> Edit</button>
                                <button className="py-0 btn_height_table  text-white fw-lighter mx-1 bg-danger border border-danger my-1"><i className="fa-solid fa-trash fs-7"></i> Delete</button>
                            </td>
                        </tr>

                        <tr>
                            <td>7</td>
                            <td>+91 5656565665</td>
                            <td>abc@gmail.com</td>
                            <td>
                                <button className="py-0 btn_height_table  text-white fw-lighter mx-1 bg-success border border-success mt-1"><i className="fa-solid fa-pen-to-square"></i> Edit</button>
                                <button className="py-0 btn_height_table  text-white fw-lighter mx-1 bg-danger border border-danger my-1"><i className="fa-solid fa-trash fs-7"></i> Delete</button>
                            </td>
                        </tr>

                        <tr>
                            <td>8</td>
                            <td>+91 5656565665</td>
                            <td>abc@gmail.com</td>
                            <td>
                                <button className="py-0 btn_height_table  text-white fw-lighter mx-1 bg-success border border-success mt-1"><i className="fa-solid fa-pen-to-square"></i> Edit</button>
                                <button className="py-0 btn_height_table  text-white fw-lighter mx-1 bg-danger border border-danger my-1"><i className="fa-solid fa-trash fs-7"></i> Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>+91 5656565665</td>
                            <td>abc@gmail.com</td>
                            <td>
                                <button className="py-0 btn_height_table  text-white fw-lighter mx-1 bg-success border border-success mt-1"><i className="fa-solid fa-pen-to-square"></i> Edit</button>
                                <button className="py-0 btn_height_table  text-white fw-lighter mx-1 bg-danger border border-danger my-1"><i className="fa-solid fa-trash fs-7"></i> Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>+91 5656565665</td>
                            <td>abc@gmail.com</td>
                            <td>
                                <button className="py-0 btn_height_table  text-white fw-lighter mx-1 bg-success border border-success mt-1"><i className="fa-solid fa-pen-to-square"></i> Edit</button>
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
