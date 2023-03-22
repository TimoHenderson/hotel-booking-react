import React from "react";
import Booking from "./Booking";

const BookingList = ({ bookings, removeBooking, toggleCheckIn }) => {

    const bookingNodes = bookings.map((booking) => {
        return <Booking key={booking._id} booking={booking} removeBooking={removeBooking} toggleCheckIn={toggleCheckIn} />
    })

    return (<div>{bookingNodes}</div>);
}

export default BookingList;