import React from "react";
import Nav, {Card} from "../utils";

export default function SetPage() {
    return (
        <div className="main">
            <Nav />
            <div className="divBackground flex column alignCenter">
                <h1>Set name</h1>

                <Card
                    frontSide={
                        <>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </>

                    }

                    backSide={
                        <>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </>
                    }
                />
                <button className="mediumButton">
                    Let's start!
                </button>
            </div>
        </div>
    );
}