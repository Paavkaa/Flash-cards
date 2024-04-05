import React, {useState} from 'react';
import {animated, useSpring} from 'react-spring';
import './styles.css'

export default function Card() {
    // State to track whether the card is flipped
    const [isFlipped, setIsFlipped] = useState(false)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Function to track mouse position
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { left, top } = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;

        setMousePosition({ x, y });

        console.log(mousePosition);
    };

    const calculateRotation = (x: number, y: number, cardElement: HTMLDivElement) => {
        const cardRect = cardElement.getBoundingClientRect();
        const cardWidth = cardRect.width;
        const cardHeight = cardRect.height;
        const tiltAngle = 10;
        const angleX = (cardHeight / 2 - y) / cardHeight * tiltAngle;
        const angleY = (x - cardWidth / 2) / cardWidth * tiltAngle;

        return `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    }

    // Spring animation definitions
    const { transform, /*opacity*/ } = useSpring({
        transform: `perspective(600px) rotateY(${isFlipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 },
    });

    // Function to flip the card
    const toggleFlip = () => setIsFlipped(!isFlipped);

    return (
        <animated.div
            className="Card"
            style={{
                transform,
                cursor: 'pointer',
            }}
            onClick={toggleFlip} // Add click event to toggle the flip state
            onMouseMove={handleMouseMove} // Add mouse move event to track the mouse position
        >
            {
                isFlipped ? (
                    <div style={{ transform: 'scaleX(-1)' }}>
                        <h3>Create account</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, tempore?</p>
                        <a href="/login" className="SmallButton">Register</a>
                    </div>
                ) : (
                    <div>
                        <h3>Have account</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, tempore?</p>
                        <a href="/login" className="SmallButton">Log in</a>
                    </div>
                )
            }
        </animated.div>
    );
}