import React, { useState } from 'react'
import './EmployeeDetails.css'
import { Button } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import RemoveIcon from '@mui/icons-material/Remove';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
} from 'mdb-react-ui-kit';
import CurrencyRupeeTwoToneIcon from '@mui/icons-material/CurrencyRupeeTwoTone';
import { MDBInput } from 'mdb-react-ui-kit';
import ReactApexChart from 'react-apexcharts';


function EmployeeDetails() {

    const [chartData, setChartData] = useState({
        series: [44, 55, 67, 83],
        options: {
            chart: {
                height: 350,
                type: 'radialBar',
            },
            plotOptions: {
                radialBar: {
                    dataLabels: {
                        name: {
                            fontSize: '22px',
                        },
                        value: {
                            fontSize: '16px',
                        },
                        total: {
                            show: true,
                            label: 'Total',
                            formatter: function (w) {
                                return ;
                            },
                        },
                    },
                },
            },
            labels: ['Online', 'Talktime', 'Offline',],
        },
    });

    return (
        <>
            <div className="container  my-3">
                <Button variant="text" color='black'>
                    <ArrowBackIosNewIcon />   Back
                </Button>
                <div className="row my-3">
                    <div className="col-md-6 col-12  ">
                        <h4>Employee Details</h4>
                    </div>
                    <div className="col-md-6 col-12  removeBtn">
                        <Button variant="contained" color="error">
                            <RemoveIcon />   Remove Employee
                        </Button>
                    </div>
                </div>
                <div className="row row2">
                    <p className='heading1'>Personal Information</p>
                    <div className="col-md-3 col-12">
                        <p>Image Preview</p>
                        <img className='employeePic' src='https://th.bing.com/th/id/OIP.EN9JF9Q4hfValEUlOcOY8wHaKA?w=540&h=730&rs=1&pid=ImgDetMain' />
                    </div>
                    <div className="col-md-3 col-12">
                        <MDBCard>
                            <MDBCardBody className='cardBody'>

                                <div className='mx-3'><img className='cardImg' src='https://th.bing.com/th/id/OIP.NIx02QAF7_ncWacSsOO9qwHaHa?w=164&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7' /></div>
                                <div>
                                    <MDBCardTitle className='cardTitle'>Total Earnings</MDBCardTitle>
                                    <MDBCardText>
                                        <h4><CurrencyRupeeTwoToneIcon />120</h4>
                                    </MDBCardText>
                                </div>

                            </MDBCardBody>
                        </MDBCard>
                    </div>
                    <div className="col-md-3 col-12">
                        <MDBCard>
                            <MDBCardBody className='cardBody'>

                                <div className='mx-3'><img className='cardImg' src='https://st.depositphotos.com/1181187/1450/i/450/depositphotos_14503037-stock-photo-no-sign.jpg' /></div>
                                <div>
                                    <MDBCardTitle className='cardTitle'>off days</MDBCardTitle>
                                    <MDBCardText>
                                        <h4><CurrencyRupeeTwoToneIcon />2 Days</h4>
                                    </MDBCardText>
                                </div>

                            </MDBCardBody>
                        </MDBCard>
                    </div>
                    <div className="col-md-3 col-12">
                        <MDBCard className='card'>
                            <MDBCardBody className='cardBody'>

                                <div className='mx-3'><img className='cardImg' src='https://cdn1.iconfinder.com/data/icons/jetflat-multimedia-vol-4/90/0042_083_favorite_star_rate-1024.png' /></div>
                                <div>
                                    <MDBCardTitle className='cardTitle'>Total Rating</MDBCardTitle>
                                    <MDBCardText>
                                        <h4><CurrencyRupeeTwoToneIcon />4.2</h4>
                                    </MDBCardText>
                                </div>

                            </MDBCardBody>
                        </MDBCard>
                    </div>
                </div>
                <div className='row row3'>
                    <div className="col-md-4 col-12">
                        <div className='my-3'>
                            <label className='formHeading'>Full Name</label>
                            <MDBInput id="form1" type="text" />
                        </div>
                        <div className='my-3'>
                            <label className='formHeading'>Age</label>
                            <MDBInput id="form1" type="text" />
                        </div>
                        <div className='my-3'>
                            <label className='formHeading'>Education</label>
                            <MDBInput id="form1" type="text" />
                        </div>
                        <div className='my-3'>
                            <label className='formHeading'>Skills</label>
                            <MDBInput id="form1" type="text" />
                        </div>

                    </div>
                    <div className="col-md-4 col-12">
                        <div className='my-3'>
                            <label className='formHeading'>Phone Number</label>
                            <MDBInput id="form1" type="text" />
                        </div>
                        <div className='my-3'>
                            <label className='formHeading'>Place</label>
                            <MDBInput id="form1" type="text" />
                        </div>
                        <div className='my-3'>
                            <label className='formHeading'>Proffession</label>
                            <MDBInput id="form1" type="text" />
                        </div>
                        <div className='my-3'>
                            <label className='formHeading'>ID</label>
                            <MDBInput id="form1" type="text" />
                        </div>
                    </div>
                    <div className="col-md-4 col-12">
                        <div className='my-3'>
                            <label className='formHeading'>Email Address</label>
                            <MDBInput id="form1" type="text" />
                        </div>
                        <div className='my-3'>
                            <label className='formHeading'>Gender</label>
                            <MDBInput id="form1" type="text" />
                        </div>
                        <div className='my-3'>
                            <label className='formHeading'>Status</label>
                            <MDBInput id="form1" type="text" />
                        </div>
                        <div className='my-3'>
                            <label className='formHeading'>Password</label>
                            <MDBInput id="form1" type="text" />
                        </div>
                    </div>
                </div>
                <div className='col-md-4 col-12 my-4'>
                <MDBCard>
      <MDBCardBody>
        <MDBCardTitle>Todays Report</MDBCardTitle>
        <div>
                        <div id="chart">
                            <ReactApexChart
                                options={chartData.options}
                                series={chartData.series}
                                type="radialBar"
                                height={300}
                            />
                        </div>
                        <div id="html-dist"></div>
                    </div>

      </MDBCardBody>
    </MDBCard>


                </div>
            </div>
        </>
    )
}

export default EmployeeDetails