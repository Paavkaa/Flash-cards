import React from 'react';
import FloatingLines from "../utils/background";
import Nav from "../utils";
import "./style.css";
import Card from "../utils/card";

export default function Home() {
    return (
        <div className="Main">
            <FloatingLines/>
            <Nav/>
            <div>
                <h1 className="Title">FusionCards</h1>
                <h2 className="Subtitle">Learn fast way with flash cards</h2>
            </div>

            <div style={{margin: '5vh 0 10vh'}}>
                <a href={"/login"} className="MediumButton">
                    Create account
                </a>

                <button className="MediumButton">
                    Log in
                </button>
            </div>

            <div className="DivBackground">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus blanditiis commodi corporis dolorem
                ducimus expedita fugit, iste neque nesciunt porro repellendus veniam. Consectetur ipsa, iste natus
                numquam vel veniam voluptatum!
            </div>

            <Card />
        </div>
    );
}