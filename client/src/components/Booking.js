import React from "react";
import { deleteBooking, updateBooking } from "../services/BookingService";

const Booking = ({ booking, removeBooking, toggleCheckIn }) => {
    const handleDelete = () => {
        deleteBooking(booking._id)
            .then(() => {
                removeBooking(booking._id);
            })
    }
    const handleCheckIn = () => {
        updateBooking({ "checked_in_status": !booking.checked_in_status }, booking._id)
            .then(() => {
                toggleCheckIn(booking._id);
            })
    }
    return (<div>
        <p>{booking.name}</p>
        <p>{booking.email_address}</p>
        <p>{booking.checked_in_status ? "checked in" : "checked out"}</p>
        <button onClick={handleDelete}>Delete 🗑 </button>
        <button onClick={handleCheckIn}>{booking.checked_in_status ? "Checked In" : "Checked Out"}</button>
    </div>);
}

export default Booking;

