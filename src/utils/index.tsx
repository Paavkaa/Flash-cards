import React from "react";
import { NavStyle, NavIcon } from './styles';
import { HiHome } from "react-icons/hi2";
import {flex, alignCenter} from "../styles";

function Nav() {
    const [isHovered, setIsHovered] = React.useState(false);

    const combinedStyle = {
        ...NavStyle,
        width: isHovered ? '20vh' : '5vh',
    }



    return (
        <div
            style={combinedStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div style={NavIcon}>
                <HiHome />

                {
                    isHovered && (
                        <a href="/">home</a>
                    )
                }
            </div>
        </div>
    );
};

export default Nav;