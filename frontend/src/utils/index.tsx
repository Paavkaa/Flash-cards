import React, {useState} from "react";
import './styles.css';
import {HiHome, HiUser} from "react-icons/hi2";
import {useSpring, config, animated} from "react-spring";

export default function Nav() {
    const [isHovered, setIsHovered] = React.useState(false);

    const smoothHover = useSpring({
        config: config.stiff,
        from: {
            width: '4vw'
        },
        to: {
            minWidth: isHovered ? '25%' : '4vw'
        }
    });

    return (
        <animated.div
            style={{...smoothHover}}
            className = "NavStyle"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >

            <div className="NavLink column" style={isHovered? {alignItems: "start"} : {alignItems: "center"}}>
                <div className="navItem">
                    {
                        isHovered ?
                            <a style={{fontFamily: 'Azeret Mono'}} className="navItem" href="/"><HiHome/> Home</a> :
                            <HiHome/>
                    }
                </div>

                <div className="navItem">
                    {
                        isHovered ?
                            <a style={{fontFamily: 'Azeret Mono'}} className="navItem" href="/user"><HiUser/> User profile</a> :
                            <HiUser/>
                    }
                </div>

                <div className="navItem">
                    {
                        isHovered ?
                            <a style={{fontFamily: 'Azeret Mono'}} className="navItem" href="/set"><HiUser/> Login</a> :
                            <HiUser/>
                    }
                </div>
            </div>
        </animated.div>
    );
}

/*export function footer() {
    return (
        <div className="Footer">

        </div>
    )
}*/

interface CardProps {
    frontSide: React.ReactNode;
    backSide: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ frontSide, backSide }) => {
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

    const { transform } = useSpring({
        to: {
            opacity: isFlipped ? 1 : 0,
            transform: `rotateY(${isFlipped ? 180 : 0}deg)`
        },
        from: {
            opacity: 0,
            transform: 'rotateY(0deg)'
        },
        config: { mass: 5, tension: 500, friction: 80 }
    });

    return (
        <div onClick={() => setIsFlipped(!isFlipped)}
             onMouseMove={handleMouseMove}
             onMouseLeave={handleMouseLeave}>
            <animated.div style={{ transform }} className="card" >
                <animated.div
                    style={{
                        transform: 'rotateY(0deg)',
                        display: isFlipped ? 'none' : 'block'
                    }}
                >
                    {frontSide}
                </animated.div>
                <animated.div
                    style={{
                        display: isFlipped ? 'block' : 'none',
                        transform: 'rotateY(180deg)'
                    }}
                >
                    {backSide}
                </animated.div>
            </animated.div>
        </div>
    );
}

export function SetPreview() {
    return (
        <a className="card smallCard cardHover flex column justifySpaceBetween"
           href="/set">
            <h3>Card title</h3>

            <div className="flex row justifySpaceBetween width80">
                <p>In set: 13</p>
                <p><HiUser/> Username</p>
            </div>
        </a>
    );
}

interface InputWithLabelProps {
    id: string;
    label: string;
    type: string;
    name: string;
    required?: boolean;
    className?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// TypeScript types for props, assuming you have them defined somewhere
interface InputWithLabelProps {
    id: string;
    label: string;
    type: string;
    name: string;
    required?: boolean;
    className?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // New prop for external change handler
}

export function InputWithLabel({ id, label, type, name, required = false, className = '', onChange }: InputWithLabelProps) {
    const [isFilled, setIsFilled] = React.useState(false);

    function labelUp(e: React.ChangeEvent<HTMLInputElement>) {
        const { value } = e.target;
        const isFilled = value.trim().length > 0;

        setIsFilled(isFilled);

        const label = document.getElementById(`${id}Label`);
        if (label) {
            if (isFilled) {
                label.classList.add("labelUp");
            } else {
                label.classList.remove("labelUp");
            }
        }

        // Call the external change handler passed from the parent component
        if (onChange) {
            onChange(e);
        }
    }

    return (
        <div className={`inputText width100 ${className}`}>
            <label id={`${id}Label`} htmlFor={id}>
                {label}
            </label>
            <input
                onChange={labelUp}
                type={type}
                id={id}
                name={name}
                required={required}
            />
        </div>
    );
}


export function Divider() {
    return (
        <div className="divider">
        </div>
    );
}
