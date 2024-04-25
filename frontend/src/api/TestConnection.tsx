import React, { useState, useEffect } from 'react';

function TestConnection() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        // Fetch data from the Spring Boot backend
        fetch('http://localhost:8080/api/test')
            .then(response => response.text())  // Assuming the server response is plain text
            .then(data => {
                setMessage(data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []); // The empty array causes this effect to only run on mount

    return (
        <div>
            <h1>Server Response:</h1>
            <p>{message}</p>
    </div>
);
}

export default TestConnection;