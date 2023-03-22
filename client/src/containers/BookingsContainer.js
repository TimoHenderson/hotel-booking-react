import React, { useState, useEffect } from "react";
import { getBookings } from "../services/BookingService";

const BookingsContainer = () => {
    const [bookings, setBookings] = useState({});

    useEffect(() => {
        getBookings()
            .then((allBookings) => {
                setBookings(allBookings);
            })
    }, []);

    return (<h1>BookingsContainer</h1>);
}

export default BookingsContainer;