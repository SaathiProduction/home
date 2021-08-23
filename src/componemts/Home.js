
import React from 'react'
import { Link } from 'react-router-dom'
import ayush from './img/ayush.jpg'
import mohit from './img/mohit.jpg'
import logo from './img/main-logo.png'
export default function Home() {
    return (
        <div>



            <div className="jumbotron">
                <div className="container">
                    <h1 className="display-3">Welcome to <strong>Saathi Production!</strong></h1>
                    <p>This website is owned by two founding members of Saathi Production, <strong>Mohit Dahal</strong> and <strong>Ayush Adhikari</strong>.</p>
                    <p><a className="btn btn-success btn" href="#aboutUs" role="button">Know about us </a></p>
                </div>
            </div>

            <div class="px-4 py-5 my-5 text-center">
                <img src={logo} alt="" width="250" height="54" />
                <h1 class="display-5 fw-bold">About Us!</h1>
                <div class="col-lg-6 mx-auto">
                    <p style={{ fontSize: '1.55rem' }} class="lead mb-4">Saathi Production is an organization that builds websites according to the need of clients. It also makes courses related to computer science published in a Youtube channel named 'LearnWithUs'. We are currently available on Facebook and Instagram. All the links by which you can follow & contact us are given on the links page. </p>
                    <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">

                        <Link role="button" to="/links" id="btnnn">Links »</Link>
                    </div>
                </div>
            </div>
            <div class="b-example-divider"></div>
            <div id="aboutUs">
            <div className="row">
                <div className="col-md-6">
                    <div className="profileimg">
                        <img src={mohit} alt="Mohit" width="300" height="300" />
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="profiledesc">
                        <h1>Mohit Dahal</h1>
                        <p>One of the founding members of Saathi Production.</p>
                        <p>Currently a high school student living in Pokhara -1, Bagar.</p>
                        <p>Website manager at Saathi Production & video creator for LearnWithUs.</p>
                    </div>
                </div>
            </div>
            <hr />
            
                <div className="row">
                    <div className="col-md-6">
                        <div className="profiledesc">
                            <h1>Ayush Adhikari</h1>
                            <p>One of the founding members of Saathi Production.</p>
                            <p>Currently a high school student living in Pokhara -1, Bagar.</p>
                            <p>Video editor & manager of LearnWithUs.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="profileimg">
                            <img src={ayush} alt="Ayush" width="300" height="300" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="b-example-divider-last"></div>
        </div>
    )
}
