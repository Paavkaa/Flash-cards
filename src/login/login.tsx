import React from "react";
import Nav from "../utils";
import "./styles.css";
import "../index.css";
import FloatingLines from "../utils/background";
import {BsFacebook, BsGoogle} from "react-icons/bs";

export default function Login() {
    const [isFilled, setIsFilled] = React.useState({
        email: false,
        password: false
    });

    return (
        <>
            <FloatingLines/>
            <Nav/>
            <div className="divBackground loginPosition">
                <h1 className="textCenter">Log in</h1>

                <form className="justifyCenter" action="">
                    <div className="labelPopUp width100">
                        <label id="loginNameLabel" htmlFor="loginName">
                            Nickname / Email
                        </label>
                        <input
                            onChange={(e) => labelUp(e, setIsFilled)}
                            className="inputText"
                            type="text"
                            id="loginName"
                            name="loginName"
                            required
                        />
                    </div>

                    <div className="labelPopUp width100">
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

                    <button className="mediumButton"
                            id="logIn"
                            type="submit">
                        Log in
                    </button>

                    <p>
                        Don't have an account? <a href="/register">Sign up!</a>
                    </p>
                </form>

                <div className="flex column alignCenter">
                    <h3>Other variations</h3>

                    <div className="flex column alignCenter width100">
                        <a className="mediumButton borderButton textCenter width80" href="/login">
                            <BsGoogle/> Google</a>
                        <a className="mediumButton borderButton textCenter width80" href="/login"><BsFacebook/> Facebook</a>
                    </div>
                </div>
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
            <div className="divBackground loginPosition">
                <h2 className="textCenter">Register</h2>

                <form className="justifyCenter" action="">
                    <div className="labelPopUp width100">
                        <label id="nicknameLabel" htmlFor="nickname">
                            Nickname
                        </label>
                        <input
                            onChange={(e) => labelUp(e, setIsFilled)}
                            className="inputText"
                            type="text"
                            id="nickname"
                            name="nickname"
                            required
                        />

                    </div>

                    <div className="labelPopUp width100">
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


                    <div className="width100 marginTop">
                        <div className="labelPopUp width100">
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

                        <div className="labelPopUp width100">
                            <label id="passwordCheckLabel" htmlFor="password">
                                Password again
                            </label>
                            <input
                                onChange={(e) => labelUp(e, setIsFilled)}
                                className="inputText"
                                type="password"
                                id="passwordCheck"
                                name="password"
                                required
                            />
                        </div>
                    </div>

                    <button className="mediumButton"
                            id="logIn"
                            type="submit">
                        Log in
                    </button>

                    <p>
                        Already have account? <a href="/login">Sign in!</a>
                    </p>

                    <div className="flex column alignCenter">
                        <h3>Connect with your account</h3>

                        <div className="flex column alignCenter width100">
                            <a className="mediumButton borderButton textCenter width80" href="/login">
                                <BsGoogle/> Google</a>
                            <a className="mediumButton borderButton textCenter width80"
                               href="/login"><BsFacebook/> Facebook</a>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

function labelUp(
    e: React.ChangeEvent<HTMLInputElement>,
    setIsFilled: React.Dispatch<React.SetStateAction<{ email: boolean; password: boolean }>>
) {
    const {id, value} = e.target;
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