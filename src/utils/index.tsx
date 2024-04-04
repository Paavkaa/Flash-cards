import React from "react";
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
                        <HiHome/>
                        {
                            isHovered && (
                                <a style={{fontFamily: 'Azeret Mono'}} className="NavItem" href="/">home</a>
                            )
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