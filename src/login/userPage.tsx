import React from "react";
import Nav, {CardPreview} from "../utils";

export default function UserPage() {
    return (
        <div className="main">
            <Nav/>
            <h1>Welcome "user"</h1>

            <div className="divBackground width100 marginBottom20">
                <h2>Favourites</h2>
                <div id="fav" className="cardGrid">
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

            <div className="divBackground width100">
                <h2>My sets</h2>
                <div id="all" className="cardGrid">
                    <CardPreview/>
                    <CardPreview/>
                    <CardPreview/>
                    <CardPreview/>
                    <CardPreview/>
                    <CardPreview/>
                    <CardPreview/>
                    <CardPreview/>
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
        </div>
    );
}