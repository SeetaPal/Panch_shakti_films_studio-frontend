export const RegisterPopup = ({ cancelbtn, heading }) => {
    return (

        <div className="row">
            <div className="col-12">
                <div className="modal fade show" style={{ display: "flex", alignItems: 'center', backgroundColor: "#00000090" }}>
                    <div className="modal-dialog dialog_width " role="document" >
                        <div className="modal-content p-3">
                            <div className="modal-header pt-0">

                                <h5 className="card-title " style={{ paddingLeft: '10px' }} id="exampleModalLongTitle">{heading}</h5>
                                <button onClick={() => cancelbtn()} type="button" className="close bg-danger border-none px-2 rounded" style={{ marginLeft: "auto" }}>
                                    <span aria-hidden="true" className="bg-danger border-none text-white">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body mx-0">

                                <div className="row">

                                    <div className="my-2 col-12">
                                        <p className="text-center">Kindly click on the registration verification link send on your registered e-mail address.</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}