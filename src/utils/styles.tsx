import React from "react";

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

export const NavItem : React.CSSProperties = ({
    height: '5vh',
    fontSize: '4vh',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
});

export const NavLink : React.CSSProperties = ({
    position: 'relative',
    top: '5vh',
    left: '0.5vw',
});
