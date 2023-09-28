import React from 'react'
import './ThankYou.css'
import { Link } from 'react-router-dom';

function ThankYou() {
    const currentDate = new Date().toLocaleString();

    return (
        <div className="ThankYou-container">
            <div className="ThankYou-Box">
                <img src = {require("./images/ticks.png")} alt="logo" className='ThankYou-img' />
                <h1 className="ThankYou-heading">Thanks for your purchase</h1>
                <h2 className="ThankYou-subheading">Order Summary</h2>
                <h2 className="ThankYou-subheading2">Item: Employement Job Listing</h2>
                <h2 className="ThankYou-subheading2">Total Cost: 10.00$</h2>
                <h2 className="ThankYou-subheading2">Order Number: 123456789</h2>
                <h2 className="ThankYou-subheading2">Order Date: {currentDate}</h2>
            </div>
            <Link to="/">
                <button style={{ marginTop: "-115px" }}>Return</button>
            </Link>
        </div>

    );
}


export default ThankYou;