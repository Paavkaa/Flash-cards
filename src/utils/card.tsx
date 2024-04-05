import React, {useState} from 'react';
import {animated, useSpring} from 'react-spring';
import './styles.css'

export default function Card() {
    // State to track whether the card is flipped
    const [isFlipped, setIsFlipped] = useState(false);

    // Spring animation definitions
    const { transform, /*opacity*/ } = useSpring({
        /*opacity: isFlipped ? 1 : 0,*/
        transform: `perspective(600px) rotateY(${isFlipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 },
    });

    // Function to flip the card
    const toggleFlip = () => setIsFlipped(!isFlipped);

    return (
        <animated.div
            className="Card"
            style={{ transform, cursor: 'pointer' }}
            onClick={toggleFlip} // Add click event to toggle the flip state
        >
            <h3>Card</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, tempore?</p>
            <a href="/login" className="SmallButton">Log in</a>
        </animated.div>
    );
}