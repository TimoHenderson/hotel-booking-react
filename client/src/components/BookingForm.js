import { useState } from "react";
import { postBooking } from "../services/BookingService";

const BookingForm = ({ addBooking }) => {
    const [formData, setFormData] = useState({ name: "", email_address: "", checked_in_status: false })

    const handleChange = (e) => {
        const newFormData = { ...formData };
        newFormData[e.target.id] = e.target.value;
        setFormData(newFormData);
    }

    const submitForm = (e) => {
        e.preventDefault();
        postBooking(formData).then((data) => {
            addBooking(data);
        })
        e.target.reset()
    }

    return (
        <form id="bookingsForm" onSubmit={submitForm}>
            <label htmlFor="name">Name: </label>
            <input onChange={handleChange} type="text" id="name" value={formData.name} required />
            <label htmlFor="email">Email: </label>
            <input onChange={handleChange} type="email" id="email_address" value={formData.email} required />
            <input type="submit" value="Add Booking" />
        </form>
    )
};

export default BookingForm; 