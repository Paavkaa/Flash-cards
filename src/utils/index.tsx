import React, {useState} from "react";
import './styles.css';
import { HiHome } from "react-icons/hi2";
import {useSpring, config, animated} from "react-spring";

export default function Nav() {
    const [isHovered, setIsHovered] = React.useState(false);

    const smoothHover = useSpring({
        config: config.stiff,
        from: {
            width: '4vw'
        },
        to: {
            width: isHovered ? '20vw' : '4vw'
        }
    });

    return (
        <animated.div
            style={{...smoothHover}}
            className = "NavStyle"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div>

                <div className="NavLink">
                    <div className = "NavItem" >
                        {
                            isHovered ?
                                <a style={{fontFamily: 'Azeret Mono'}} className="NavItem" href="/"><HiHome/> home</a> : <HiHome/>
                        }
                    </div>

                </div>
            </div>

        </animated.div>
    );
}

export function footer() {
    return (
        <div className="Footer">

        </div>
    )
}

export function Card() {
    // State to track whether the card is flipped
    const [isFlipped, setIsFlipped] = useState(false)

    const calculateRotation = (x: number, y: number, cardElement: HTMLDivElement) => {
        const cardRect = cardElement.getBoundingClientRect();
        const cardCenterX = cardRect.width / 2;
        const cardCenterY = cardRect.height / 2;
        const mouseX = x - cardCenterX;
        const mouseY = y - cardCenterY;
        const rotateX = (mouseY / cardRect.height) * -10; // Adjust the factor as needed
        const rotateY = (mouseX / cardRect.width) * 10 * (mouseX < cardCenterX ? 1 : -1);

        return `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const cardElement = e.currentTarget;
        const { left, top } = cardElement.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;

        cardElement.style.transform = calculateRotation(x, y, cardElement);
    }

    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
        const cardElement = e.currentTarget;
        cardElement.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    }

    // Spring animation definitions
    const { transform } = useSpring({
        transform: `perspective(600px) rotateY(${isFlipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80, delay: 300},
    });

    // Function to flip the card
    const toggleFlip = () => setIsFlipped(!isFlipped);

    const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.stopPropagation(); // Prevents the click from reaching the card container
    };

    return (
        <animated.div
            className="Card"
            style={{
                transform,
                cursor: 'pointer',
            }}
            onClick={toggleFlip}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {
                isFlipped ? (
                    <div>
                        <h3>Create account</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, tempore?</p>
                        <a href="/register" onClick={handleLinkClick} className="smallButton">Register</a>
                    </div>
                ) : (
                    <div>
                        <h3>Have account</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, tempore?</p>
                        <a href="/login" onClick={handleLinkClick} className="smallButton">Log in</a>
                    </div>
                )
            }
        </animated.div>
    );
}