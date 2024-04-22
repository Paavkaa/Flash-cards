import React from "react";
import Nav, {Card, Divider} from "../utils";

export default function SetPage() {
    return (
        <div className="main">
            <Nav />
            <div className="divBackground flex column alignCenter width80">
                <h1>Set name</h1>

                <Card
                    frontSide={
                        <div className="largeCard flex alignCenter justifyCenter textCenter">
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>

                    }

                    backSide={
                        <div className="largeCard flex alignCenter justifyCenter textCenter">
                            <p>Lorem ipsum dolor sit amet.</p>

                        </div>
                    }
                />

                <div className="width50">
                    <h3 className="textCenter">All cards</h3>
                    <div className="flex column">
                        <CardPreview />
                        <CardPreview />
                        <CardPreview />
                        <CardPreview />
                        <CardPreview />
                        <CardPreview />
                    </div>
                </div>
            </div>
        </div>
    );
}

function CardPreview() {
    return (
        <div className="card previewCard flex justifySpaceEvenly">
            <div className="width50">
                <p>Lorem ipsum dolor sit amet.</p>
            </div>

            <Divider/>

            <div className="width50">
                <p>Lorem ipsum dolor.</p>
            </div>
        </div>
    );
}
