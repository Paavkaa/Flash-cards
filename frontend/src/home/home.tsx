import React from 'react';
import FloatingLines from "../utils/background";
import Nav, {Card} from "../utils";
import "./style.css";
import TestConnection from "../api/TestConnection";

export default function Home() {
    const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.stopPropagation(); // Prevents the click from reaching the card container
    };

    return (
        <div className="main">
            <FloatingLines/>
            <Nav/>

            <div>
                <h1 className="Title">FusionCards</h1>
                <h2 className="Subtitle">Learn fast way with flash cards</h2>
            </div>

            <div className="flex justifyCenter gap20">
                <Card
                    frontSide={
                        <div className={"flex column alignCenter justifyCenter largeCard"}>
                            <h3>Create account</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, tempore?</p>
                            <a href="/register" onClick={handleLinkClick} className="smallButton">Register</a>
                        </div>
                    }

                    backSide={
                        <div className={"flex column alignCenter justifyCenter largeCard"}>
                            <h3>Have account</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, tempore?</p>
                            <a href="/login" onClick={handleLinkClick} className="smallButton">Log in</a>
                        </div>
                    }
                />

                <div className="divBackground width50">
                    <TestConnection/>
                </div>
            </div>

        </div>
    );
}
