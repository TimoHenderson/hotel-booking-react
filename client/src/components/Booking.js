import React from "react";

const Booking = ({ booking }) => {
    return (<div>
        <p>{booking.name}</p>
        <p>{booking.email_address}</p>
        <p>{booking.checked_in_status ? "checked in" : "checked out"}</p>
    </div>);
}

export default Booking;