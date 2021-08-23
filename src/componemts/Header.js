import React from 'react'

import Van from './img/van.png'
import {

    Link
} from "react-router-dom";
export default function Header(props) {
    return (
        <div>
            <div className="my-nav">
                <input type="checkbox" id="my-nav-check" />
                <div className="my-nav-header">
                    <div className="my-nav-logo">
                        <img src={Van} alt="" width="45" height="45"/>
                    </div>
                    <div className="my-nav-title">
                        Saathi Production
                    </div>
                </div>
                <div className="my-nav-btn">
                    <label htmlFor="my-nav-check">
                        <span className="my-sp" />
                        <span className="my-sp" />
                        <span className="my-sp" />
                    </label>
                </div>

                {(props.home) ?
                    <div className="my-nav-links">
                        <Link className="links my-active" to="/home" >Home</Link>
                        <Link className="links" to="/links">Links</Link>
                        
                    </div>
                    : (props.links) ?

                        <div className="my-nav-links">
                            <Link className="links" to="/home" >Home</Link>
                            <Link className="links my-active" to="/links">Links</Link>
                            
                        </div>
                        
                            : ""
                }
            </div>

        </div>
    )
}
