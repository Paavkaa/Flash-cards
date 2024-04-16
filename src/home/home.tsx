import React from 'react';
import FloatingLines from "../utils/background";
import Nav, {Card} from "../utils";
import "./style.css";

export default function Home() {
    return (
        <div className="Main">
            <FloatingLines/>
            <Nav/>

            <div>
                <h1 className="Title">FusionCards</h1>
                <h2 className="Subtitle">Learn fast way with flash cards</h2>
            </div>

            <div className="flex justifyCenter">
                <div className="PreviewCard">
                    <Card/>
                </div>

                <div className="divBackground width50">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus blanditiis commodi corporis
                    dolorem
                    ducimus expedita fugit, iste neque nesciunt porro repellendus veniam. Consectetur ipsa, iste natus
                    numquam vel veniam voluptatum!
                </div>
            </div>

        </div>
    );
}
