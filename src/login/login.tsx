import React from "react";
import Nav from "../utils";
import "./styles.css";
import "../index.css";
import FloatingLines from "../utils/background";

export default function Login() {
    const [isFilled, setIsFilled] = React.useState({
        email: false,
        password: false
    });

    return (
        <>
            <FloatingLines/>
            <Nav/>
            <div className="divBackground width60">
                <h2 className="textCenter">Log in</h2>

                <form action="">
                    <div className="width100 labelPopUp">
                        <label id="emailLabel" htmlFor="email">
                            Email
                        </label>
                        <input
                            onChange={(e) => labelUp(e, setIsFilled)}
                            className="inputText"
                            type="email"
                            id="email"
                            name="email"
                            required
                        />
                    </div>

                    <div className="width100 labelPopUp">
                        <label id="passwordLabel" htmlFor="password">
                            Password
                        </label>
                        <input
                            onChange={(e) => labelUp(e, setIsFilled)}
                            className="inputText"
                            type="password"
                            id="password"
                            name="password"
                            required
                        />
                    </div>

                    <button className="smallButton" type="submit">
                        Log in
                    </button>
                </form>
            </div>
        </>
    )
}

export function Register() {
    const [isFilled, setIsFilled] = React.useState({
        email: false,
        password: false
    });

    return (
        <>
            <FloatingLines/>
            <Nav/>
            <div className="divBackground width60">
                <h2 className="textCenter">Register</h2>

                <form action="">
                    <div className="width100 labelPopUp">
                        <label id="emailLabel" htmlFor="email">
                            Email
                        </label>
                        <input
                            onChange={(e) => labelUp(e, setIsFilled)}
                            className="inputText"
                            type="email"
                            id="email"
                            name="email"
                            required
                        />
                    </div>

                    <div className="width100 labelPopUp">
                        <label id="passwordLabel" htmlFor="password">
                            Password
                        </label>
                        <input
                            onChange={(e) => labelUp(e, setIsFilled)}
                            className="inputText"
                            type="password"
                            id="password"
                            name="password"
                            required
                        />
                    </div>

                    <button className="smallButton" type="submit">
                        Register
                    </button>
                </form>
            </div>
        </>
    )
}

// utils/formUtils.ts

// utils/formUtils.ts

function labelUp(
    e: React.ChangeEvent<HTMLInputElement>,
    setIsFilled: React.Dispatch<React.SetStateAction<{ email: boolean; password: boolean }>>
) {
    const { id, value } = e.target;
    const isFilled = value.trim().length > 0;

    setIsFilled((prevState) => ({
        ...prevState,
        [id]: isFilled,
    }));

    const label = document.getElementById(id + 'Label');
    if (label) {
        if (isFilled) {
            label.classList.add("labelUp");
        } else {
            label.classList.remove("labelUp");
        }
    }
}