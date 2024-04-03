import React from "react";
import {alignCenter, flex} from "../styles";

const NavStyle : React.CSSProperties ={
    position: 'fixed',
    top: 0,
    left: 0,

    backgroundColor: '#EBf5EE10',
    backdropFilter: 'blur(10px)',

    height: '100%',
}
/*
const NavIcon : React.CSSProperties ={
    fontSize: '2rem',
}*/

const NavIcon ={
    ...flex,
    ...alignCenter,
}

export { NavStyle, NavIcon };