import React from "react";
import { NavStyle, NavIcon } from './styles';
import { HiHome } from "react-icons/hi2";

function Nav() {

    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <div
            style={NavStyle({isHovered})}
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
}

export default Nav;
