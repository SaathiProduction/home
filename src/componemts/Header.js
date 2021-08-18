import React from 'react'
import {

    Link
} from "react-router-dom";
export default function Header(props) {
    return (
        <div>
            <div className="my-nav">
                <input type="checkbox" id="my-nav-check" />
                <div className="my-nav-header">
                    <div className="my-nav-title">
                        Saathi Production
                    </div>
                </div>
                <div className="my-nav-btn">
                    <label htmlFor="my-nav-check">
                        <span className="my-sp" />
                        <span className="my-sp"/>
                        <span className="my-sp"/>
                    </label>
                </div>

                {(props.home) ?
                    <div className="my-nav-links">
                        <Link className="links my-active" to="/" >Home</Link>
                        <Link className="links" to="links">Links</Link>
                        <Link className="links" to="contact">Contact us</Link>
                    </div>
                    : (props.links) ? 
                    
                    <div className="my-nav-links">
                        <Link className="links" to="/" >Home</Link>
                        <Link className="links my-active" to="links">Links</Link>
                        <Link className="links" to="contact">Contact us</Link>
                    </div>
                        : (props.contact) ? 
                        <div className="my-nav-links">
                            <Link className="links" to="/" >Home</Link>
                            <Link className="links" to="links">Links</Link>
                            <Link className="links my-active" to="contact">Contact us</Link>
                        </div> 
                        : ""
                }
            </div>

        </div>
    )
}
