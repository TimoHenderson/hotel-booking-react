import React from "react";
import Booking from "./Booking";

const BookingList = ({ bookings, removeBooking }) => {

    const bookingNodes = bookings.map((booking) => {
        return <Booking key={booking._id} booking={booking} removeBooking={removeBooking} />
    })

    return (<div>{bookingNodes}</div>);
}

export default BookingList;