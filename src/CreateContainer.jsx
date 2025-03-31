import React, { useState } from 'react';
import axios from 'axios';

const CreateContainerForm = () => {
    const [location, setLocation] = useState('');
    const [name, setName] = useState('');
    const [region, setRegion] = useState('');
    const [type, setType] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation (optional)
        if (!location || !name || !region || !type) {
            setErrorMessage('All fields are required.');
            return;
        }

        try {
            // Send a POST request to create a new container
            const response = await axios.post(
                'http://localhost:8080/create/container', 
                {
                    location,
                    name,
                    region,
                    type,
                }, { withCredentials: true } 
               
            );

            // Handle success
            setSuccessMessage('Container created successfully!');
            setErrorMessage('');
            console.log('Container created:', response.data);
        } catch (error) {
            // Handle error
            setErrorMessage('Error creating container.');
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <h2>Create New Container</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="location">Location:</label>
                    <input
                        type="text"
                        id="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="region">Region:</label>
                    <input
                        type="text"
                        id="region"
                        value={region}
                        onChange={(e) => setRegion(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="type">Type:</label>
                    <select
                        id="type"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        required
                    >
                        <option value="">Select Type</option>
                        <option value="private">Private</option>
                        <option value="public">Public</option>
                    </select>
                </div>

                {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
                {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}

                <button type="submit">Create Container</button>
            </form>
        </div>
    );
};

export default CreateContainerForm;
