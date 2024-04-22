import React from "react";
import Nav, {Card} from "../utils";

export default function SetPage() {
    return (
        <div className="main">
            <Nav />
            <div className="divBackground flex column alignCenter width80">
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

                <div>
                    <h3>All cards</h3>
                    <div className="flex column">
                        <div>
                            <div>
                                <p>Frontside</p>
                            </div>

                            <div>
                                <p>Backside</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}