
import React from 'react'
import { Link } from 'react-router-dom'
import ayush from './img/ayush.jpg'
import mohit from './img/mohit.jpg'
export default function Home() {
    return (
        <div>
            <div className="jumbotron">
                <div className="container">
                    <h1 className="display-3">Welcome to <strong>Saathi Production!</strong></h1>
                    <p>This website is owned by two founding members of Saathi Production, <strong>Mohit Dahal</strong> and <strong>Ayush Adhikari</strong>.</p>
                    <p><Link className="btn btn-success btn" to="/links" role="button">Learn more »</Link></p>
                </div>
            </div>


            <div className="row">
                <div  className="col-md-6">
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
    )
}
