import React from "react";
import { deleteBooking } from "../services/BookingService";

const Booking = ({ booking, removeBooking }) => {
    const handleDelete = () => {
        deleteBooking(booking._id)
            .then(() => {
                removeBooking(booking._id);
            })
    }
    return (<div>
        <p>{booking.name}</p>
        <p>{booking.email_address}</p>
        <p>{booking.checked_in_status ? "checked in" : "checked out"}</p>
        <button onClick={handleDelete}>Delete 🗑 </button>
    </div>);
}

export default Booking;

