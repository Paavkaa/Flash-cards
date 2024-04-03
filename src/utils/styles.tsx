import React from "react";
import { alignCenter, flex } from "../styles";

interface NavStyleProps {
    isHovered: boolean;
}

export const NavStyle : React.CSSProperties = ({
    position: 'fixed',
    top: 0,
    left: 0,

    backgroundColor: '#EBf5EE10',
    backdropFilter: 'blur(10px)',

    height: '100%',
});

export const NavIcon : React.CSSProperties = ({
    ...flex,
    ...alignCenter,

    position: 'relative',
    top: '5vh',
    left: '0.5vw',

    gap: '10%',

    height: '5vh',

    fontSize: '4vh'
});
