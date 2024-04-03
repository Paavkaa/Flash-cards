import React from 'react';
import FloatingLines from "../utils/background";
import Nav from "../utils";
import {Main, Subtitle, Title} from "./style";

export default function Home() {
    return (
        <div style={Main}>
            <FloatingLines />
            <Nav />
            <div>
                <h1 style={Title}>FusionCards</h1>
                <h2 style={Subtitle}>Learn fast way with flash cards</h2>
            </div>
        </div>
    );
}