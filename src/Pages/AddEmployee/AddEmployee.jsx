import React from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';
import './AddEmployee.css'
function AddEmployee() {
    return (
        <>
            <div className="container">
                <h4 className='heading my-4'>Add New Drug</h4>
                <form>
                    <div className="row">

                        <div className="col-md-6 col-12">
                            <div className='my-3'>
                                <label className='formHeading'>Executive Name</label>
                                <MDBInput id="form1" type="text" />
                            </div>
                            <div className='my-3'>
                                <label className='formHeading'>Phone Number</label>
                                <MDBInput id="form1" type="text" />
                            </div>
                            <div className='my-3'>
                                <label className='formHeading'>Place</label>
                                <MDBInput id="form1" type="text" />
                            </div>
                            <div className='my-3'>
                                <label className='formHeading'>Profession</label>
                                <MDBInput id="form1" type="text" />
                            </div>
                            <div className='my-3'>
                                <label className='formHeading'>Gender</label>
                                <MDBInput id="form1" type="text" />
                            </div>
                            <div className='my-3'>
                                <label className='formHeading'>Excutive ID</label>
                                <MDBInput id="form1" type="text" />
                            </div>

                        </div>
                        <div className="col-md-6 col-12">
                            <div className='my-3'>
                                <label className='formHeading' >Email ID</label>
                                <MDBInput id="form1" type="email" />
                            </div>
                            <div className='my-3'>
                                <label className='formHeading'>Age</label>
                                <MDBInput id="form1" type="number" />
                            </div>
                            <div className='my-3'>
                                <label className='formHeading' >Education</label>
                                <MDBInput id="form1" type="text" />
                            </div>
                            <div className='my-3'>
                                <label className='formHeading' >Skills</label>
                                <MDBInput id="form1" type="text" />
                            </div>
                            <div className='my-3'>
                                <label className='formHeading' >Status</label>
                                <MDBInput id="form1" type="text" />
                            </div>
                            <div className='my-3'>
                                <label className='formHeading' >Password</label>
                                <MDBInput id="form1" type="password" />
                            </div>

                        </div>

                    </div>
                    <div className='buttonContainer my-3'>
                        <div className=" d-grid  col-5  mx-auto">
                            <MDBBtn size='lg' color='secondary'>Cancel</MDBBtn>
                        </div>
                        <div className=" d-grid   col-5 mx-auto">
                            <MDBBtn size='lg'>Add</MDBBtn>
                        </div>

                    </div>


                </form>
            </div>

        </>
    )
}

export default AddEmployee