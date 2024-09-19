"use client";

import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Button, TextField } from "@mui/material";

const SignUpForm = () => {
    const router = useRouter();

    // Create refs for each input field to control focus
    const firstNameRef = useRef(null); // We initialize the reference with null because, at first, the input element is not yet rendered
    const lastNameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);

    // State to store form data for all fields
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
    });

    // Function to update form data when user types in any input field
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Function to handle key presses (like Enter) and move focus to the next input field
    const handleKeyPress = (e, nextRef) => {
        if (e.key === "Enter") {
            e.preventDefault(); // Prevent the form from submitting when Enter is pressed
            if (nextRef) {
                nextRef.current.focus(); // Move focus to the next field
            }
        }
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission
        alert(" Sign up was successful! Redirecting to home...");
        router.push("/"); // Redirect to home page
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "0 auto" }}>
            <TextField
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                inputRef={firstNameRef}
                fullWidth
                margin="normal"
                onKeyPress={(e) => handleKeyPress(e, lastNameRef)} // Move to Last Name on Enter
            />

            <TextField
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                inputRef={lastNameRef}
                fullWidth
                margin="normal"
                onKeyPress={(e) => handleKeyPress(e, emailRef)} // Move to Email on Enter
            />

            <TextField
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                inputRef={emailRef}
                fullWidth
                margin="normal"
                onKeyPress={(e) => handleKeyPress(e, phoneRef)} // Move to Phone on Enter
            />

            <TextField
                label="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                inputRef={phoneRef}
                fullWidth
                margin="normal"
                onKeyPress={(e) => handleKeyPress(e, null)} // No next input, so focus ends here
            />

            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                Submit
            </Button>
        </form>
    );
};

export default SignUpForm;
