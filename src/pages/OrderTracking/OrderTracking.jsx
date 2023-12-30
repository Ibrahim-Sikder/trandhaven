/* eslint-disable react/no-unescaped-entities */

import { TextField } from "@mui/material";
import './OrderTracking.css'
const OrderTracking = () => {
    return (
        <div className="wrapContainer"> 
            <h3 className="text-3xl font-bold my-5">Order Tracking </h3>
            <div className="trackingOrder">
                <p className="text-xl mb-5">To track your order please enter your Order ID in the box below and press the "Track" button. This was given to you on your receipt and in the confirmation email you should have received.</p>
                <div>
                <TextField className="orderTrackingInput" id="outlined-required" label="Order Id" />
                <TextField className="orderTrackingInput" id="outlined-required" label="Billing Email" />
                </div>
                <button className="shopBtn trackBtn">Track</button>
            </div>
        </div>
    );
};

export default OrderTracking;