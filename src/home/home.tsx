import React from 'react';
import FloatingLines from "../background/background";

export default function Home() {
    return (
        <div style={{ position: 'relative', minHeight: '100vh' }}>
            <FloatingLines />
            <div style={{ position: 'relative', zIndex: 1 }}>
                <h1>Welcome to the React App</h1>
                <p>This is the home page of the app.</p>
            </div>
        </div>
    );
}