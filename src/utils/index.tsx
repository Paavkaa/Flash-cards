import React from "react";
import { NavStyle, NavItem, NavLink } from './styles';
import { HiHome } from "react-icons/hi2";
import {animated, config, useSpring} from "react-spring";

function Nav() {

    const [isHovered, setIsHovered] = React.useState(false);

    const smoothHover = useSpring({
        config: config.stiff,
        from: {
            width: '3vw'
        },
        to: {
            width: isHovered ? '15vw' : '3vw'
        }
    })

    return (
        <animated.div
            style={{...NavStyle, ...smoothHover}}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >

            <div style={NavLink}>
                <HiHome style={NavItem} />

                {
                    isHovered && (
                        <a style={NavItem} href="/">home</a>
                    )
                }
            </div>

        </animated.div>
    );
}

export default Nav;
