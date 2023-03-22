import React, { useState, useEffect } from "react";
import BookingForm from "../components/BookingForm";
import BookingList from "../components/BookingList";
import { getBookings } from "../services/BookingService";

const BookingsContainer = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        getBookings()
            .then((allBookings) => {
                setBookings(allBookings);
            })
    }, []);

    const addBooking = (booking) => {
        const temp = [...bookings];
        temp.push(booking);
        setBookings(temp);
    }

    return (
        <>
            <BookingForm addBooking={addBooking} />
            <BookingList bookings={bookings} />
        </>
    );
}

export default BookingsContainer;