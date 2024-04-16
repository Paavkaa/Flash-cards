import React from "react";
import Nav, {Card, CardPreview} from "../utils";

export default function UserPage() {
    return (
        <div className="main">
            <Nav/>
            <h1>Welcome "user"</h1>

            <div className="divBackground width100 cardGrid">
                <CardPreview/>
                <CardPreview/>
                <CardPreview/>
                <CardPreview/>
                <CardPreview/>
                <CardPreview/>
                <CardPreview/>
                <CardPreview/>
            </div>
        </div>
    );
}
